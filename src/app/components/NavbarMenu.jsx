"use client";
import { useState, useRef } from "react";
import menuData from "../data/NavbarMenuData";
import NavbarMenuFooter from "./NavbarMenuFooter";
import useMenuSlideAnimation from "../hooks/useMenuSlideAnimation";

function NavbarMenu({ isMenuOpen, setIsMenuOpen }) {
  const [isActiveItem, setisActiveItem] = useState("Women");
  const itemRefs = useRef({});
  const [openItem, setOpenItem] = useState(null);
  const toggle = (title) => {
    setOpenItem(openItem === title ? null : title);
  };
  // get menu based on active tab
  const currentMenu = menuData[isActiveItem] || menuData["Women"];
  const menuRef = useRef(null);
  // Custom hook to handle slide animation start here
  useMenuSlideAnimation(isMenuOpen, menuRef, "left");
  // Custom hook to handle slide animation ends here

  return (
    <>
      <div
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Main menu"
        className="navbar_menu h-screen  overflow-hidden transfrom translate-x-[-100%]   z-20 w-full bg-[#FFFFFF] fixed top-0 left-0"
      >
        <div className="close_icon relative top-[0.8rem]    left-[0.2rem]  md:left-[0.6rem] lg:top-[1.1rem]">
          <button
            type="button"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
            className="cursor-pointer "
          >
            <svg
              className="close_icon_svg lg:h-[50px] lg:w-[50px]     cursor-pointer "
              width="35"
              height="35"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 6L18.7742 18.7742"
                stroke="#333333"
                stroke-linejoin="round"
              />
              <path
                d="M6 18.7744L18.7742 6.00022"
                stroke="#333333"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="menu_content   relative  h-full px-[0.6rem] md:px-4 lg:px-5 pt-8 md:pt-16 ">
          <ul
            className="menu_list  text-center text-2xl font-medium  gap-16 md:gap-52 lg:gap-72 flex "
            role="menu"
            aria-label="Main categories"
          >
            {["Women", "Men", "Kids"].map((item) => (
              <li
                key={item}
                onClick={() => setisActiveItem(item)}
                aria-label={`Select ${item} category`}
                role="menuitem"
                tabIndex={0}
                ref={(el) => (itemRefs.current[item] = el)}
                className={`font-tenor relative text-[14px] md:text-[18px] lg:text-[20px] leading-[34.5px] tracking-[3px] uppercase font-normal cursor-pointer transition-colors duration-300 ${
                  isActiveItem === item ? "text-[#333333]" : "text-gray-400"
                }`}
              >
                {item}

                <div className="line-con flex items-center w-full  absolute top-8 z-10 md:top-[3.5rem]  px-[0.6rem] md:px-4 left-0 justify-start ">
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 flex items-center justify-center transition-opacity duration-300 ${
                      isActiveItem === item ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="line h-[1px] w-[30px] bg-[#DD8560]" />
                    <svg
                      width="9"
                      height="9"
                      viewBox="0 0 9 9"
                      fill="none"
                      role="separator"
                      aria-hidden="true"
                    >
                      <rect
                        x="4.24265"
                        width="6"
                        height="6"
                        transform="rotate(45 4.24265 0)"
                        fill="#DD8560"
                      />
                    </svg>
                    <div className="line h-[1px] w-[30px] bg-[#DD8560]" />
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="absolute w-full top-16  md:top-[7.5rem] pr-[1.4rem] md:pr-[2.4rem] lg:pr-12 ">
            <div className="h-[1px]    bg-[#888888] flex items-center justify-start"></div>
          </div>

          <div className=" py-6 md:py-12 font-[Tenor_Sans]">
            {currentMenu.map((menu) => (
              <div key={menu.title} className="">
                <div
                  onClick={() => toggle(menu.title)}
                  aria-label={`Toggle ${menu.title} menu`}
                  role="button"
                  tabIndex={0}
                  aria-expanded={openItem === menu.title}
                  className="flex items-center justify-between  h-[48.5px] md:h-[90px] cursor-pointer text-[16px] md:text-[18px] lg:text-[20px] font-normal text-black hover:text-gray-500 transition"
                >
                  <span>{menu.title}</span>

                  <svg
                    className={`transition-transform duration-300 ${
                      openItem === menu.title ? "rotate-180" : ""
                    }`}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M19 9L12.0368 15.9632L5.07366 9"
                      stroke="currentColor"
                      strokeOpacity="0.5"
                    />
                  </svg>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openItem === menu.title
                      ? "max-h-[400px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                  role="region"
                  aria-label={`${menu.title} submenu`}
                >
                  {menu.items.map((item, i) => (
                    <div
                      key={i}
                      aria-label={item}
                      role="menuitem"
                      tabIndex={0}
                      className="flex items-center justify-between pl-8 pr-5 h-[44px] text-[14px] lg:text-[18px] text-gray-500 hover:text-black  last:border-none cursor-pointer transition"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <NavbarMenuFooter />
        </div>
      </div>
    </>
  );
}

export default NavbarMenu;
