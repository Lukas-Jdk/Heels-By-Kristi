import { NextApiRequest, NextApiResponse } from "next";
import { RateLimiterMemory } from "rate-limiter-flexible";
import Stripe from "stripe";

const rateLimiter = new RateLimiterMemory({
  points: 5,
  duration: 60,
});

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end("Method Not Allowed");
  }

  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

  try {
    await rateLimiter.consume(ip as string);
  } catch {
    return res
      .status(429)
      .json({ error: "Too many requests – please try again later." });
  }

  const { priceId } = req.body;

  if (!priceId) {
    return res.status(400).json({ error: "Missing priceId" });
  }

  // ✅ Leistinų Stripe kainų sąrašas
  const validPrices = [
    "price_oslo_basic",
    "price_oslo_zero",
    "price_oslo_inter",
    "price_oslo_tryout",
    "price_oslo_starter",
    "price_oslo_mover",
    "price_oslo_pro",
    "price_drm_basic",
    "price_drm_starter",
    "price_drm_mover",
    "price_drm_pro",
  ];

  if (!validPrices.includes(priceId)) {
    return res.status(400).json({ error: "Invalid priceId" });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${req.headers.origin}/success`,
      cancel_url: `${req.headers.origin}/cancel`,
    });

    return res.status(200).json({ url: session.url });
  } catch (err: unknown) {
    console.error("Stripe error:", err);
    if (err instanceof Error) {
      return res
        .status(500)
        .json({ error: "Internal server error: " + err.message });
    }
    return res.status(500).json({ error: "Unknown internal server error." });
  }
}
