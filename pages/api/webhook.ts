import type { NextApiRequest, NextApiResponse } from "next";
import { buffer } from "micro";
import Stripe from "stripe";
import { Resend } from "resend";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2025-06-30.basil",
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end("Method not allowed");

  const buf = await buffer(req);
  const sig = req.headers["stripe-signature"] as string;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
  } catch (err: any) {
    console.error("Webhook error:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    const customerEmail = session.customer_details?.email;
    const amountTotal = (session.amount_total || 0) / 100;
    const productName = session.metadata?.product_name || "Unknown product";

  
    try {
      await resend.emails.send({
        from: "Heels by Kristi <heelsbykristi@gmail.com>",
        to: "heelsbykristi@gmail.com",
        subject: "New Purchase Notification",
        html: `
          <h2>New Purchase Received</h2>
          <p><strong>Customer Email:</strong> ${customerEmail}</p>
          <p><strong>Product:</strong> ${productName}</p>
          <p><strong>Total Paid:</strong> ${amountTotal} NOK</p>
        `,
      });
    } catch (e) {
      console.error("Admin email error:", e);
    }

    if (customerEmail) {
      try {
        await resend.emails.send({
          from: "Heels by Kristi <heelsbykristi@gmail.com>",
          to: customerEmail,
          subject: "Thank you for your purchase!",
          html: `
            <h2>Thank you for your purchase!</h2>
            <p>You bought: <strong>${productName}</strong></p>
            <p>Amount paid: <strong>${amountTotal} NOK</strong></p>
            <p>If you have any questions, just reply to this email.</p>
          `,
        });
      } catch (e) {
        console.error("Customer email error:", e);
      }
    }
  }

  res.status(200).json({ received: true });
}
