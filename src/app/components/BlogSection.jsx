"use client";
import DividerSVG from "./DividerSVG";
import { useRef, useState } from "react";
import CategoryTabs from "./CategoryTabs";
import Blog from "./Blog";
import useClickOutside from "../hooks/useClickOutside";

const blogs = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=600&auto=format&fit=crop",
    title: "2021 STYLE GUIDE: THE BIGGEST FALL TRENDS",
    category: "Fashion",
    date: " 4 days ago",
    tags: ["#Fashion", "#Types"],
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=600&auto=format&fit=crop",
    title: "2021 STYLE GUIDE: THE BIGGEST FALL TRENDS",
    category: "Promo",
    date: " 4 days ago",
    tags: ["#Fashion", "#Types"],
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=600&auto=format&fit=crop",
    title: "2021 STYLE GUIDE: THE BIGGEST FALL TRENDS",
    category: "Lookbook",
    date: " 4 days ago",
    tags: ["#Fashion", "#Types"],
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=600&auto=format&fit=crop",
    title: "2021 STYLE GUIDE: THE BIGGEST FALL TRENDS",
    category: "Sale",
    date: " 4 days ago",
    tags: ["#Fashion", "#Types"],
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=600&auto=format&fit=crop",
    title: "2021 STYLE GUIDE: THE BIGGEST FALL TRENDS",
    category: "Trends",
    date: " 4 days ago",
    tags: ["#Fashion", "#Types"],
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=600&auto=format&fit=crop",
    title: "2021 STYLE GUIDE: THE BIGGEST FALL TRENDS",
    category: "Accessories",
    date: " 4 days ago",
    tags: ["#Fashion", "#Types"],
  },

  {
    id: 7,
    img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=600&auto=format&fit=crop",
    title: "2021 STYLE GUIDE: THE BIGGEST FALL TRENDS",
    category: "Policy",
    date: " 4 days ago",
    tags: ["#Fashion", "#Types"],
  },
  {
    id: 8,
    img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=600&auto=format&fit=crop",
    title: "2021 STYLE GUIDE: THE BIGGEST FALL TRENDS",
    category: "Fashion",
    date: " 4 days ago",
    tags: ["#Fashion", "#Types"],
  },
  {
    id: 9,
    img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=600&auto=format&fit=crop",
    title: "2021 STYLE GUIDE: THE BIGGEST FALL TRENDS",
    category: "Promo",
    date: " 4 days ago",
    tags: ["#Fashion", "#Types"],
  },
  {
    id: 10,
    img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=600&auto=format&fit=crop",
    title: "2021 STYLE GUIDE: THE BIGGEST FALL TRENDS",
    category: "Lookbook",
    date: " 4 days ago",
    tags: ["#Fashion", "#Types"],
  },
  {
    id: 11,
    img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=600&auto=format&fit=crop",
    title: "2021 STYLE GUIDE: THE BIGGEST FALL TRENDS",
    category: "Sale",
    date: " 4 days ago",
    tags: ["#Fashion", "#Types"],
  },
  {
    id: 12,
    img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=600&auto=format&fit=crop",
    title: "2021 STYLE GUIDE: THE BIGGEST FALL TRENDS",
    category: "Trends",
    date: " 4 days ago",
    tags: ["#Fashion", "#Types"],
  },
  {
    id: 13,
    img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=600&auto=format&fit=crop",
    title: "2021 STYLE GUIDE: THE BIGGEST FALL TRENDS",
    category: "Accessories",
    date: " 4 days ago",
    tags: ["#Fashion", "#Types"],
  },

  {
    id: 14,
    img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=600&auto=format&fit=crop",
    title: "2021 STYLE GUIDE: THE BIGGEST FALL TRENDS",
    category: "Policy",
    date: " 4 days ago",
    tags: ["#Policy", "#Types"],
  },
];

export default function BlogSection() {
  const [active, setActive] = useState("Fashion");

  const [LoadMore, setLoadMore] = useState(false);

  const buttonRef = useRef(null);

  // Custom hook to handle outside click logic starts here
  useClickOutside(buttonRef, () => {
    if (LoadMore) setLoadMore(!LoadMore);
  });
  // Custom hook to handle outside click logic ends here

  return (
    <section
      aria-labelledby="blog-section-heading"
      className="h-full px-2.5 md:px-4 lg:px-5 mt-16  py-8 md:py-16 lg:py-20 xl:py-24 2xl:py-28 3xl:py-32 font-[Tenor_Sans] font-normal"
    >
      <h2
        id="blog-section-heading"
        className="flex flex-col items-center justify-center text-[24px] uppercase md:text-[32px] lg:text-[38px] xl:text-[44px] 2xl:text-[64px] 3xl:text-[66px] font-[Tenor_Sans] font-normal text-center text-[#0A0A0A] leading-[34.5px] md:leading-[50.5px]  lg:leading-[55.5px]  xl:leading-[60.5px] 2xl:leading-[70.5px] 3xl:leading-[90.5px] mb-6 md:mb-8 lg:mb-10 xl:mb-12 2xl:mb-16 3xl:mb-20"
      >
        Blog
        <DividerSVG className="w-[7rem] md:w-[8rem] lg:w-[9rem] xl:w-[10rem] 2xl:w-[18rem]" />
      </h2>

      <CategoryTabs active={active} setActive={setActive} />

      <Blog blogs={blogs} active={active} />

      <div className="w-full flex items-center justify-center pt-8 md:pt-12 lg:pt-16 xl:pt-20 2xl:pt-24 3xl:pt-28">
        <button
          ref={buttonRef}
          type="button"
          aria-label="Add item"
          onClick={() => setLoadMore(!LoadMore)}
          className={`
       flex items-center justify-between gap-[0.5rem] md:gap-[0.7rem] lg:gap-[0.9rem] xl:gap-[1.1rem] 2xl:gap-[1.3rem] 3xl:gap-[1.5rem]
      bg-transparent text-black border border-gray-300
        px-4 md:px-6 lg:px-8
        py-3 md:py-4 lg:py-5
        font-[Tenor_Sans] font-normal
        text-[16px] md:text-[20px] lg:text-[24px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[38px]
        tracking-wide
        transition-all duration-300 cursor-pointer

          ${
            LoadMore
              ? " bg-[#EDEDED] text-gray-500 border border-gray-300"
              : "bg-transparent text-black border border-gray-300"
          }

                      hover:bg-[#EDEDED] hover:text-gray-500 hover:border hover:border-gray-300
 
      `}
        >
          <span>Load more</span>
          <svg
            className="md:h-[28px]  md:w-[28px] lg:h-[32px] lg:w-[32px] xl:h-[36px] xl:w-[36px] 2xl:h-[40px] 2xl:w-[40px] 3xl:h-[44px] 3xl:w-[44px]"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 3V21"
              stroke={`${LoadMore ? " #6B7280" : "#333333"}  `}
            />
            <path
              d="M3 12L21 12"
              stroke={`${LoadMore ? "#6B7280" : " #333333"}  `}
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
