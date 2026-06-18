"use client";
import { MdGridView } from "react-icons/md";
import { LuGrid3X3 } from "react-icons/lu";
import { useRef } from "react";
import useClickOutside from "../hooks/useClickOutside";
import { SortChevronIcon } from "./icons/SortingIcons";
import { useDispatch, useSelector } from "react-redux";

import {
  setSort,
  setSortOpen,
  setGridCols,
  setActive,
} from "../redux/features/ProductsSlice";

function Sorting({ SORT_OPTIONS, handlePriceFilter }) {
  const { sort, sortOpen, gridCols, active } = useSelector(
    (state) => state.products,
  );

  const dispatch = useDispatch();

  const buttonRef = useRef(null);
  // Custom hook to handle outside click logic starts here
  useClickOutside(buttonRef, () => {
    if (active) dispatch(setActive(false));
  });
  // Custom hook to handle outside click logic ends here

  return (
    <>
      <div
        className="flex items-center gap-2"
        role="toolbar"
        aria-label="Sorting and grid layout controls"
      >
        <div className="relative">
          <button
            ref={buttonRef}
            onClick={() => dispatch(setSortOpen(!sortOpen))}
            type="button"
            aria-haspopup="listbox"
            aria-expanded={sortOpen}
            aria-controls="sorting-options-menu"
            aria-label={`Current sorting option ${sort}`}
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

            <SortChevronIcon sortOpen={sortOpen} />
          </button>
          {sortOpen && (
            <div
              id="sorting-options-menu"
              role="listbox"
              aria-label="Sorting options"
              className="absolute right-0 top-full mt-1 bg-white border border-[#e8e8e8] shadow-md z-1 w-[130px]"
            >
              {SORT_OPTIONS.map((o) => (
                <button
                  key={o}
                  onClick={() => {
                    dispatch(setSort(o));
                    dispatch(setSortOpen(false));
                    dispatch(setActive(true));
                    handlePriceFilter(o);
                  }}
                  type="button"
                  role="option"
                  aria-selected={sort === o}
                  aria-label={`Sort by ${o}`}
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
        <div
          className="flex items-center gap-1"
          role="group"
          aria-label="Grid layout selection"
        >
          {[2, 3].map((cols) => (
            <button
              key={cols}
              onClick={() => dispatch(setGridCols(cols))}
              type="button"
              aria-pressed={gridCols === cols}
              aria-label={`Display products in ${cols} columns`}
              className={` cursor-pointer transition-colors duration-200
                    ${gridCols === cols ? "text-[#333333]" : "text-[#aaaaaa]"}`}
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
