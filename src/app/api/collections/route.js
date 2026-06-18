import { NextResponse } from "next/server";
import db from "@/app/lib/db";

export async function GET() {
  try {
    const [collections] = await db.query(
      "SELECT * FROM collections WHERE is_active = TRUE ORDER BY number ASC",
    );
    return NextResponse.json({ collections }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 },
    );
  }
}

export async function POST(request) {
  try {
    const {
      number,
      title,
      subtitle,
      image,
      hero_image,
      accent,
      accent_number,
    } = await request.json();

    const [result] = await db.query(
      "INSERT INTO collections (number, title, subtitle, image, hero_image, accent, accent_number) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [number, title, subtitle, image, hero_image, accent, accent_number],
    );

    return NextResponse.json(
      {
        message: "Collection added",
        collectionId: result.insertId,
      },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 },
    );
  }
}
