"use client";
import { useState, useRef } from "react";
import useMenuSlideAnimation from "../hooks/useMenuSlideAnimation";
import useClickOutside from "../hooks/useClickOutside";
import useMenuAnimation from "../hooks/useMenuAnimation";
import popularSearches from "../data/PopularSearches";
import {
  SearchBarIcon,
  CloseSearchIcon,
  RemoveRecentSearchIcon,
} from "./icons/SearchBarIcons";

export default function SearchBar({
  isSearchOpen,
  setIsSearchOpen,
  triggerRef,
  closeSearch,
  searchBtnRef,
}) {
  const [searchText, setSearchText] = useState("");

  const [recentSearches, setRecentSearches] = useState(["Dress", "Men"]);

  const removeRecentSearch = (index) => {
    setRecentSearches((prev) => prev.filter((_, i) => i !== index));
  };
  const searchRef = useRef(null);
  // Custom hook to handle slide animation start here
  useMenuSlideAnimation(isSearchOpen, searchRef, "left");
  // Custom hook to handle slide animation ends here

  // Custom hook to handle menu animation logic starts here
  const { openMenu, closeMenu } = useMenuAnimation(searchRef);
  // Custom hook to handle menu animation logic ends here

  // Custom hook to handle outside click logic starts here
  useClickOutside(
    searchRef,
    () => {
      if (isSearchOpen) setIsSearchOpen(false);
      if (closeSearch) closeSearch(); // check if search is open before setting state to avoid unnecessary re-renders
    },
    triggerRef,
    searchBtnRef,
  );
  // Custom hook to handle outside click logic ends here

  return (
    <div
      ref={searchRef}
      role="dialog"
      aria-modal="true"
      aria-label="Search panel"
      className={`search_bar_container  h-screen z-50 overflow-x-hidden  opacity-0  fixed inset-0 top-0 left-0 right-0  bg-white  w-full  xl:w-[588px] 2xl:w-[788px] 3xl:w-[988px]   mx-auto font-[Tenor_Sans]  px-2.5 md:px-4 lg:px-5  py-4 
        ${isSearchOpen ? openMenu() : closeMenu()}
     
     ${isSearchOpen ? "pointer-events-auto " : "pointer-events-none "}
        `}
    >
      <div className="small_search_bar lg:hidden  flex items-center border-b border-[#555555] pb-2">
        <SearchBarIcon />

        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search items"
          aria-label="Search items"
          className="flex-1 px-3 text-[14px] md:text-[16px] lg:text-[18px] text-black placeholder:text-[#888888] bg-transparent outline-none
           text-gray-500            
    placeholder-gray-400      
    caret-gray-500    "
        />

        <button
          className="relative z-10 cursor-pointer"
          type="button"
          onClick={() => {
            setIsSearchOpen(false);

            console.log("Close search button clicked...");
          }}
          aria-label="Close search"
        >
          <CloseSearchIcon />
        </button>
      </div>

      <div className="relative z-10  w-full  items-center justify-end hidden lg:flex">
        <button
          className=" cursor-pointer "
          type="button"
          onClick={() => {
            if (isSearchOpen) setIsSearchOpen(false);
            if (closeSearch) closeSearch();
          }}
          aria-label="Close search"
        >
          <CloseSearchIcon />
        </button>
      </div>

      {recentSearches.length > 0 && (
        <>
          <span
            className="block mt-2 mb-2 xl:mb-4 md:mt-3 lg:mt-4 text-[14px] md:text-[16px] lg:text-[18px] xl:text-[24px] text-[#888888]  leading-[34.5px]"
            aria-label="Recent searches"
          >
            Recent search
          </span>
          <div className=" flex flex-wrap  gap-2 md:gap-3 lg:gap-4">
            {recentSearches.map((item, idx) => (
              <div
                key={idx}
                role="button"
                aria-label={`Search ${item}`}
                className="flex items-center bg-gray-100 cursor-pointer hover:bg-gray-300 hover:text-black transition-all duration-100 ease-in rounded-[33px] px-3 py-2 text-[14px] md:text-[16px] lg:text-[18px] xl:text-[24px] font-[Tenor_Sans] font-normal leading-[100%] text-center"
              >
                <span className="">{item}</span>

                <RemoveRecentSearchIcon
                  onClick={() => removeRecentSearch(idx)}
                  ariaLabel={`Remove ${item} from recent searches`}
                />
              </div>
            ))}
          </div>
        </>
      )}

      <div
        className="mt-4 md:mt-6 lg:mt-8 text-[14px] md:text-[16px] lg:text-[18px] xl:text-[24px] text-[#888888] font-normal leading-[36.5px]"
        aria-label="Popular search terms"
      >
        <span>Popular search terms </span>

        <div className="flex gap-2 md:gap-4 lg:gap-6 mt-1 md:mt-3 lg:mt-5 flex-col text-[#000000]  ">
          {popularSearches.map((item, index) => (
            <span
              key={index}
              role="button"
              aria-label={`Search ${item}`}
              className="hover:text-[#888888] cursor-pointer transition-all duration-100 ease-in"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
