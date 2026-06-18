"use client";
import { useState, useRef } from "react";
import NavbarMenu from "../NavbarMenu";
import SearchBar from "../SearchBar";
import NavbarMenuListItems from "../NavbarMenuListItems";
import useSearchAnimation from "../../hooks/useSearchAnimation";
import Cart from "../Cart";
import {
  HamburgerIcon,
  SiteLogoIcon,
  SearchIcon,
  CartIcon,
} from "../icons/NavbarIcons";
import { useCart } from "@/app/components/contexts/CartContext";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  // const [isCartOpen, setIsCartOpen] = useState(false);
  const { isCartOpen, setIsCartOpen } = useCart();

  const searchMenuRef = useRef(null);
  const { openSearch, closeSearch } = useSearchAnimation(searchMenuRef);
  const searchBtnRef = useRef(null);
  return (
    <>
      <nav
        className="site_navbar fixed z-10 w-full flex items-center justify-between px-2.5 md:px-4 lg:px-5  py-4 h-[60px] lg:h-[70px] 2xl:h-[80px] 3xl:h-[90px] bg-[#E7EAEF]"
        role="navigation"
        aria-label="Primary navigation"
      >
        <div className="left_side_nav flex items-center  relative z-10">
          <div className="hamburger_icon relative ">
            {!isMenuOpen && (
              <button
                type="button"
                onClick={() => setIsMenuOpen(true)}
                aria-label="Open main menu"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
                className="cursor-pointer "
              >
                <HamburgerIcon />
              </button>
            )}
          </div>
        </div>

        <div
          className="site_logo absolute z-1  flex items-center justify-center w-full mx-auto text-black text-[25.2px] --font-integralCF font-bold"
          aria-label="Velvra homepage"
          role="link"
        >
          <SiteLogoIcon />
        </div>

        <div className="right_side_nav  flex items-center gap-3 fill-black relative z-20">
          <NavbarMenuListItems />

          <input
            ref={searchMenuRef}
            style={{ width: 0, opacity: 0, pointerEvents: "none" }}
            onClick={() => {
              if (!isSearchOpen) setIsSearchOpen(true);
            }}
            type="search"
            placeholder="Search products..."
            aria-label="Search products"
            className="search_bar  hidden
    w-full md:w-[400px] lg:w-[380px] xl:w-[480px] 2xl:w-[680px] 3xl:w-[1000px]
    px-5 py-3
    bg-gray-50
    border border-gray-200
    rounded-full
    text-sm lg:text-base

    text-gray-500            
    placeholder-gray-400      
    caret-gray-500            

    transition-all duration-300 ease-in-out

    focus:outline-none
    focus:bg-white
    focus:border-gray-400
    focus:ring-4 focus:ring-gray-200
    focus:shadow-lg
    focus:scale-[1.02]

    hover:border-gray-300
    cursor-text

  
"
          />

          <button
            ref={searchBtnRef}
            type="button"
            onClick={() => {
              if (!isSearchOpen) {
                setIsSearchOpen(true);
                openSearch();
              }
            }}
            aria-label="Open search"
            aria-controls="search-bar"
            aria-expanded={isSearchOpen}
            className="cursor-pointer xl:pr-3"
          >
            <SearchIcon />
          </button>
          <button
            type="button"
            aria-label="Open shopping cart"
            className="cursor-pointer"
            onClick={() => setIsCartOpen(true)}
          >
            <CartIcon />
          </button>
        </div>
      </nav>

      {/* menu */}
      <NavbarMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* search bar */}
      <SearchBar
        isSearchOpen={isSearchOpen}
        setIsSearchOpen={setIsSearchOpen}
        triggerRef={searchMenuRef}
        closeSearch={closeSearch}
        searchBtnRef={searchBtnRef}
      />
      <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
    </>
  );
}

export default Navbar;
