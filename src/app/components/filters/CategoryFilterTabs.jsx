"use client";

function CategoryFilterTabs({
  CATEGORY_FILTERS,
  setCategoryFilter,
  categoryFilter,
  setPage,
}) {
  return (
    <>
      <nav
        className="flex gap-3 md:gap-5 mb-5 overflow-x-auto scrollbar-none pt-2"
        aria-label="Category filters"
      >
        {CATEGORY_FILTERS.map((c) => (
          <button
            key={c}
            onClick={() => {
              setCategoryFilter(c);
              setPage(1);
            }}
            type="button"
            aria-pressed={categoryFilter === c}
            aria-label={`Filter category ${c}`}
            className={`shrink-0 text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[22px] tracking-wide cursor-pointer
                transition-colors duration-200
                ${categoryFilter === c ? "text-[#333333]" : "text-[#aaaaaa] hover:text-[#333333]"}`}
          >
            {c}
          </button>
        ))}
      </nav>
    </>
  );
}

export default CategoryFilterTabs;
