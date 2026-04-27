"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import ProductCards from "./ProductCards";
import Pagination from "./Pagination";
import Sorting from "./Sorting";
import FilterChip from "./FilterChip";

// ── Data
const BRANDS = ["21WN", "LAME", "VELVRA", "SOMEIT", "ANDERSSON", "AMOMENTO"];
const NAMES = [
  "reversible angora cardigan",
  "signature sweatshirt navy",
  "boucle knit oversized vest",
  "wool blend turtleneck",
  "cotton relaxed blazer",
  "silk midi slip dress",
  "ribbed cashmere pullover",
  "tailored wide-leg trousers",
];
const PRICES = [
  85, 120, 145, 160, 200, 240, 95, 175, 130, 220, 110, 155, 195, 230, 75, 180,
  140, 210, 90, 165,
];
const allProducts = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  brand: BRANDS[i % BRANDS.length],
  name: NAMES[i % NAMES.length],
  price: PRICES[i % PRICES.length],
  popular: i % 4 === 0,
  category: i % 3 === 0 ? "Dress" : i % 3 === 1 ? "Apparel" : "Tshirt",
  gender: i % 2 === 0 ? "Women" : "Men",
  image:
    i % 5 === 0
      ? "https://images.unsplash.com/photo-1659522761084-79196b64abe4?q=80&w=400&auto=format&fit=crop"
      : i % 5 === 1
        ? "https://images.unsplash.com/photo-1666635228066-b2638dbe6503?q=80&w=400&auto=format&fit=crop"
        : i % 5 === 2
          ? "https://images.unsplash.com/photo-1594938298603-c8148c4b4f7e?q=80&w=400&auto=format&fit=crop"
          : i % 5 === 3
            ? "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=400&auto=format&fit=crop"
            : "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?q=80&w=400&auto=format&fit=crop",
}));

const GENDER_FILTERS = ["Women", "Men", "Kids"];
const CATEGORY_FILTERS = ["All apparel", "Dress", "Apparel", "Tshirt", "Bag"];
const SORT_OPTIONS = ["New", "Price: Low", "Price: High", "Popular"];
const PER_PAGE = 10;

// function FilterChip({ label, onRemove }) {
//   return (
//     <div
//       className="flex items-center gap-1.5 font-[Tenor_Sans] font-normal relative
//                 whitespace-nowrap
//                 px-4 md:px-5 lg:px-6 3xl:px-7
//                 py-2 md:py-2.5
//                 rounded-full
//                 text-[14px] md:text-[16px] lg:text-[18px]
//               bg-transparent text-gray-500 border border-gray-300
//             hover:bg-[#EDEDED] hover:text-black hover:border hover:border-gray-300
//             transition-all duration-300 tracking-wide cursor-pointer"
//     >
//       {label}
//       <button
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
//     </div>
//   );
// }

export default function ShopPage() {
  const [genderFilter, setGenderFilter] = useState("Women");
  const [categoryFilter, setCategoryFilter] = useState("All apparel");
  const [sort, setSort] = useState("New");
  const [sortOpen, setSortOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [gridCols, setGridCols] = useState(2);
  const [active, setactive] = useState(false);

  // filtering
  const filtered = allProducts.filter((p) => {
    const gMatch = p.gender === genderFilter;
    const cMatch =
      categoryFilter === "All apparel" || p.category === categoryFilter;
    return gMatch && cMatch;
  });

  // sorting
  const sorted = [...filtered].sort((a, b) => {
    if (sort === "Price: Low") return a.price - b.price || a.id - b.id;
    if (sort === "Price: High") return b.price - a.price || a.id - b.id;
    if (sort === "Popular")
      return (b.popular ? 1 : 0) - (a.popular ? 1 : 0) || a.id - b.id;
    return a.id - b.id;
  });

  // pagination
  const totalPages = Math.ceil(sorted.length / PER_PAGE);
  const paginated = sorted.slice((page - 1) * PER_PAGE, page * PER_PAGE);


  return (
    <div className="w-full font-[Tenor_Sans] font-normal min-h-screen mt-[60px] lg:mt-[70px] 2xl:mt-[80px] 3xl:mt-[90px] bg-white">
      <div className="px-2.5 md:px-4 lg:px-5  pt-4 md:pt-5 lg:pt-6 xl:pt-7 2xl:pt-8 3xl:pt-10 pb-12">
        <div className="flex items-center justify-between mb-3 md:mb-4 ">
          <span className="                text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[26px] text-[#333333] tracking-[2px] uppercase">
            {sorted.length} Apparel
          </span>

          <Sorting
            sortOpen={sortOpen}
            setSortOpen={setSortOpen}
            active={active}
            setactive={setactive}
            sort={sort}
            setSort={setSort}
            setPage={setPage}
            SORT_OPTIONS={SORT_OPTIONS}
            gridCols={gridCols}
            setGridCols={setGridCols}
          />
        </div>

        <div className="flex flex-wrap gap-2 mb-4 md:mb-5  lg:mb-6  ">
          {genderFilter && (
            <FilterChip
              label={genderFilter}
              onRemove={() => {
                setGenderFilter("");
                setPage(1);
              }}
            />
          )}
          {categoryFilter && categoryFilter !== "All apparel" && (
            <FilterChip
              label={categoryFilter}
              onRemove={() => {
                setCategoryFilter("All apparel");
                setPage(1);
              }}
            />
          )}
          {categoryFilter === "All apparel" && (
            <FilterChip
              label="All apparel"
              onRemove={() => setCategoryFilter("All apparel")}
            />
          )}
        </div>

        <div className="flex gap-4 md:gap-6 mb-1 border-b border-gray-300">
          {GENDER_FILTERS.map((g) => (
            <button
              key={g}
              onClick={() => {
                setGenderFilter(g);
                setPage(1);
              }}
              className={`relative  pb-2 text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[24px] tracking-[2px] uppercase cursor-pointer
                transition-colors duration-200  -mb-px
                ${
                  genderFilter === g
                    ? "text-[#333333] "
                    : "text-[#aaaaaa]  hover:text-[#333333]"
                }`}
            >
              {g}

              <div
                className={`absolute left-1/2 -translate-x-1/2 top-[1.53rem] md:top-[1.71rem] lg:top-[1.9rem] xl:top-[2.04rem] 2xl:top-[2.23rem] 3xl:top-[2.44rem] flex items-center justify-center transition-opacity duration-300 ${
                  genderFilter === g ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="line h-[1px] w-[30px] bg-[#DD8560] -ml-[1px]" />
                <svg
                  width="9"
                  height="9"
                  viewBox="0 0 9 9"
                  fill="none"
                  role="separator"
                  aria-hidden="true"
                >
                  <rect
                    x="4.24265"
                    width="6"
                    height="6"
                    transform="rotate(45 4.24265 0)"
                    fill="#DD8560"
                  />
                </svg>
                <div className="line h-[1px] w-[30px] bg-[#DD8560] -mr-[1px]" />
              </div>
            </button>
          ))}
        </div>

        <div className="flex gap-3 md:gap-5 mb-5 overflow-x-auto scrollbar-none pt-2">
          {CATEGORY_FILTERS.map((c) => (
            <button
              key={c}
              onClick={() => {
                setCategoryFilter(c);
                setPage(1);
              }}
              className={`shrink-0 text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[22px] tracking-wide cursor-pointer
                transition-colors duration-200
                ${categoryFilter === c ? "text-[#333333]" : "text-[#aaaaaa] hover:text-[#333333]"}`}
            >
              {c}
            </button>
          ))}
        </div>

        {paginated.length > 0 ? (
          <div
            className={`grid gap-x-3 gap-y-6 md:gap-x-4 md:gap-y-8
            ${
              gridCols === 2
                ? "grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                : "grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
            }`}
          >
            {paginated.map((p) => (
              <ProductCards key={p.id} {...p} />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center py-24">
            <p className="text-[13px] text-[#888888] tracking-wide">
              No products found.
            </p>
          </div>
        )}

        {totalPages > 1 && (
          <Pagination page={page} setPage={setPage} totalPages={totalPages} />
        )}
      </div>
    </div>
  );
}
