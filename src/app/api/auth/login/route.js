import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import db from "@/app/lib/db";
import { z } from "zod";

// Define validation schema for validation logic start here
const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});
// Define validation schema for validation logic ends here

//  user login logic start here
export async function POST(request) {
  const body = await request.json();

  // Validate first
  const result = loginSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { errors: result.error.issues.map((e) => e.message) },
      { status: 400 },
    );
  }

  const { email, password } = result.data;

  // check if user exists
  const [users] = await db.query("SELECT * FROM users WHERE email = ?", [
    email,
  ]);
  if (users.length === 0) {
    return NextResponse.json(
      { message: "Invalid email or password" },
      { status: 401 },
    );
  }

  const user = users[0];

  //compare password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return NextResponse.json(
      { message: "Invalid email or password" },
      { status: 401 },
    );
  }

  // create new token
  const token = jwt.sign(
    {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
    process.env.JWT_SECRET,
    { expiresIn: "7d" },
  );

  // set in to cookie
  const response = NextResponse.json(
    {
      message: "Login successful",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    },
    { status: 200 },
  );

  response.cookies.set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });

  return response;
}
//  user login logic ends here
