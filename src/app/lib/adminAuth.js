import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function isAdmin() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) return { error: "Please login first" };

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  if (decoded.role !== "admin") return { error: "Admin access only" };

  return decoded;
}
