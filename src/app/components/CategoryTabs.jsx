"use client";
import { useDispatch, useSelector } from "react-redux";
import { setActive } from "../redux/features/blogsSlice";

const categories = [
  "Fashion",
  "Promo",
  "Policy",
  "Lookbook",
  "Sale",
  "Trends",
  "Accessories",
];

export default function CategoryTabs() {
  const dispatch = useDispatch();

  const active = useSelector((state) => state.blogs.active);

  return (
    <div
      role="tablist"
      aria-label="Category filters"
      className="Category-Tabs  w-full overflow-x-auto scrollbar-hide mb-6 md:mb-8 lg:mb-10 xl:mb-12 2xl:mb-16 3xl:mb-20"
    >
      <div className="flex gap-3 md:gap-4 lg:gap-5 min-w-max px-2 py-2">
        {categories.map((item) => {
          const isActive = active === item;

          return (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-pressed={isActive}
              onClick={() => dispatch(setActive(item))}
              className={`
                font-[Tenor_Sans] font-normal
                whitespace-nowrap
                px-5 md:px-6 lg:px-7
                py-2 md:py-2.5
                rounded-full
                text-[14px] md:text-[16px] lg:text-[18px]
                transition-all duration-300
                cursor-pointer 

                hover:bg-[#EDEDED] hover:text-black hover:border hover:border-gray-300
                
                ${
                  isActive
                    ? "bg-[#EDEDED] text-black border border-gray-300"
                    : "bg-transparent text-gray-500 border border-gray-300"
                }
              `}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
}
