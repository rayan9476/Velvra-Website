import { NextResponse } from "next/server";
import db from "@/app/lib/db";
import { getUserFromToken } from "@/app/lib/auth";
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

    const userId = result.id;

    // get all orders for this user
    const [orders] = await db.query(
      `SELECT 
        orders.id,
        orders.total_price,
        orders.status,
        orders.created_at
      FROM orders
      WHERE orders.user_id = ?
      ORDER BY orders.created_at DESC`,
      [userId],
    );

    // check if user has any orders
    if (orders.length === 0) {
      return NextResponse.json({ message: "No orders found" }, { status: 404 });
    }

    // get items for only one

    const [orderItems] = await db.query(
      `SELECT
          order_items.quantity,
          order_items.price,
          products.name,
          products.image,
          products.category
        FROM order_items
        JOIN products ON order_items.product_id = products.id
        WHERE order_items.order_id = ?`,
      [orders.id],
    );
    orders.items = orderItems;

    return NextResponse.json(
      {
        orders,
        totalOrders: orders.length,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Order error:", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 },
    );
  }
}
