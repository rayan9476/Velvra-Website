import DividerSVG from "./DividerSVG";
import { brands } from "./icons/BrandsSectionIcons";

export default function BrandsSection() {
  return (
    <>
      <section
        aria-labelledby="brands-section-title"
        className="flex flex-col items-center justify-center   w-full px-2.5 md:px-4 lg:px-5 py-8 md:py-16 lg:py-20 xl:py-24 2xl:py-28 3xl:py-32"
      >
        <h2 id="brands-section-title" className="sr-only">
          Featured Brands
        </h2>

        <div className="grid grid-cols-3 items-center justify-center gap-x-8 gap-y-8 md:gap-x-24 md:gap-y-12 lg:gap-x-32 lg:gap-y-16 xl:gap-x-40 xl:gap-y-24 2xl:gap-x-48 2xl:gap-y-28 3xl:gap-x-56 3xl:gap-y-32 pb-12 md:pb-16  lg:pb-20 xl:pb-24 2xl:pb-28">
          {brands.map((brand) => (
            <button
              key={brand.id}
              type="button"
              aria-label={brand.label}
              className="flex items-center justify-center
              w-[80px] md:w-[100px] lg:w-[120px] xl:w-[140px] 2xl:w-[160px]
              opacity-70 hover:opacity-100
              transition-opacity duration-300 cursor-pointer"
            >
              {brand.component}
            </button>
          ))}
        </div>

        <DividerSVG className="w-[10rem]  lg:w-[12rem] xl:w-[14rem] 2xl:w-[16rem] 3xl:w-[18rem]" />
      </section>
    </>
  );
}
