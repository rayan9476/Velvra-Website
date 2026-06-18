function StatusPills({
  orders,
  filterStatus,
  setFilterStatus,
  statusCounts,
  statusOptions,
  GetStatusStyle,
}) {
  return (
    <div className="flex flex-wrap gap-2 mb-5 md:mb-6">
      <button
        onClick={() => setFilterStatus("All")}
        className={`font-[Tenor_Sans] cursor-pointer font-normal text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[16px] tracking-wide px-3 py-1.5 rounded-full border transition-all ${
          filterStatus === "All"
            ? "bg-[#111111] dark:bg-white text-white dark:text-[#111111] border-transparent"
            : "border-gray-200 dark:border-[#C9A84C] text-[#888888] hover:border-[#111111] dark:hover:border-white hover:text-[#111111] dark:hover:text-white"
        }`}
      >
        All ({orders.length})
      </button>
      {statusOptions.map((s) => (
        <button
          key={s}
          onClick={() => setFilterStatus(s)}
          className={`font-[Tenor_Sans] cursor-pointer font-normal text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[16px] tracking-wide px-3 py-1.5 rounded-full border transition-all ${
            filterStatus === s
              ? `${GetStatusStyle(s)} border-transparent`
              : "border-gray-200 dark:border-white/10 text-[#888888] hover:border-[#C9A84C] hover:text-[#C9A84C]"
          }`}
        >
          {s} ({statusCounts[s]})
        </button>
      ))}
    </div>
  );
}

export default StatusPills;
