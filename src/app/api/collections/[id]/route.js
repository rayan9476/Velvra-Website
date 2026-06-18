import { NextResponse } from "next/server";
import db from "@/app/lib/db";

export async function GET(request, { params }) {
  try {
    const { id } = await params;

    // Get collection
    const [collections] = await db.query(
      "SELECT * FROM collections WHERE id = ?",
      [id],
    );
    if (collections.length === 0) {
      return NextResponse.json(
        { message: "Collection not found" },
        { status: 404 },
      );
    }

    // Get products in this collection
    const [products] = await db.query(
      "SELECT * FROM products WHERE collection_id = ? ORDER BY created_at DESC",
      [id],
    );

    return NextResponse.json(
      {
        collection: collections[0],
        products,
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
