"use client";
function GenderFilterTabs({
  GENDER_FILTERS,
  setGenderFilter,
  genderFilter,
  setPage,
}) {
  return (
    <>
      <nav
        className="flex gap-4 md:gap-6 mb-1 border-b border-gray-300"
        aria-label="Gender filters"
      >
        {GENDER_FILTERS.map((g) => (
          <button
            key={g}
            onClick={() => {
              setGenderFilter(g);
              setPage(1);
            }}
            type="button"
            aria-pressed={genderFilter === g}
            aria-label={`Filter products by ${g}`}
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
              aria-hidden="true"
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
      </nav>
    </>
  );
}

export default GenderFilterTabs;
