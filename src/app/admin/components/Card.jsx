import Icon from "./Icon";

function Card({ stat }) {
  return (
    <div
      className="dark:bg-white/[0.03] bg-white cursor-pointer  transition-all duration-300 ease-out
        transform-gpu will-change-transform
        hover:scale-[1.03]
        hover:shadow-lg
        hover:border-[#C9A84C]/30  rounded-[12px] md:rounded-[14px] lg:rounded-[16px] xl:rounded-[18px] 2xl:rounded-[20px] 3xl:rounded-[22px] p-4 md:p-5 lg:p-6 border dark:border-[#1D2939] border-gray-200  hover:shadow-md transition-shadow duration-200"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-10 h-10 md:w-11 md:h-11 dark:bg-[#1D2939] bg-gray-200 rounded-xl flex items-center justify-center text-[#C9A84C]">
          <Icon d={stat.icon} size={18} />
        </div>
        <span
          className={`font-[Tenor_Sans]  hover:opacity-70 transition-opacity duration-300 ease-out dark:bg-[#1D2939] bg-gray-200 font-normal text-[13px] md:text-[14px]  lg:text-[15px] xl:text-[16px] 2xl:text-[17px] 3xl:text-[18px] tracking-wide px-3 py-1 rounded-full ${stat.positive ? "text-green-600 " : "text-red-500"}`}
        >
          {stat.change}
        </span>
      </div>
      <p className="font-[Tenor_Sans] font-normal text-[#98A2B3] text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[16px] tracking-[2px] uppercase mb-1">
        {stat.label}
      </p>
      <p className="font-[Tenor_Sans]  font-normal dark:text-white text-[22px] md:text-[24px] lg:text-[26px]  xl:text-[28px] 2xl:text-[32px] 3xl:text-[34px]">
        {stat.value}
      </p>
    </div>
  );
}

export default Card;
