import { NextResponse } from "next/server";
import Stripe from "stripe";
import db from "@/app/lib/db";
import { getUserFromToken } from "@/app/lib/auth";

// initialize Stripe with secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// create Stripe checkout session for the logged in user's cart items logic start here
export async function POST(request) {
  try {
    // Check if user is logged in
    const result = await getUserFromToken();

    if (result.error) {
      return NextResponse.json(
        { message: "Unauthorized please login first" },
        { status: 401 },
      );
    }

    const userId = result.id;

    // Get cart items
    const [cartItems] = await db.query(
      `SELECT 
        cart.quantity,
        products.id as product_id,
        products.name,
        products.price,
        products.image
      FROM cart
      JOIN products ON cart.product_id = products.id
      WHERE cart.user_id = ?`,
      [userId],
    );

    if (cartItems.length === 0) {
      return NextResponse.json({ message: "Cart is empty" }, { status: 400 });
    }

    // create Stripe line items
    const lineItems = cartItems.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
          images: item.image?.startsWith("http") ? [item.image] : [],
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    }));

    // create stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_URL}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL}/cart`,
    });

    return NextResponse.json(
      {
        url: session.url,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Payment error:", error);
    return NextResponse.json({ message: "Payment failed" }, { status: 500 });
  }
}
// create Stripe checkout session for the logged in user's cart items logic ends here
