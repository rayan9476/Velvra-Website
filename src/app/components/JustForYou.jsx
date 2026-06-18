"use client";
import DividerSVG from "./DividerSVG";
import ProductCards from "./ProductCards";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

const forYouProducts = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1659522761084-79196b64abe4?q=80&w=600&auto=format&fit=crop",
    name: "21WN Reversible Angora Cardigan",
    price: "120",
    category: "Apparel",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1666635228066-b2638dbe6503?q=80&w=600&auto=format&fit=crop",
    name: "Silk Wrap Midi Dress",
    price: "240",
    category: "Dress",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=600&auto=format&fit=crop",
    name: "Linen Oversized Blazer",
    price: "185",
    category: "Apparel",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=600&auto=format&fit=crop",
    name: "Cashmere Turtleneck Knit",
    price: "310",
    category: "Tshirt",
  },

  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1659522761084-79196b64abe4?q=80&w=600&auto=format&fit=crop",
    name: "21WN Reversible Angora Cardigan",
    price: "120",
    category: "Bag",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1666635228066-b2638dbe6503?q=80&w=600&auto=format&fit=crop",
    name: "Silk Wrap Midi Dress",
    price: "240",
    category: "Dress",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=600&auto=format&fit=crop",
    name: "Linen Oversized Blazer",
    price: "185",
    category: "Bag",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=600&auto=format&fit=crop",
    name: "Cashmere Turtleneck Knit",
    price: "310",
    category: "Tshirt",
  },
];

function JustForYou() {
  return (
    <>
      <section
        className="flex flex-col items-center justify-center   w-full  px-2.5 md:px-4 lg:px-5  pb-8 md:pb-16 lg:pb-20 xl:pb-24 2xl:pb-28 3xl:pb-32"
        aria-labelledby="just-for-you-heading"
      >
        <h2
          id="just-for-you-heading"
          className="flex flex-col items-center justify-center text-[24px] uppercase md:text-[32px] lg:text-[38px] xl:text-[44px] 2xl:text-[64px] 3xl:text-[66px] font-[Tenor_Sans] font-normal text-center text-[#0A0A0A] leading-[34.5px] md:leading-[50.5px]  lg:leading-[55.5px]  xl:leading-[60.5px] 2xl:leading-[70.5px] 3xl:leading-[90.5px] mb-6 md:mb-8 lg:mb-10 xl:mb-12 2xl:mb-16 3xl:mb-20"
        >
          Just for You
          <DividerSVG className="w-[7rem] md:w-[8rem] lg:w-[9rem] xl:w-[10rem] 2xl:w-[18rem]" />
        </h2>

        <div
          className="just-for-you  w-full flex gap-x-3 md:gap-x-5 lg:gap-x-6 overflow-x-hidden pt-4"
          role="region"
          aria-label="Recommended products carousel"
        >
          <Swiper
            slidesPerView="auto"
            spaceBetween={12}
            modules={[Navigation, Pagination, Autoplay]}
            pagination={{
              clickable: true,
              renderBullet: (index, className) => {
                return `
              <span className="${className}">
                <span className="dot-inactive">
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <rect x="4" y="0.353553" width="5.15685" height="5.15685"
                      transform="rotate(45 4 0.353553)"
                      stroke="#888888" strokeWidth="0.5"/>
                  </svg>
                </span>
                <span className="dot-active">
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <rect x="4" width="5.65685" height="5.65685"
                      transform="rotate(45 4 0)" fill="#888888"/>
                  </svg>
                </span>
              </span>
            `;
              },
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            className="!pb-12 lg:!pb-16 2xl:!pb-20 3xl:!pb-24  "
            aria-label="Product carousel"
          >
            {forYouProducts.map((p) => (
              <SwiperSlide className="!w-auto " key={p.id}>
                <ProductCards
                  {...p}
                  className="shrink-0  w-[254px] md:w-[290px] lg:w-[380px] 2xl:w-[400px] 3xl:w-[520px]  "
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default JustForYou;
