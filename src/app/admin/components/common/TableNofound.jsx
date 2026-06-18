function TableNofound({ message = "" }) {
  return (
    <div className="py-16 text-center">
      <p className="font-[Tenor_Sans] font-normal text-[#AAAAAA] text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[24px] tracking-wide">
        {message || "No data found"}
      </p>
    </div>
  );
}

export default TableNofound;
