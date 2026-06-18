function TableHeader({ grid, tableHeaders }) {
  return (
    <>
      <div
        className={`hidden md:grid ${grid} gap-4 px-6 py-4 bg-gray-50 dark:bg-white/5 border-b border-gray-100 dark:border-[#1d2939]`}
      >
        {tableHeaders.map((h) => (
          <p
            key={h}
            className="font-[Tenor_Sans] font-normal text-[#C9A84C] text-[11px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[17px] tracking-[2px] uppercase"
          >
            {h}
          </p>
        ))}
      </div>
    </>
  );
}

export default TableHeader;
