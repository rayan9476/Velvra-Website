import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    return NextResponse.json(
      { message: "you don,t have an account please create account  first" },
      { status: 400 },
    );
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  // clear cookie
  cookieStore.delete("token");

  return NextResponse.json(
    { message: "User logout successfully" },
    { status: 200 },
  );
}
