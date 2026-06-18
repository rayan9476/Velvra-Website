import DividerSVG from "./DividerSVG";
import {
  BottomOrnament,
  features,
  SiteLogoIcon,
} from "./icons/VelvraSectionIcons";

export default function VelvraSection() {
  return (
    <section
      className="w-full bg-[#F3F4F6] flex flex-col items-center justify-center px-2.5 md:px-4 lg:px-5 py-8 md:py-12 lg:py-16 mt-4"
      aria-label="Velvra brand section"
    >
      <SiteLogoIcon />

      <p
        className="font-[Tenor_Sans] font-normal text-[#55555] text-center pb-4 md:pb-6 xl:pb-8 3xl:pb-10
       text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] 3xl:text-[28px]
        max-w-[277px] md:max-w-[100%]
        leading-relaxed tracking-wide"
        aria-label="Brand description"
      >
        Where refined taste meets effortless style —{" "}
        <br className="hidden md:block" />
        Velvra is fashion that feels like you.
      </p>

      <DividerSVG className="w-[10rem]  lg:w-[12rem] xl:w-[14rem] 2xl:w-[16rem] 3xl:w-[18rem]" />

      <div
        className="grid grid-cols-2 gap-x-8 gap-y-10 md:gap-x-16 md:gap-y-12 lg:gap-x-24   pt-12 md:pt-16  max-w-[340px] md:max-w-[480px] lg:max-w-[560px] xl:max-w-[100%]
       "
        role="list"
        aria-label="Brand features"
      >
        {features.map((f, i) => (
          <div
            key={i}
            className="   flex flex-col items-start gap-3"
            role="listitem"
          >
            <div
              className="relative w-[30px] h-[30px] md:h-[35px] md:w-[35px] xl:h-[40px] xl:w-[40px]  3xl:h-[45px]"
              aria-hidden="true"
            >
              {f.icon}
            </div>
            <p
              className="font-[Tenor_Sans] font-normal text-[#55555]
              text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] 3xl:text-[28px]
              leading-snug tracking-wide"
              aria-label={f.text}
            >
              {f.text}
            </p>
          </div>
        ))}
      </div>

      <div className="pt-12 md:pt-16  xl:pt-20 2xl:pt-24 3xl:pt-28 ">
        <BottomOrnament />
      </div>
    </section>
  );
}
