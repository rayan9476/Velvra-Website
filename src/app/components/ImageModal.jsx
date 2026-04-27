"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

export default function ImageModal({ img, onClose }) {
  const modalRef = useRef(null);
  const imageRef = useRef(null);

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
      onComplete: onClose,
    });
  };

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 px-2.5 md:px-4 lg:px-5 bg-black/80 z-50 flex items-center justify-center"
      onClick={handleClose}
    >
      <div
        ref={imageRef}
        className="relative w-full h-[90%] "
        onClick={(e) => e.stopPropagation()}
      >
        <Image src={img} alt="Expanded Image" fill className="object-contain" />

        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-0 right-[0.4rem] text-white  hover:text-[#DD8560]  transition-colors duration-100 ease-in text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl cursor-pointer"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
//  <button
//         onClick={onRemove}
//         className="text-[#888888] hover:text-[#DD8560] transition-colors cursor-pointer"
//       >
//         <svg
//           className="md:h-[19px] md:w-[19px] lg:h-[20px] lg:w-[20px] xl:h-[21px] xl:w-[21px] 2xl:h-[22px] 2xl:w-[22px] 3xl:h-[23px] 3xl:w-[23px]   "
//           width="10"
//           height="10"
//           viewBox="0 0 24 24"
//           fill="none"
//         >
//           <path
//             d="M6 6L18 18"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//           />
//           <path
//             d="M6 18L18 6"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//           />
//         </svg>
//       </button>
