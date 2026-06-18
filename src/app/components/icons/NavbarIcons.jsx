export const HamburgerIcon = () => (
  <svg
    className="hamburger_icon_svg lg:h-[35px] lg:w-[35px]  cursor-pointer  "
    width="24"
    height="24"
    aria-label="Hamburger Menu Icon"
    role="img"
    focusable="false"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0.306763 12H15.9824" stroke="#14142B" />
    <path d="M0.306641 5H23.6931" stroke="#14142B" />
    <path d="M0.306641 19H23.6931" stroke="#14142B" />
  </svg>
);

export const SiteLogoIcon = () => (
  <svg
    // className="site_logo_svg  lg:h-52 lg:w-52 xl:h-56 xl:w-56 2xl:h-64 2xl:w-64 3xl:h-72 3xl:w-72  cursor-pointer pointer-events-none
    //           transition-all duration-300 ease-in-out
    // hover:scale-110
    // hover:stroke-gray-600
    // active:scale-95"
    className="site_logo_svg   lg:w-52  xl:w-56  2xl:w-64  3xl:w-72  cursor-pointer 
            
   "
    width="190"
    // height="190"
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
      strokeWidth="2.2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <text x="200" y="115" className="brand" fontSize="64" fill="black">
      Velvra
    </text>

    <text x="200" y="160" className="tagline" fontSize="18" fill="black">
      ELEGANCE REDEFINED.
    </text>
  </svg>
);

export const SearchIcon = () => (
  <svg
    aria-label="Search Icon"
    role="img"
    className="search_icon_svg lg:h-[35px] lg:w-[35px] cursor-pointer 
              transition-all duration-300 ease-in-out

    hover:scale-110
    hover:stroke-gray-600

    active:scale-95
              
              "
    width="24"
    height="24"
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
);

export const CartIcon = () => (
  <svg
    className="cart_icon_svg lg:h-[35px] lg:w-[35px] cursor-pointer 
               hover:scale-110
    hover:stroke-gray-600

    active:scale-95"
    width="24"
    height="24"
    role="img"
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
);
