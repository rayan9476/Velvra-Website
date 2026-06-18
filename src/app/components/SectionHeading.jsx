import DividerSVG from "./DividerSVG";
function SectionHeading({ title, id = "" }) {
  return (
    <>
      <div className="flex flex-col items-center mb-8 md:mb-10">
        <h2
          id={id}
          className="flex flex-col items-center justify-center  font-[Tenor_Sans] text-[24px]  md:text-[32px] lg:text-[38px] xl:text-[44px] 2xl:text-[64px] 3xl:text-[66px]  font-normal text-[#000000] leading-[34.5px] md:leading-[50.5px]  lg:leading-[55.5px]  xl:leading-[60.5px] 2xl:leading-[70.5px] 3xl:leading-[90.5px]  tracking-[5px] uppercase text-center"
        >
          {title}
        </h2>

        <DividerSVG className="w-[7rem] md:w-[8rem] lg:w-[9rem] xl:w-[10rem] 2xl:w-[18rem]" />
      </div>
    </>
  );
}

export default SectionHeading;
