import { useRouter } from "next/navigation";
import StatusColor from "../components/StatusColor";
import Image from "next/image";
function RecentProducts({ products }) {
  const router = useRouter();

  return (
    <>
      <div className="dark:bg-white/[0.03] bg-white rounded-xl border dark:border-[#1D2939] border-gray-200 ">
        <div className="flex items-center justify-between px-5 md:px-6 py-4 md:py-5 border-b dark:border-[#1D2939] border-gray-200 ">
          <p className="font-[Tenor_Sans] font-normal text-[#C9A84C]  tracking-[2px] uppercase text-[12px] md:text-[13px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[22px]">
            Recent Products
          </p>
          <button
            onClick={() => router.push(`?tab=products`)}
            className="font-[Tenor_Sans] cursor-pointer font-normal text-[#C9A84C] text-[12px] md:text-[13px]  lg:text-[14px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[17px] tracking-wide hover:opacity-70 transition-opacity"
          >
            View All
          </button>
        </div>
        <div className="divide-y dark:divide-[#1D2939] divide-gray-200">
          {products.slice(0, 4).map((product) => (
            <div
              key={product.id}
              className="flex items-center gap-3 md:gap-4 px-5 md:px-6 py-3 md:py-4"
            >
              <div className="relative w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-18 2xl:h-18 3xl:w-20 3xl:h-20 rounded-lg overflow-hidden flex-shrink-0 bg-[#F5F5F3]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-[Tenor_Sans] font-normal text-[#98A2B3] text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[22px] truncate">
                  {product.name}
                </p>
                <p className="font-[Tenor_Sans] font-normal dark:text-white text-[11px] md:text-[12px] tracking-wide">
                  {product.category}
                </p>
              </div>
              <div className="text-right flex-shrink-0 transform-gpu">
                <p className="font-[Tenor_Sans] font-normal text-[#C9A84C] text-[13px] md:text-[14px]  lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[22px]">
                  ${product.price}
                </p>
                <span
                  className={`font-[Tenor_Sans] cursor-pointer hover:opacity-70 transition-opacity duration-300 ease-in dark:bg-[#1D2939] bg-gray-200  font-normal text-[13px] md:text-[14px]  lg:text-[15px] xl:text-[16px] 2xl:text-[17px] 3xl:text-[18px] tracking-wide px-3 py-1 rounded-full ${StatusColor(product.status)}`}
                >
                  {product.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default RecentProducts;
