import { NextResponse } from "next/server";
import db from "@/app/lib/db";
import { getUserFromToken } from "@/app/lib/auth";
import { sendOrderConfirmationEmail } from "@/app/lib/email";

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

    const body = await request.json();
    const paymentMethod = body.paymentMethod || "cashondelivery";

    if (!["cashondelivery", "card", "jazzcash"].includes(paymentMethod)) {
      return NextResponse.json(
        { message: "Invalid payment method" },
        { status: 400 },
      );
    }

    const userId = result.id;

    // get user cart items
    const [cartItems] = await db.query(
      `SELECT 
        cart.quantity,
        products.id as product_id,
         products.name,
        products.price,
        products.stock
      FROM cart
      JOIN products ON cart.product_id = products.id
      WHERE cart.user_id = ?`,
      [userId],
    );

    // check if cart is empty
    if (cartItems.length === 0) {
      return NextResponse.json(
        { message: "Your cart is empty" },
        { status: 400 },
      );
    }

    // check if all products have enough stock
    for (const item of cartItems) {
      if (item.stock < item.quantity) {
        return NextResponse.json(
          { message: `Not enough stock for product ${item.product_id}` },
          { status: 400 },
        );
      }
    }

    // calculate total price
    const totalPrice = cartItems.reduce((sum, item) => {
      return sum + item.price * item.quantity;
    }, 0);

    const tax = totalPrice * 0.17; // 17% GST Pakistan standard
    const finalTotal = totalPrice + tax;

    // create order
    const [newOrder] = await db.query(
      "INSERT INTO orders (user_id, total_price, tax, final_total, payment_method) VALUES (?, ?, ?, ?, ?)",
      [
        userId,
        totalPrice.toFixed(2),
        tax.toFixed(2),
        finalTotal.toFixed(2),
        paymentMethod,
      ],
    );

    const orderId = newOrder.insertId;

    // generate order number using date and id
    const date = new Date();
    const dateStr =
      date.getFullYear().toString() +
      String(date.getMonth() + 1).padStart(2, "0") +
      String(date.getDate()).padStart(2, "0");

    // generate order number using the id
    const orderNumber = `VLV-${dateStr}-${String(orderId).padStart(5, "0")}`;

    // save order number in database
    await db.query("UPDATE orders SET order_number = ? WHERE id = ?", [
      orderNumber,
      orderId,
    ]);

    // insert order items
    for (const item of cartItems) {
      await db.query(
        "INSERT INTO order_items (order_id, product_id, quantity, price) VALUES (?, ?, ?, ?)",
        [orderId, item.product_id, item.quantity, item.price],
      );

      // reduce stock
      await db.query("UPDATE products SET stock = stock - ? WHERE id = ?", [
        item.quantity,
        item.product_id,
      ]);
    }

    // clear cart after order placed
    await db.query("DELETE FROM cart WHERE user_id = ?", [userId]);

    // get user email
    const [users] = await db.query(
      "SELECT email, name FROM users WHERE id = ?",
      [userId],
    );

    // send confirmation email
    await sendOrderConfirmationEmail(users[0].email, {
      orderId,
      orderNumber,
      totalPrice: totalPrice.toFixed(2),
      tax: tax.toFixed(2),
      finalTotal: finalTotal.toFixed(2),
      paymentMethod,
      items: cartItems,
    });

    return NextResponse.json(
      {
        message: "Order placed successfully",
        orderId,
        orderNumber,
        totalPrice: totalPrice.toFixed(2),
        tax: tax.toFixed(2),
        finalTotal: finalTotal.toFixed(2),
        paymentMethod,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Order error:", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 },
    );
  }
}

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

    // get items for each order
    for (const order of orders) {
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
    }

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
