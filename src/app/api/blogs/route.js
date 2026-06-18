import { NextResponse } from "next/server";
import db from "@/app/lib/db";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);

    const limit = Number(searchParams.get("limit")) || 4;
    const offset = Number(searchParams.get("offset")) || 0;

    const [blogs] = await db.query(
      `SELECT * FROM blogs
       WHERE is_active = TRUE
       ORDER BY created_at DESC
       LIMIT ? OFFSET ?`,
      [limit, offset],
    );

    return NextResponse.json({ blogs });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 },
    );
  }
}

export async function POST(request) {
  try {
    const { title, image, category, publish_date, tags } = await request.json();

    const [result] = await db.query(
      `INSERT INTO blogs
       (title, image, category, publish_date, tags)
       VALUES (?, ?, ?, ?, ?)`,
      [title, image, category, publish_date, JSON.stringify(tags)],
    );

    return NextResponse.json(
      {
        message: "Blog added",
        blogId: result.insertId,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 },
    );
  }
}
