import ProductCards from "./ProductCards";
import DividerSVG from "./DividerSVG";
function YouMayAlsoLike({ product }) {
  return (
    <>
      <div className="px-4 md:px-0 mt-14 md:mt-20 mb-12">
        <h2 className="flex flex-col items-center justify-center text-[24px] uppercase md:text-[32px] lg:text-[38px] xl:text-[44px] 2xl:text-[64px] 3xl:text-[66px] font-[Tenor_Sans] font-normal text-center text-[#0A0A0A] leading-[34.5px] md:leading-[50.5px]  lg:leading-[55.5px]  xl:leading-[60.5px] 2xl:leading-[70.5px] 3xl:leading-[90.5px] mb-6 md:mb-8 lg:mb-10 xl:mb-12 2xl:mb-16 3xl:mb-20">
          You May Also Like
          <DividerSVG className="w-[10rem]  lg:w-[12rem] xl:w-[14rem] 2xl:w-[16rem] 3xl:w-[18rem]" />
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 lg:gap-6">
          {/* {product.relatedProducts.map((item) => ( */}
          {product.map((item) => (
            <ProductCards {...item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default YouMayAlsoLike;
