"use client";

import { useState, useRef } from "react";
import NavbarMenu from "./NavbarMenu";
import SearchBar from "./SearchBar";
import NavbarMenuListItems from "./NavbarMenuListItems";
import useSearchAnimation from "../hooks/useSearchAnimation";
import Cart from "./Cart";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

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
                <svg
                  className="hamburger_icon_svg lg:h-[35px] lg:w-[35px]  cursor-pointer  "
                  width="24"
                  height="24"
                  aria-hidden="true"
                  focusable="false"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0.306763 12H15.9824" stroke="#14142B" />
                  <path d="M0.306641 5H23.6931" stroke="#14142B" />
                  <path d="M0.306641 19H23.6931" stroke="#14142B" />
                </svg>
              </button>
            )}
          </div>
        </div>

        <div
          className="site_logo absolute z-1  flex items-center justify-center w-full mx-auto text-black text-[25.2px] --font-integralCF font-bold"
          aria-label="Velvra homepage"
          role="link"
        >
          <svg
            className="site_logo_svg  lg:h-52 lg:w-52 xl:h-56 xl:w-56 2xl:h-64 2xl:w-64 3xl:h-72 3xl:w-72  cursor-pointer  
              transition-all duration-300 ease-in-out 
    hover:scale-110
    hover:stroke-gray-600
    active:scale-95"
            width="190"
            height="190"
            role="img"
            aria-label="Velvra logo with tagline Elegance Redefined"
            viewBox="0 0 600 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M70 30 
       C90 30, 95 50, 105 80
       L120 140
       L135 80
       C145 50, 150 30, 170 30"
              stroke="black"
              stroke-width="2.2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <text x="200" y="115" class="brand" font-size="64" fill="black">
              Velvra
            </text>

            <text x="200" y="160" class="tagline" font-size="18" fill="black">
              ELEGANCE REDEFINED.
            </text>
          </svg>
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
            <svg
              className="search_icon_svg lg:h-[35px] lg:w-[35px] cursor-pointer 
              transition-all duration-300 ease-in-out

    hover:scale-110
    hover:stroke-gray-600

    active:scale-95
              
              "
              width="24"
              height="24"
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z"
                stroke="#14142B"
              />
              <path d="M22 21.9999L18.7823 18.7822" stroke="#14142B" />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Open shopping cart"
            className="cursor-pointer"
            onClick={() => setIsCartOpen(true)}
          >
            <svg
              className="cart_icon_svg lg:h-[35px] lg:w-[35px] cursor-pointer 
               hover:scale-110
    hover:stroke-gray-600

    active:scale-95"
              width="24"
              height="24"
              role="img"
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.6592 6.7207L21.4756 23.2803H3.49512L4.31152 6.7207H20.6592Z"
                stroke="#14142B"
              />
              <path
                d="M8.1604 10.1491L8.1604 5.55139C8.1604 4.40438 8.61605 3.30434 9.42711 2.49328C10.2382 1.68221 11.3382 1.22656 12.4852 1.22656C13.6322 1.22656 14.7323 1.68221 15.5433 2.49328C16.3544 3.30434 16.8101 4.40438 16.8101 5.55139V10.1491"
                stroke="#14142B"
              />
            </svg>
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
