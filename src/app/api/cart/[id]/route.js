import { NextResponse } from "next/server";
import db from "@/app/lib/db";
import { getUserFromToken } from "@/app/lib/auth";

// remove item from cart logic start here
export async function DELETE(request, { params }) {
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

    // const { productId } = await request.json();
    const { id } = await params;
    const productId = id;
    console.log("productId", productId);
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
    console.error("DELETE ERROR:", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 },
    );
  }
}
// remove item from cart logic ends here
