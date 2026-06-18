import { NextResponse } from "next/server";
import db from "@/app/lib/db";

export async function GET(request, { params }) {
  try {
    const { id } = await params;

    const [blogs] = await db.query(
      "SELECT * FROM blogs WHERE id = ? AND is_active = TRUE",
      [id],
    );

    if (blogs.length === 0) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }

    const blog = {
      ...blogs,
      tags: typeof blogs[0].tags === "string" ? blogs[0].tags.split(",") : [],
    };

    return NextResponse.json({ blog }, { status: 200 });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 },
    );
  }
}
