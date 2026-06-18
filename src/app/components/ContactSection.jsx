import Link from "next/link";

function ContactSection({ key, icon, text, buttonText, buttonLink }) {
  return (
    <>
      <div
        key={key}
        className="flex flex-col items-center text-center  pb-10 md:pb-12 lg:pb-14   last:pb-0"
      >
        {/* Icon */}
        <div aria-hidden="true" className="mb-5 md:mb-6 text-[#C9A84C]">
          {icon}
        </div>

        {/* Text */}
        <p className="font-[Tenor_Sans] font-normal text-[#333333] text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[24px] leading-relaxed tracking-wide mb-6 md:mb-7 max-w-[352px] md:max-w-[420px] lg:max-w-[600px] xl:max-w-[700px] 2xl:max-w-[800px] 3xl:max-w-[900px]">
          {text}
        </p>

        {/* Button */}
        <Link
          href={buttonLink}
          aria-label={buttonText}
          className="inline-flex items-center justify-center bg-[#111111] hover:bg-[#DD8560] cursor-pointer transition-colors duration-300 px-10 md:px-12 py-3 md:py-4"
        >
          <span className="font-[Tenor_Sans] font-normal text-[#FCFCFC] tracking-[4px] md:tracking-[5px] uppercase text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[17px]">
            {buttonText}
          </span>
        </Link>
      </div>
    </>
  );
}

export default ContactSection;
