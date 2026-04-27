"use client";
import { useState } from "react";
import Image from "next/image";

export default function ProductCards({ image, name, price, className }) {
  const [isWished, setIsWished] = useState(false);

  return (
    <>
      <div
        className={`group relative flex flex-col ${className} cursor-pointer`}
        role="button"
        aria-label={`View product ${name}`}
      >
        <div
          className="relative overflow-hidden bg-[#F5F3F0] aspect-[3/4]"
          aria-label={`Product image of ${name}`}
        >
          <Image
            src={image}
            alt={name}
            fill
            className="w-full h-full object-cover object-top
            transition-transform duration-700 ease-in-out
            group-hover:scale-105"
          />

          <div
            className="absolute inset-0 bg-black/10
            opacity-0 group-hover:opacity-100
            transition-opacity duration-500"
            aria-hidden="true"
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsWished((p) => !p);
            }}
            className="absolute top-3 right-3 cursor-pointer
            w-8 h-8 md:w-9 md:h-9
            flex items-center justify-center
            bg-white/80 backdrop-blur-sm rounded-full
            opacity-0 group-hover:opacity-100
            translate-y-2 group-hover:translate-y-0
            transition-all duration-300
            hover:bg-white"
            aria-label={isWished ? "Remove from wishlist" : "Add to wishlist"}
            aria-pressed={isWished}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              className="transition-colors duration-200"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
                 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09
                 C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5
                 c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                fill={isWished ? "#DD8560" : "none"}
                stroke={isWished ? "#DD8560" : "#333333"}
                strokeWidth="1.5"
              />
            </svg>
          </button>

          <div
            className="absolute bottom-0 left-0 right-0
            translate-y-full group-hover:translate-y-0
            transition-transform duration-400 ease-in-out "
            aria-hidden="true"
          >
            <button
              className="w-full py-3 cursor-pointer
              bg-[#333333] hover:bg-[#DD8560]
              text-white text-[11px] md:text-[12px] lg:text-[13px]
              font-[Tenor_Sans] tracking-[2px] uppercase
              transition-colors duration-300"
              aria-label={`Quick add ${name} to cart`}
            >
              Quick Add
            </button>
          </div>
        </div>

        <div className="pt-3 md:pt-4 flex flex-col gap-1">
          <p
            className="font-[Tenor_Sans] font-normal
            text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[24px]
            text-[#333333] leading-snug
            group-hover:text-[#DD8560] transition-colors duration-300
            line-clamp-2"
            aria-label={`Product name: ${name}`}
          >
            {name}
          </p>
          <p
            className="font-[Tenor_Sans] font-normal
            text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[24px]
            text-[#DD8560]"
            aria-label={`Price: ${price} dollars`}
          >
            ${price}
          </p>
        </div>
      </div>
    </>
  );
}
