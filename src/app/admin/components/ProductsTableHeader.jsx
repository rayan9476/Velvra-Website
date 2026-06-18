import { tableHeaders } from "../data/data";
function ProductsTableHeader() {
  return (
    <>
      <div className="hidden md:grid grid-cols-[minmax(200px,3fr)_repeat(5,minmax(0,1fr))_auto] gap-4 px-6 py-4 dark:bg-white/[0.03] border-b dark:border-[#1d2939] border-gray-200 ">
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

export default ProductsTableHeader;
