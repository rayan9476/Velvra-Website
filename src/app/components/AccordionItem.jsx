import { useState } from "react";

function AccordionItem({ svg, title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <>
      <div className="border-b border-[#E0E0E0]">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between py-4 md:py-5 cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <span className="font-[Tenor_Sans] font-normal text-[#111111]  text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px] 3xl:text-[18px]  tracking-wide">
              {svg}
            </span>
            <span className="font-[Tenor_Sans] font-normal text-[#111111]  text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px] 3xl:text-[18px]  tracking-wide">
              {title}
            </span>
          </div>
          <svg
            className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M19 9L12 16L5 9"
              stroke="#111111"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[200px] pb-4" : "max-h-0"}`}
        >
          <p className="font-[Tenor_Sans] font-normal text-[#777777]  text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px] 3xl:text-[18px]  leading-relaxed">
            {children}
          </p>
        </div>
      </div>
    </>
  );
}

export default AccordionItem;
