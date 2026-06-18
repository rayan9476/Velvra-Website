import { useState, useRef, useEffect } from "react";

function StatusDropdown({ status, onChange, Options, styleFunc }) {
  const [open, setOpen] = useState(false);

  const dropdownRef = useRef();
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open]);

  return (
    <div ref={dropdownRef} className="relative w-full">
      <button
        onClick={(e) => {
          e.stopPropagation();
          setOpen((prev) => !prev);
        }}
        className={`font-[Tenor_Sans]  font-normal text-[12px]  xl:text-[15px]   2xl:text-[16px] 3xl:text-[17px] tracking-wide px-2.5 md:px-1 xl:px-2.5 py-1 rounded-full flex items-center gap-1.5 transition-all ${styleFunc(status)}`}
      >
        {status}

        <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
          <path
            d="M19 9l-7 7-7-7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
      {open && (
        <>
          <div className="absolute  top-full mt-1 right-0 z-20 bg-white dark:bg-[#1D2939] border border-gray-100 dark:border-[#1d2939] rounded-xl shadow-lg overflow-hidden w-[150px]">
            {Options.map((opt) => (
              <button
                key={opt}
                onClick={(e) => {
                  e.stopPropagation();
                  onChange(opt);
                  setOpen(false);
                }}
                onWheel={(e) => e.stopPropagation()}
                className={`w-full cursor-pointer text-left px-4 py-2.5 font-[Tenor_Sans] font-normal text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px]   2xl:text-[16px] 3xl:text-[17px]  tracking-wide transition-colors hover:bg-gray-50 dark:hover:bg-white/5 ${status === opt ? "font-semibold" : ""}`}
              >
                <span
                  className={`${styleFunc(opt)} px-2 py-0.5 rounded-full text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[17px]`}
                >
                  {opt}
                </span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default StatusDropdown;
