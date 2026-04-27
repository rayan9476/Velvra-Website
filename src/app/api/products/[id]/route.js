import { NextResponse } from "next/server";
import db from "@/app/lib/db";
import { isAdmin } from "@/app/lib/adminAuth";
import { z } from "zod";

// single product info  get logic start here
export async function GET(request, { params }) {
  try {
    const { id } = await params;

    // check  id is a valid number
    if (!id || isNaN(id)) {
      return NextResponse.json(
        { message: "Invalid product id" },
        { status: 400 },
      );
    }

    const [product] = await db.query("SELECT * FROM products WHERE id = ?", [
      id,
    ]);

    // check  product exists
    if (product.length === 0) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 },
      );
    }

    return NextResponse.json(
      {
        message: "product  fetched successfully",
        product: product[0],
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
// single product info  get logic ends here

// product validation schema using zod
const productSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  price: z.number().positive("Price must be greater than 0"),
  image: z.string().min(1, "Image URL is required"),
  category: z.string().min(2, "Category is required"),
  stock: z.number().int().min(0, "Stock cannot be negative"),
});

// update existing product logic start here
export async function PUT(request, { params }) {
  try {
    // only admin can update product
    const admin = await isAdmin();
    if (admin.error) {
      return NextResponse.json({ message: admin.error }, { status: 401 });
    }

    const { id } = await params;

    // check  id is a valid number
    if (!id || isNaN(id)) {
      return NextResponse.json(
        { message: "Invalid product id" },
        { status: 400 },
      );
    }

    const body = await request.json();

    const result = productSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { errors: result.error.issues.map((e) => e.message) },
        { status: 400 },
      );
    }

    // check product exists
    const [existing] = await db.query("SELECT * FROM products WHERE id = ?", [
      id,
    ]);

    if (existing.length === 0) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 },
      );
    }

    const { name, description, price, image, category, stock } = result.data;

    // update product in database
    await db.query(
      "UPDATE products SET name = ?, description = ?, price = ?, image = ?, category = ?, stock = ? WHERE id = ?",
      [name, description, price, image, category, stock, id],
    );

    return NextResponse.json(
      {
        message: "Product updated successfully",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error updating product:", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 },
    );
  }
}

// update existing product logic ends here

// delete existing product logic start here
export async function DELETE(request, { params }) {
  try {
    // only admin can delete product
    const admin = await isAdmin();
    if (admin.error) {
      return NextResponse.json({ message: admin.error }, { status: 401 });
    }

    const { id } = await params;

    // check  id is a valid number
    if (!id || isNaN(id)) {
      return NextResponse.json(
        { message: "Invalid product id" },
        { status: 400 },
      );
    }

    // check product exists
    const [existing] = await db.query("SELECT * FROM products WHERE id = ?", [
      id,
    ]);

    if (existing.length === 0) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 },
      );
    }

    // delete product from database
    await db.query("DELETE FROM products WHERE id = ?", [id]);

    return NextResponse.json(
      {
        message: "Product deleted successfully",
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error deleting product:", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 },
    );
  }
}

// delete existing product logic ends here
