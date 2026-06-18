"use client";
import DividerSVG from "../DividerSVG";
import { TwitterIcon, InstagramIcon, YoutubeIcon } from "../Icons/FooterIcons";

const Icons = [
  {
    icon: <TwitterIcon />,
  },
  {
    icon: <InstagramIcon />,
  },
  {
    icon: <YoutubeIcon />,
  },
];

const Links = ["About", "Contact", "Blog"];

export default function Footer() {
  return (
    <footer
      className={`w-full    pt-12  md:pt-14 lg:pt-16 flex flex-col items-center justify-center bg-[#F3F4F6]`}
      role="contentinfo"
      aria-label="Site footer"
    >
      <div
        className="flex items-center px-2.5 md:px-4 lg:px-5 gap-8 md:gap-12 lg:gap-16 mb-4 md:mb-6 lg:mb-8 xl:mb-9 2xl:mb-10 3xl:mb-11 "
        aria-label="Social media links"
      >
        {Icons.map((f, index) => (
          <span key={index} aria-label={f.label} role="img">
            {f.icon}
          </span>
        ))}
      </div>

      <DividerSVG className="w-[10rem]  lg:w-[12rem] xl:w-[14rem] 2xl:w-[16rem] 3xl:w-[18rem]" />

      <div className="flex items-center  justify-center w-full gap-8 lg:gap-12 3xl:gap-16  mt-5 mb-5 md:mt-7 md:mb-7 lg:mt-9 lg:mb-9 xl:mt-11 xl:mb-11 2xl:mt-13 2xl:mb-13 3xl:mt-15 3xl:mb-15">
        {Links.map((link, index) => (
          <span
            key={index}
            aria-label={link}
            className={`font-[Tenor_Sans] font-normal  text-[#333333] hover:text-gray-500   transition-all duration-300 cursor-pointer text-[18px] md:text-[22px] lg:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[38px] tracking-wide`}
          >
            {link}
          </span>
        ))}
      </div>

      <div
        className={`flex items-center   bg-[#F3F4F6] justify-center w-full mt-4 `}
      >
        <p
          className={`font-[Tenor_Sans] font-normal   text-[#333333] text-[18px] md:text-[22px] lg:text-[26px] xl:text-[30px] tracking-wide py-[0.5rem]`}
          aria-label="Copyright notice"
        >
          © 2026 Velvra — Elegance <br className="lg:hidden" /> Refined. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
