import { NextApiRequest, NextApiResponse } from "next";
import { RateLimiterMemory } from "rate-limiter-flexible";
import Stripe from "stripe";

const rateLimiter = new RateLimiterMemory({
  points: 5,
  duration: 60,
});

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-06-30.basil",
});


const productNames: Record<string, string> = {
  "price_1Ro0sOHsJm7V7w1Yy4RZ71bp": "Basic Beginner Drop-in - OSLO",
  "price_1RqxIoHsJm7V7w1YmfTZyNfB": "Zero Level Beginners - OSLO",
  "price_1RqxJoHsJm7V7w1Y0a3DGwlS": "Intermediate Beginners Drop-in - OSLO",
  "price_1RqxKZHsJm7V7w1YTd3g3r5k": "2 clips - OSLO",
  "price_1RqxLVHsJm7V7w1YfSFj6zEv": "5 clips - OSLO",
  "price_1RqxNFHsJm7V7w1YVaPFKDmp": "10 clips - OSLO",
  "price_1RqxOUHsJm7V7w1YC1uxaPvj": "15 clips - OSLO",
  "price_1RqxPNHsJm7V7w1Y1S9ejKVG": "Basic Beginner Drop-in - DRAMMEN",
  "price_1SD0cbHsJm7V7w1YGcARHezC": "2 clips - DRAMMEN",
  "price_1RqxReHsJm7V7w1YpfpKX55Q": "5 clips - DRAMMEN",
  "price_1RqxSTHsJm7V7w1Y0kIC3maa": "10 clips - DRAMMEN",
  "price_1RqxT1HsJm7V7w1YbVraaLbm": "15 clips - DRAMMEN",
};

function getProductNameFromPrice(priceId: string): string {
  return productNames[priceId] || "Unknown product";
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end("Method Not Allowed");

  const rawIp = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  const ip = Array.isArray(rawIp) ? rawIp[0] : rawIp;

  try {
    await rateLimiter.consume(ip || "unknown");
  } catch {
    return res.status(429).json({
      error: "Too many requests – please try again later.",
    });
  }

  const { priceId } = req.body;

  if (
    typeof priceId !== "string" ||
    !priceId.trim() ||
    !productNames[priceId]
  ) {
    return res.status(400).json({ error: "Invalid or missing priceId" });
  }

  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL || req.headers.origin || "";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${baseUrl}/success`,
      cancel_url: `${baseUrl}/cancel`,
      metadata: {
        product_name: getProductNameFromPrice(priceId),
      },
    });

    return res.status(200).json({
      url: session.url,
      sessionId: session.id,
    });
  } catch (err: unknown) {
    console.error("Stripe error:", JSON.stringify(err, null, 2));
    if (err instanceof Error) {
      return res
        .status(500)
        .json({ error: "Internal server error: " + err.message });
    }
    return res.status(500).json({ error: "Unknown internal server error." });
  }
}
