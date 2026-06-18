"use client";
import { useRouter } from "next/navigation";
import { DressIcon, LeftArrowIcon } from "./components/icons/NotFoundIcons";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="bg-white   flex flex-col items-center justify-center font-[Tenor_Sans] font-normal px-4 md:px-10 lg:px-20  pt-4 md:pt-5 lg:pt-6 xl:pt-7 2xl:pt-8 3xl:pt-10 pb-16 md:pb-20 ">
      {/* Heading */}
      <div className="  flex flex-col items-center justify-center ">
        <div className="flex flex-col items-center justify-center  text-center mb-8 md:mb-10">
          <h2 className="flex flex-col items-center justify-center  font-[Tenor_Sans] text-[24px]  md:text-[32px] lg:text-[38px] xl:text-[44px] 2xl:text-[64px] 3xl:text-[66px]  font-normal text-[#000000] leading-[34.5px] md:leading-[50.5px]  lg:leading-[55.5px]  xl:leading-[60.5px] 2xl:leading-[70.5px] 3xl:leading-[90.5px]  tracking-[5px] uppercase text-center">
            page not found
          </h2>
        </div>

        {/* Dress Icon */}
        <div className="mb-8 md:mb-10 text-[#C9A84C]">
          <DressIcon />
        </div>

        {/* Message */}
        <p className="font-[Tenor_Sans] font-normal text-[#000000] text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[24px] text-center leading-relaxed tracking-wide mb-8 md:mb-10 max-w-[352px] md:max-w-[420px] lg:max-w-[500px]  2xl:max-w-[600px] 3xl:max-w-[700px]">
          We can't find the page you looking for, it will return to the home
          page soon.
        </p>

        {/* Button */}
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-3 md:gap-4 bg-[#111111] hover:bg-[#DD8560] cursor-pointer transition-colors duration-300 px-8 md:px-10 lg:px-12 py-3 md:py-4 group"
        >
          {/* Arrow */}
          {/* <svg
            className="group-hover:-translate-x-2 transition-transform duration-300  md:w-[24px] md:h-[24px] lg:w-[28px] lg:h-[28px] xl:w-[32px] lg:h-[32px] xl:w-[34px] xl:h-[34px] 2xl:w-[36px] 2xl:h-[36px] 3xl:w-[40px] 3xl:h-[40px] "
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M19 12H5M11 6l-6 6 6 6"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg> */}

          <LeftArrowIcon />

          <span className="font-[Tenor_Sans] font-normal text-[#FCFCFC] tracking-[4px] md:tracking-[5px] lg:tracking-[6px] uppercase text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[17px]">
            Home Page
          </span>
        </button>
      </div>
    </div>
  );
}
