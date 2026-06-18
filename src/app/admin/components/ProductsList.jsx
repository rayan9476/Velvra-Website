import Icon from "./Icon";
import Image from "next/image";
import StatusColor from "../components/StatusColor";
import { icons } from "../../components/icons/AdminIcons";
import TableNofound from "./common/TableNofound";

function ProductsList({ openEdit, openDelete, filteredProducts }) {
  return (
    <>
      <div className="divide-y dark:divide-[#1d2939] divide-gray-200  dark:bg-white/[0.03]">
        {filteredProducts.length === 0 ? (
          <TableNofound message="No products found" />
        ) : (
          filteredProducts.map((product) => (
            <div key={product.id} className="px-4 md:px-6 py-4">
              {/* Mobile Layout */}
              <div className="flex md:hidden items-start gap-3">
                <div className="relative w-10 h-10 md:w-12 md:h-12  lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-18 2xl:h-18 3xl:w-20 3xl:h-20 rounded-lg overflow-hidden flex-shrink-0 bg-[#F5F5F3]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-[Tenor_Sans]  font-normal text-[#98A2B3] text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[22px]  truncate mb-1">
                    {product.name}
                  </p>
                  <p className="font-[Tenor_Sans] font-normal dark:text-[#C9A84C]  text-[13px] md:text-[14px]  lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[22px]">
                    {product.category} · {product.section} · ${product.price} ·
                    Stock: {product.stock}
                  </p>

                  <span
                    className={`font-[Tenor_Sans] cursor-pointer   font-normal text-[13px] md:text-[14px]  lg:text-[15px] xl:text-[16px] 2xl:text-[17px] 3xl:text-[18px] tracking-wide  ${StatusColor(product.status)}`}
                  >
                    {product.status}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => openEdit(product)}
                    className="text-[#888888] hover:text-[#C9A84C] transition-colors"
                  >
                    <Icon d={icons.edit} size={16} />
                  </button>
                  <button
                    onClick={() => openDelete(product)}
                    className="text-[#888888] hover:text-red-400 transition-colors"
                  >
                    <Icon d={icons.trash} size={16} />
                  </button>
                </div>
              </div>
              {/* Desktop Layout */}
              <div className="hidden md:grid grid-cols-[minmax(200px,3fr)_repeat(5,minmax(0,1fr))_auto] gap-4  items-center justify-start text-left">
                <div className="flex items-center  gap-3 min-w-0 overflow-hidden ">
                  <div className="relative w-8 h-8    xl:w-10 xl:h-10 2xl:w-18 2xl:h-18 3xl:w-20 3xl:h-20 rounded-lg overflow-hidden flex-shrink-0 bg-[#F5F5F3]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="truncate min-w-0     flex-1  font-[Tenor_Sans]  font-normal text-[#98A2B3] text-[8px]  xl:text-[13px] 2xl:text-[14px] 3xl:text-[16px]  truncate mb-1">
                    {product.name}
                  </p>
                </div>
                <p className="truncate min-w-0      font-[Tenor_Sans] font-normal dark:text-white text-[11px] md:text-[12px] tracking-wide">
                  {product.category}
                </p>
                <p className="truncate min-w-0      font-[Tenor_Sans] font-normal dark:text-white text-[11px] md:text-[12px] tracking-wide">
                  {product.section}
                </p>
                <p className="truncate min-w-0      font-[Tenor_Sans] font-normal text-[#C9A84C] text-[13px] md:text-[14px]  lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[22px]">
                  ${product.price}
                </p>
                <p className="truncate min-w-0      font-[Tenor_Sans] font-normal dark:text-white text-[11px] md:text-[12px] tracking-wide">
                  {product.stock}
                </p>

                <span
                  className={`truncate min-w-0      font-[Tenor_Sans] cursor-pointer   font-normal text-[13px] md:text-[14px]  lg:text-[15px] xl:text-[16px] 2xl:text-[17px] 3xl:text-[18px] tracking-wide  ${StatusColor(product.status)}`}
                >
                  {product.status}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => openEdit(product)}
                    className="w-8 h-8 rounded-lg dark:not-only:bg-[#1D2931] bg-gray-200 border-[1px] dark:border-[#1d2939] cursor-pointer  hover:bg-[#F5F0E8] text-[#888888] hover:text-[#C9A84C] transition-all flex items-center justify-center"
                  >
                    <Icon d={icons.edit} size={18} />
                  </button>
                  <button
                    onClick={() => openDelete(product)}
                    className="w-8 h-8 rounded-lg dark:bg-[#1D2931] bg-gray-200 border-[1px] dark:border-[#1d2939] cursor-pointer hover:bg-red-50 text-[#888888] hover:text-red-400 transition-all flex items-center justify-center"
                  >
                    <Icon d={icons.trash} size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default ProductsList;
