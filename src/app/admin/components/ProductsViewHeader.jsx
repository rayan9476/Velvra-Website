import Icon from "./Icon";
import { icons } from "../../components/icons/AdminIcons";

function ProductsViewHeader({ products, openAddModal }) {
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 md:mb-8">
        <div>
          <h1 className="font-[Tenor_Sans] font-normal text-[#98A2B3] text-[14px] md:text-[16px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[36px]  tracking-wide mb-1">
            products
          </h1>
          <p className="font-[Tenor_Sans] font-normal text-[#888888] text-[13px] md:text-[14px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[17px] tracking-wide">
            {products.length} total products
          </p>
        </div>
        <button
          onClick={openAddModal}
          className="flex items-center gap-2 cursor-pointer bg-[#C9A84C] dark:hover:bg-white/5 hover:bg-gray-500 hover:text-white transition-colors duration-200 ease-in text-[#111111] px-5 py-3 rounded-xl self-start sm:self-auto"
        >
          <Icon d={icons.plus} size={16} />
          <span className="font-[Tenor_Sans] font-normal text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[17px] tracking-[2px] uppercase">
            Add Product
          </span>
        </button>
      </div>
    </>
  );
}

export default ProductsViewHeader;
