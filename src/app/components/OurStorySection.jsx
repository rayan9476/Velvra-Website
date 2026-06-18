import OnloadFadeIn from "./OnloadFadeIn";
import SectionHeading from "./SectionHeading";
function OurStorySection() {
  return (
    <div className="px-2.5 md:px-4 lg:px-5 pb-10 md:pb-14">
      <OnloadFadeIn>
        {/* <div className="flex flex-col items-center mb-8 md:mb-10">
          <h2 className="flex flex-col items-center justify-center  font-[Tenor_Sans] text-[24px]  md:text-[32px] lg:text-[38px] xl:text-[44px] 2xl:text-[64px] 3xl:text-[66px]  font-normal text-[#000000] leading-[34.5px] md:leading-[50.5px]  lg:leading-[55.5px]  xl:leading-[60.5px] 2xl:leading-[70.5px] 3xl:leading-[90.5px]  tracking-[5px] uppercase text-center">
            Our Story
          </h2>

          <DividerSVG className="w-[7rem] md:w-[8rem] lg:w-[9rem] xl:w-[10rem] 2xl:w-[18rem]" />
        </div> */}
        <SectionHeading title={"Our Story"} />
      </OnloadFadeIn>

      <OnloadFadeIn>
        <p className="font-[Tenor_Sans] font-normal text-[#333333] text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[26px] leading-relaxed tracking-wide mb-5 md:mb-6">
          Velvra was born from a simple belief — that luxury fashion should feel
          personal. We are a premium fashion brand offering curated clothing and
          accessories for the modern woman and man who values elegance above all
          else. Every piece in our collection is selected with care, crafted
          with precision, and designed to make you feel extraordinary.
        </p>
      </OnloadFadeIn>

      <OnloadFadeIn>
        <p className="font-[Tenor_Sans] font-normal text-[#333333] text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[26px] leading-relaxed tracking-wide mb-5 md:mb-6">
          At Velvra, we believe that true style is timeless. Our collections are
          built around pieces that transcend seasons — from tailored coats and
          fluid silk dresses to refined accessories that complete any look. We
          source only the finest materials, working with artisans who share our
          commitment to quality and craftsmanship.
        </p>
      </OnloadFadeIn>

      <OnloadFadeIn>
        <p className="font-[Tenor_Sans] font-normal text-[#333333] text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[26px] leading-relaxed tracking-wide">
          Elegance is not just what you wear — it is how you carry yourself.
          Velvra exists to help you carry yourself beautifully, every single
          day. Welcome to a brand that dresses beyond the ordinary.
        </p>
      </OnloadFadeIn>
    </div>
  );
}

export default OurStorySection;
