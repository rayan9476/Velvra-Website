"use client";

import FadeIn from "@/app/components/FadeIn";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setWishlist } from "../redux/features/CollectionDetailSlice";

function CollectionsProducts({ collection, wishlist }) {
  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-2 gap-3 md:gap-4">
      {collection.products.map((product, index) => (
        <FadeIn key={product.id} delay={index * 80}>
          <article aria-label={product.name}>
            {/* <Link href={`/products/${product.id}`}> */}
            <div className="group cursor-pointer">
              <div
                className="relative w-full overflow-hidden bg-[#1A1A1A]"
                style={{ height: "clamp(180px, 45vw, 360px)" }}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  sizes="(max-width: 768px) 50vw, 40vw"
                />

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    dispatch(setWishlist(product.id));
                  }}
                  aria-label={
                    wishlist[product.id]
                      ? "Remove from wishlist"
                      : "Add to wishlist"
                  }
                  aria-pressed={!!wishlist[product.id]}
                  className="Wishlist group-hover:!opacity-100 cursor-pointer  transition-opacity duration-500  absolute top-3 right-3 w-8 h-8 flex items-center justify-center z-10"
                >
                  <svg
                    className="lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 3xl:w-8 3xl:h-8 hover:fill-[#DD8560] transition-colors duration-300"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill={wishlist[product.id] ? "#DD8560" : "none"}
                  >
                    <path
                      d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                      stroke={wishlist[product.id] ? "#DD8560" : "#DD8560"}
                      strokeWidth="1.5"
                    />
                  </svg>
                </button>
              </div>

              <div className="pt-3 pb-4">
                <p className="font-[Tenor_Sans] text-[#555555] text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[20px] font-normal tracking-[2px] uppercase mb-1">
                  {product.brand}
                </p>
                <p className="font-[Tenor_Sans] text-[#CCCCCC] group-hover:text-[#DD8560] transition-all duration-500 text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[22px] font-normal leading-snug mb-1">
                  {product.name}
                </p>
                <div className="flex items-center gap-2">
                  <span className="font-[Tenor_Sans] text-[#C9A84C] text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[20px] font-normal">
                    ${product.price}
                  </span>
                  <span className="font-[Tenor_Sans] text-[#444444] text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[20px] font-normal line-through">
                    ${product.oldPrice}
                  </span>
                </div>
              </div>
            </div>
            {/* </Link> */}
          </article>
        </FadeIn>
      ))}
    </div>
  );
}

export default CollectionsProducts;
