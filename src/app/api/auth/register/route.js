import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import db from "@/app/lib/db";
import { z } from "zod";
import jwt from "jsonwebtoken";

// Define validation schema for validation logic start here
const registerSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name too long"),
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(100, "Password too long"),
});
// Define validation schema for validation logic ends here

// create a new account logic start here
export async function POST(request) {
  const body = await request.json();

  // Validate first
  const result = registerSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { errors: result.error.issues.map((e) => e.message) },
      { status: 400 },
    );
  }

  const { name, email, password } = result.data;

  // check if user already exists
  const [existing] = await db.query("SELECT * FROM users WHERE email = ?", [
    email,
  ]);
  if (existing.length > 0) {
    return NextResponse.json(
      { message: "User already exists" },
      { status: 400 },
    );
  }

  // Encrypt password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Save to database
  const [User] = await db.query(
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
    [name, email, hashedPassword],
  );

  // json web token
  const token = jwt.sign(
    {
      id: User.insertId,
      name: name,
      email: email,
      role: "user",
    },
    process.env.JWT_SECRET,
    { expiresIn: "7d" },
  );

  const response = NextResponse.json(
    {
      message: "user register successfully",
      user: {
        id: User.insertId,
        name,
        email,
        role: "user",
      },
    },
    { status: 201 },
  );

  // set token in http only  cookie
  response.cookies.set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });

  return response;
}
// create a new account logic ends here
