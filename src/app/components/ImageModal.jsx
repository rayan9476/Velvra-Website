"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useDispatch } from "react-redux";
import { setActiveImg } from "../redux/features/ProductDetailSlice";

export default function ImageModal({ img }) {
  const modalRef = useRef(null);
  const imageRef = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    // Animate overlay
    gsap.fromTo(
      modalRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: "power2.out" },
    );

    // Animate image zoom
    gsap.fromTo(
      imageRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.4, ease: "power3.out" },
    );
  }, []);

  const handleClose = () => {
    // Reverse animation
    gsap.to(imageRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 0.3,
      ease: "power3.in",
    });

    gsap.to(modalRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      onComplete: dispatch(setActiveImg(null)),
    });
  };

  return (
    <div
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      aria-label="Image preview modal"
      className="fixed inset-0 px-2.5 md:px-4 lg:px-5 bg-black/80 z-50 flex items-center justify-center"
      onClick={handleClose}
      onKeyDown={(e) => {
        if (e.key === "Escape") handleClose();
      }}
      tabIndex={-1}
    >
      <div
        ref={imageRef}
        className="relative w-full h-[90%] "
        onClick={(e) => e.stopPropagation()}
      >
        <Image src={img} alt="Expanded Image" fill className="object-contain" />

        {/* Close button */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close image preview"
          className="absolute top-0 right-[0.4rem] text-white  hover:text-[#DD8560]  transition-colors duration-100 ease-in text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl cursor-pointer"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
