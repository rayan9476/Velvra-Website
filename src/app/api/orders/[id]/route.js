import { NextResponse } from "next/server";
import db from "@/app/lib/db";
import { getUserFromToken } from "@/app/lib/auth";
export async function GET(request, { params }) {
  try {
    const { id } = await params;
    // Check if user is logged in
    const result = await getUserFromToken();

    if (result.error) {
      return NextResponse.json(
        { message: "Unauthorized please login first" },
        { status: 401 },
      );
    }

    const userId = result.id;
    const isAdmin = result.role === "admin";

    const { searchParams } = new URL(request.url);
    const statusFilter = searchParams.get("status");

    // query
    let query = `
      SELECT
        orders.id,
        orders.order_number,
        orders.total_price,
        orders.tax,
        orders.final_total,
        orders.payment_method,
        orders.status,
        orders.created_at
             
      FROM orders
      WHERE orders.id = ?
       AND orders.user_id = ?
    `;
    const queryParams = [id, userId];

    // User sends ?status=exclude_cancelled → hide cancelled
    // Admin sends nothing → sees everything
    if (statusFilter === "exclude_cancelled" && !isAdmin) {
      query += ` AND orders.status != 'cancelled'`;
    }

    const [orders] = await db.query(query, queryParams);

    // check if user has any orders or cancelled
    if (orders.length === 0) {
      return NextResponse.json(
        { order: null, message: "Order not found or cancelled" },
        { status: 200 },
      );
    }

    // get items for only one

    const order = orders[0];

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
      [order.id],
    );
    order.items = orderItems;

    return NextResponse.json(
      {
        order,
        totalOrders: orderItems.length,
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

export async function PUT(request, { params }) {
  try {
    const result = await getUserFromToken();
    if (result.error) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;

    // Only allow cancel if still pending
    const [orders] = await db.query(
      "SELECT * FROM orders WHERE id = ? AND user_id = ?",
      [id, result.id],
    );

    if (orders.length === 0) {
      return NextResponse.json({ message: "Order not found" }, { status: 404 });
    }

    if (orders[0].status !== "pending") {
      return NextResponse.json(
        { message: "Only pending orders can be cancelled" },
        { status: 400 },
      );
    }

    // Update status to cancelled — never delete
    await db.query("UPDATE orders SET status = ? WHERE id = ?", [
      "cancelled",
      id,
    ]);

    // Restore stock
    const [items] = await db.query(
      "SELECT * FROM order_items WHERE order_id = ?",
      [id],
    );

    for (const item of items) {
      await db.query("UPDATE products SET stock = stock + ? WHERE id = ?", [
        item.quantity,
        item.product_id,
      ]);
    }

    return NextResponse.json(
      {
        message: "Order cancelled successfully",
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 },
    );
  }
}
