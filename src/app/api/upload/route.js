import { NextResponse } from "next/server";
import imagekit from "@/app/lib/imagekit";

// upload image to ImageKit and return the URL logic start here
export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get("image");

    if (!file) {
      return NextResponse.json(
        { message: "No image provided" },
        { status: 400 },
      );
    }

    // Convert file to base64
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64 = buffer.toString("base64");

    // Upload to ImageKit
    const uploadResponse = await imagekit.upload({
      file: base64,
      fileName: file.name,
      folder: "/velvra/products",
    });

    return NextResponse.json(
      {
        message: "Image uploaded successfully",
        url: uploadResponse.url,
        fileId: uploadResponse.fileId,
      },
      { status: 200 },
    );
  } catch (error) {
    console.log("Upload error:", error);
    return NextResponse.json(
      { message: "Image upload failed" },
      { status: 500 },
    );
  }
}
// upload image to ImageKit and return the URL logic ends here
