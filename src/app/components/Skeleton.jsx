"use client";
import { useEffect, useState } from "react";
import skeletonConfig from "@/bones/main-div.bones.json"; // your JSON file

export default function Skeleton({ name, loading, error, children }) {
  const [viewport, setViewport] = useState(1280);

  // Get current viewport width on mount and resize
  useEffect(() => {
    const getViewport = () => {
      const width = window.innerWidth;
      // Match to your JSON breakpoints
      if (width >= 1536) return 1536;
      if (width >= 1280) return 1280;
      if (width >= 1024) return 1024;
      if (width >= 768) return 768;
      return 375;
    };

    setViewport(getViewport());

    const handleResize = () => setViewport(getViewport());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const config = skeletonConfig[viewport] || skeletonConfig[1280];

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-[Tenor_Sans] font-normal text-red-400 text-[14px] tracking-wide">
          {error}
        </p>
      </div>
    );
  }

  if (loading) {
    return (
      <div
        style={{
          minHeight: config?.height || 1806,
          width: "100%",
          position: "relative",
        }}
      >
        {config?.bones?.map((bone) => (
          <div
            key={bone.name}
            style={{
              position: "absolute",
              top: bone.top,
              left: bone.left,
              width: bone.width,
              height: bone.height,
            }}
            className="bg-gray-200 animate-pulse rounded"
          />
        ))}
      </div>
    );
  }

  return <>{children}</>;
}
