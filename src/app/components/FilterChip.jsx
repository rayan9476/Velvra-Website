function FilterChip({ label, onRemove }) {
  return (
    <div
      className="flex items-center gap-1.5 font-[Tenor_Sans] font-normal relative
                whitespace-nowrap
                px-4 md:px-5 lg:px-6 3xl:px-7
                py-2 md:py-2.5
                rounded-full
                text-[14px] md:text-[16px] lg:text-[18px]
              bg-transparent text-gray-500 border border-gray-300
            hover:bg-[#EDEDED] hover:text-black hover:border hover:border-gray-300
            transition-all duration-300 tracking-wide cursor-pointer"
    >
      {label}
      <button
        onClick={onRemove}
        className="text-[#888888] hover:text-[#DD8560] transition-colors cursor-pointer"
      >
        <svg
          className="md:h-[19px] md:w-[19px] lg:h-[20px] lg:w-[20px] xl:h-[21px] xl:w-[21px] 2xl:h-[22px] 2xl:w-[22px] 3xl:h-[23px] 3xl:w-[23px]   "
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M6 6L18 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M6 18L18 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
}

export default FilterChip;
