import { NextResponse } from "next/server";
import db from "@/app/lib/db";
import { getUserFromToken } from "@/app/lib/auth";

// get all cart items for logged in user with product details and total price logic start her
export async function GET() {
  try {
    // Check if user is logged in
    const result = await getUserFromToken();

    if (result.error) {
      return NextResponse.json(
        { message: "Unauthorized please login first" },
        { status: 401 },
      );
    }
    const decoded = result;

    // Get cart items with product details
    const [cartItems] = await db.query(
      `SELECT 
        cart.id,
        cart.quantity,
        products.id as product_id,
        products.name,
        products.price,
        products.image,
        products.category
      FROM cart
      JOIN products ON cart.product_id = products.id
      WHERE cart.user_id = ?`,
      [decoded.id],
    );

    // calculate total price
    const total = cartItems.reduce((sum, item) => {
      return sum + item.price * item.quantity;
    }, 0);

    return NextResponse.json(
      {
        cartItems,
        total: total.toFixed(2),
        itemCount: cartItems.length,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Cart error:", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 },
    );
  }
}
// get all cart items for logged in user with product details and total price logic start her

//  add item to cart if already exists then update quantity logic start here
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

    // get productId and quantity
    const { productId, quantity } = await request.json();

    // check if productId and quantity are provided
    if (!productId || quantity == null) {
      return NextResponse.json(
        { message: "ProductId and quantity required" },
        { status: 400 },
      );
    }

    // if item already exists in cart then update quantity otherwise insert new item
    await db.query(
      `INSERT INTO cart (user_id, product_id, quantity)
   VALUES (?, ?, ?)
   ON DUPLICATE KEY UPDATE 
   quantity = quantity + VALUES(quantity)`,
      [userId, productId, quantity],
    );

    return NextResponse.json(
      { message: "Item added to cart" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Cart error:", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 },
    );
  }
}
//  add item to cart if already exists then update quantity logic ends here

// update cart item quantity logic start here
export async function PUT(request) {
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

    const { productId, quantity } = await request.json();

    if (!productId || quantity == null) {
      return NextResponse.json(
        { message: "ProductId and quantity required" },
        { status: 400 },
      );
    }

    await db.query(
      "UPDATE cart SET quantity = ? WHERE user_id = ? AND product_id = ?",
      [quantity, userId, productId],
    );

    return NextResponse.json({ message: "Cart updated" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 },
    );
  }
}
// update cart item quantity logic ends here

// remove item from cart logic start here
export async function DELETE(request) {
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

    const { productId } = await request.json();

    if (!productId) {
      return NextResponse.json(
        { message: "ProductId required" },
        { status: 400 },
      );
    }

    await db.query("DELETE FROM cart WHERE user_id = ? AND product_id = ?", [
      userId,
      productId,
    ]);

    return NextResponse.json(
      { message: "Item removed from cart" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 },
    );
  }
}
// remove item from cart logic ends here
