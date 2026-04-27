"use client";
import { useState, useRef } from "react";
import DividerSVG from "./DividerSVG";
import ProductCards from "./ProductCards";

const products = [
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

function NewArrival() {
  const [isActiveItem, setisActiveItem] = useState("All");
  const itemRefs = useRef({});

  const filtered =
    !isActiveItem || isActiveItem === "All"
      ? products
      : products.filter((p) => p.category === isActiveItem);

  return (
    <>
      <div className="flex flex-col items-center justify-center overflow-hidden w-full h-full px-2.5 md:px-4 lg:px-5 pt-8 md:pt-12 2xl:pt-16 3xl:pt-24"
       aria-label="New arrivals section">
        <h2 className="flex flex-col items-center justify-center text-[24px]  md:text-[32px] lg:text-[38px] xl:text-[44px] 2xl:text-[64px] 3xl:text-[66px] font-[Tenor_Sans] font-normal text-center text-[#0A0A0A] leading-[34.5px] md:leading-[50.5px]  lg:leading-[55.5px]  xl:leading-[60.5px] 2xl:leading-[70.5px] 3xl:leading-[90.5px] mb-6 md:mb-8 lg:mb-10 xl:mb-12 2xl:mb-16 3xl:mb-20"
         aria-label="New Arrival">
          New Arrival
          <DividerSVG className="w-[7rem] md:w-[8rem] lg:w-[9rem] xl:w-[10rem] 2xl:w-[18rem]" />
        </h2>

        <ul className="menu_list  text-center text-2xl font-medium  gap-4 md:gap-12 lg:gap-16 xl:gap-24 2xl:gap-40 3xl:gap-60 flex  2xl:mb-4 3xl:mb-8"
          role="tablist"
    aria-label="Product categories">
          {["All", "Apparel", "Dress", "Tshirt", "Bag"].map((item) => (
            <li
              key={item}
              onClick={() => setisActiveItem(item)}
              ref={(el) => (itemRefs.current[item] = el)}
                role="tab"
        aria-selected={isActiveItem === item}
        aria-label={`Select ${item} category`}
              className={` font-[Tenor_Sans] relative text-[14px] md:text-[18px] lg:text-[20px] xl:text-[26px] 2xl:text-[32px] 3xl:text-[38px] leading-[34.5px]  tracking-[3px]  font-normal cursor-pointer transition-colors duration-300 ${
                isActiveItem === item ? "text-[#333333]" : "text-gray-400"
              }`}
            >
              {item}

              <div className="line-con flex items-center w-full  absolute z-10 mt-[0.1rem] xl:mt-[0.3rem] 2xl:mt-[0.6rem] px-[0.6rem] md:px-4 left-0 justify-start ">
                <div
                  className={`absolute left-1/2 -translate-x-1/2 flex items-center justify-center transition-opacity duration-300 ${
                    isActiveItem === item ? "opacity-100" : "opacity-0"
                  }`}
                     aria-hidden="true"
                >
                  <svg width="9" height="9" viewBox="0 0 9 9" fill="none"
                      aria-hidden="true"
              focusable="false">
                    <rect
                      x="4.24265"
                      width="6"
                      height="6"
                      transform="rotate(45 4.24265 0)"
                      fill="#DD8560"
                    />
                  </svg>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <section className="  py-10" aria-label="Product list">
          <div
            className="grid
          grid-cols-2
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          gap-x-3 gap-y-8
          md:gap-x-5 md:gap-y-10
          lg:gap-x-6 lg:gap-y-12"
              role="list"
          >
            {filtered.length > 0 ? (
              filtered.map((p) => <ProductCards {...p} />)
            ) : (
              <p className="col-span-full text-center font-[Tenor_Sans] text-[#888888] text-[14px] md:text-[16px] tracking-[2px] py-20"
                role="status"
          aria-live="polite">
                No products found.
              </p>
            )}
          </div>
        </section>

        <div className="flex items-center justify-center  w-full  md:pt-4  2xl:pt-8 3xl:pt-12  pb-12 md:pb-16  lg:pb-20 xl:pb-24 2xl:pb-28"
           aria-label="Explore more products">
          <span
            className="block flex items-center justify-center  gap-2.5    text-[18px] md:text-[20px] lg:text-[24px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[38px] font-[Tenor_Sans] font-normal text-[#333333] hover:text-black    transition-transform duration-700 ease-in-out
        hover:scale-105 cursor-pointer hover:scale-105 origin-left
  leading-none"
      role="button"
      aria-label="Explore more products"
          >
            Explore More{" "}
            <svg
              className="w-[24px] h-[24px]  lg:w-[30px] lg:h-[30px] 2xl:w-[40px] 2xl:h-[40px] 3xl:w-[50px] 3xl:h-[50px]"
              width="18"
              height="18"
                 aria-hidden="true"
        focusable="false"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.712 3.75L15.7498 9L10.712 14.25" stroke="#14142B" />
              <line
                x1="15.4709"
                y1="9.20667"
                x2="2.17115"
                y2="9.20667"
                stroke="#14142B"
              />
            </svg>
          </span>
        </div>

        <DividerSVG className="w-[10rem]  lg:w-[12rem] xl:w-[14rem] 2xl:w-[16rem] 3xl:w-[18rem]" />
      </div>
    </>
  );
}

export default NewArrival;
