function TableFooter({
  filtered,
  commonCounts,
  isTrue = false,
  GetStatusStyle,
  statusCounts,
}) {
  return (
    <>
      <div className="px-6 py-4 border-t border-gray-100 dark:border-[#1d2939] bg-gray-50 dark:bg-white/5 flex items-center justify-between">
        {isTrue ? (
          <>
            <p className="font-[Tenor_Sans] font-normal text-[#888888] text-[13px] md:text-[14px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[17px]  tracking-wide">
              Showing {filtered.length} of {commonCounts.length} users
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 xl:w-3 xl:h-3 rounded-full bg-[#C9A84C]" />
                <span className="font-[Tenor_Sans] font-normal text-[#888888] text-[13px] md:text-[14px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[17px]  tracking-wide">
                  {commonCounts.filter((u) => u.role === "admin").length} admin
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 xl:w-3 xl:h-3 rounded-full bg-gray-400" />
                <span className="font-[Tenor_Sans] font-normal text-[#888888] text-[13px] md:text-[14px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[17px]  tracking-wide">
                  {commonCounts.filter((u) => u.role === "user").length} users
                </span>
              </div>
            </div>
          </>
        ) : (
          <>
            <p className="font-[Tenor_Sans] font-normal text-[#888888] text-[13px] md:text-[14px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[17px]  tracking-wide">
              Showing {filtered.length} of {commonCounts.length} orders
            </p>
            <div className="flex items-center gap-2">
              {["Delivered", "Shipped", "Processing", "Pending"].map((s) => (
                <div key={s} className="flex items-center gap-1.5">
                  <div
                    className={`w-2 h-2  xl:w-3 xl:h-3 rounded-full ${GetStatusStyle(s).includes("green") ? "bg-green-500" : GetStatusStyle(s).includes("blue") ? "bg-blue-500" : GetStatusStyle(s).includes("amber") ? "bg-amber-500" : "bg-orange-500"}`}
                  />
                  <span className="font-[Tenor_Sans] font-normal text-[#888888] text-[13px] md:text-[14px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[17px]  tracking-wide hidden lg:block">
                    {statusCounts[s]}
                  </span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default TableFooter;
