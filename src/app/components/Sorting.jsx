import { MdGridView } from "react-icons/md";
import { LuGrid3X3 } from "react-icons/lu";
import {  useRef } from "react";
import useClickOutside from "../hooks/useClickOutside";



function Sorting({
   sortOpen
            setSortOpen
            active
            setactive
            sort
            setSort
            setPage
            SORT_OPTIONS
            gridCols
            setGridCols
}) {





  const buttonRef = useRef(null);
  // Custom hook to handle outside click logic starts here
  useClickOutside(buttonRef, () => {
    if (active) setactive(false);
  });
  // Custom hook to handle outside click logic ends here



  return (
    <>
      <div className="flex items-center gap-2">
        <div className="relative">
          <button
            ref={buttonRef}
            onClick={() => setSortOpen((p) => !p)}
            className={`flex items-center gap-1.5  font-[Tenor_Sans] font-normal relative
                whitespace-nowrap
                px-4 md:px-5 lg:px-6 3xl:px-7
                py-2 md:py-2.5
                rounded-full
                text-[14px] md:text-[16px] lg:text-[18px]
${
  active
    ? "bg-[#EDEDED] text-black border border-gray-300"
    : "             bg-transparent text-gray-500 border border-gray-300  "
}

            hover:bg-[#EDEDED] hover:text-black hover:border hover:border-gray-300
            transition-all duration-300 tracking-wide cursor-pointer `}
          >
            {sort}

            <svg
              className={`md:h-[19px] md:w-[19px] lg:h-[20px] lg:w-[20px] xl:h-[21px] xl:w-[21px] 2xl:h-[22px] 2xl:w-[22px] 3xl:h-[23px] 3xl:w-[23px]    transition-transform duration-300 ${sortOpen ? "rotate-180" : ""}`}
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.5">
                <path
                  d="M8.03499 11.1685L4.55573 6.46831L11.5142 6.46832L8.03499 11.1685Z"
                  fill="#333333"
                />
              </g>
            </svg>
          </button>
          {sortOpen && (
            <div className="absolute right-0 top-full mt-1 bg-white border border-[#e8e8e8] shadow-md z-10 w-[130px]">
              {SORT_OPTIONS.map((o) => (
                <button
                  key={o}
                  onClick={() => {
                    setSort(o);
                    setSortOpen(false);
                    setPage(1);
                    setactive(true);
                  }}
                  className={`w-full text-left px-4 py-2 text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[17px] tracking-wide cursor-pointer
                        hover:text-[#DD8560] transition-colors duration-200
                        ${sort === o ? "text-[#DD8560]" : "text-[#333333]"}`}
                >
                  {o}
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="flex items-center gap-1">
          {[2, 3].map((cols) => (
            <button
              key={cols}
              onClick={() => setGridCols(cols)}
              className={`p-1.5 cursor-pointer transition-colors duration-200
                    ${gridCols === cols ? "text-[#333333]" : "text-[#aaaaaa]"}`}
              aria-label={`${cols} columns`}
            >
              {cols === 2 ? (
                <MdGridView className="h-[19px] w-[19px]  md:h-[20px] md:w-[20px] xl:h-[22px]  xl:w-[22px]  xl:h-[24px]  xl:w-[24px]" />
              ) : (
                <LuGrid3X3 className="h-[19px]  w-[19px]  md:h-[20px] md:w-[20px] xl:h-[22px]  xl:w-[22px]  xl:h-[24px]  xl:w-[24px]" />
              )}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default Sorting;
