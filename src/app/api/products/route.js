import { NextResponse } from "next/server";
import db from "@/app/lib/db";
import { z } from "zod";
import { isAdmin } from "@/app/lib/adminAuth";

// all products get logic start here
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = searchParams.get("limit") || null;

    const query = limit
      ? `SELECT * FROM products ORDER BY created_at ASC LIMIT ${parseInt(limit)}`
      : "SELECT * FROM products ORDER BY created_at ASC";

    const [products] = await db.query(query);

    return NextResponse.json(
      {
        message: "products  fetched successfully",
        products: products,
        totalProducts: products.length,
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
// all products get logic ends here

// product validation schema using zod
const productSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  price: z.number().positive("Price must be greater than 0"),
  image: z.string().min(1, "Image URL is required"),
  category: z.string().min(2, "Category is required"),
  stock: z.number().int().min(0, "Stock cannot be negative"),
});

// add new product logic start here
export async function POST(request) {
  try {
    // only admin can add new product
    const admin = await isAdmin();
    if (admin.error) {
      return NextResponse.json({ message: admin.error }, { status: 401 });
    }

    const body = await request.json();

    const result = productSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { errors: result.error.issues.map((e) => e.message) },
        { status: 400 },
      );
    }

    const { name, description, price, image, category, stock } = result.data;

    // insert new product into database
    const [newProduct] = await db.query(
      "INSERT INTO products (name, description, price, image, category, stock) VALUES (?, ?, ?, ?, ?, ?)",
      [name, description, price, image, category, stock],
    );

    return NextResponse.json(
      {
        message: "Product added successfully",
        productId: newProduct.insertId,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error adding product:", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 },
    );
  }
}

// add new product logic ends here
