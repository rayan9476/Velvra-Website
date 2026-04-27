import { useState, useRef } from "react";
import menuData from "../data/NavbarMenuData";
import useClickOutside from "../hooks/useClickOutside";
import useMenuAnimation from "../hooks/useMenuAnimation";
import useDropdownAnimation from "../hooks/useDropdownAnimation";

function NavbarMenuListItems() {
  const [isActiveItem, setisActiveItem] = useState("");
  const itemRefs = useRef({});
  const [openItem, setOpenItem] = useState(null);

  const currentMenu = menuData[isActiveItem] ?? [];

  //   Custom hook to handle dropdown animation logic starts here
  const { dropdownRefs, toggle } = useDropdownAnimation();
  //  Custom hook to handle dropdown animation logic ends here

  const wrapperRef = useRef(null);

  const menuContainerRef = useRef(null);

  // Custom hook to handle menu animation logic starts here
  const { openMenu, closeMenu } = useMenuAnimation(menuContainerRef);
  // Custom hook to handle menu animation logic ends here

  // Custom hook to handle outside click logic starts here
  useClickOutside(wrapperRef, () => {
    if (!isActiveItem) return;

    if (openItem) toggle(openItem);

    closeMenu(() => {
      setOpenItem(null);
      setisActiveItem("");
    });
  });
  // Custom hook to handle outside click logic ends here

  return (
    <>
      <div
        ref={wrapperRef}
        className="list_items pr-4 hidden"
        aria-label="Main navigation"
      >
        <ul
          className="menu_list text-center flex gap-16 md:gap-52 lg:gap-4  "
          role="menubar"
        >
          {["Women", "Men", "Kids"].map((item) => (
            <li
              key={item}
              onClick={() => {
                if (isActiveItem !== item) {
                  setisActiveItem(item);
                  openMenu();
                }
              }}
              ref={(el) => (itemRefs.current[item] = el)}
              role="menuitem"
              aria-haspopup="true"
              aria-expanded={isActiveItem === item}
              aria-label={`${item} menu`}
              className={`font-tenor relative text-[14px] md:text-[18px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[22px]
        leading-[34.5px] tracking-[3px] uppercase font-normal cursor-pointer
        transition-colors duration-300 group
        ${isActiveItem === item ? "text-gray-700 bg-gray-300" : "text-gray-400"}
        lg:text-black lg:px-3  
       rounded-[10px]
        lg:hover:bg-gray-300  lg:hover:text-gray-700
      `}
            >
              {item}

              <div className="line-con lg:hidden flex items-center w-full absolute top-8 z-10 md:top-[3.5rem] px-[0.6rem] md:px-4 left-0 justify-start">
                <div
                  className={`absolute left-1/2 -translate-x-1/2 flex items-center justify-center transition-opacity duration-300 ${
                    isActiveItem === item ? "opacity-100" : "opacity-0"
                  }`}
                  aria-hidden="true"
                >
                  <div className="line h-[1px] w-[30px] bg-[#DD8560]" />
                  <svg
                    width="9"
                    height="9"
                    viewBox="0 0 9 9"
                    fill="none"
                    aria-hidden="true"
                    focusable="false"
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

        <div
          ref={menuContainerRef}
          onClick={(e) => {
            e.stopPropagation();
          }}
          role="menu"
          aria-label="Submenu"
          style={{
            opacity: 0,
            transform: "translateY(-20px)",
            pointerEvents: "none",
          }}
          className={`py-6  absolute top-12 font-[Tenor_Sans] bg-white lg:w-[290px] xl:w-[308px] 2xl:w-[327px]  3xl:w-[347px]
            
            `}
        >
          {currentMenu.map((menu) => (
            <div key={menu.title}>
              <div
                onClick={() => toggle(menu.title, setOpenItem)}
                role="button"
                aria-expanded={openItem === menu.title}
                aria-label={`Toggle ${menu.title}`}
                className="flex items-center justify-between h-[48.5px] md:h-[90px] lg:h-[60px]
          cursor-pointer
          text-[16px] md:text-[18px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]
          font-normal text-black hover:text-gray-500 transition
          lg:hover:bg-gray-100 lg:px-[0.6rem] lg:rounded"
              >
                <span>{menu.title}</span>
                <svg
                  className={`transition-transform duration-300 ${openItem === menu.title ? "rotate-180" : ""}`}
                  width="24"
                  height="24"
                  aria-hidden="true"
                  focusable="false"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M19 9L12.0368 15.9632L5.07366 9"
                    stroke="currentColor"
                    strokeOpacity="0.5"
                  />
                </svg>
              </div>

              <div
                ref={(el) => (dropdownRefs.current[menu.title] = el)}
                style={{ height: 0, overflow: "hidden", opacity: 0 }}
                role="group"
                aria-label={`${menu.title} items`}
              >
                {menu.items.map((item, i) => (
                  <div
                    key={i}
                    role="menuitem"
                    aria-label={item}
                    className="flex items-center justify-between pl-8 pr-5 h-[44px]
              text-[14px] lg:text-[15px] xl:text-[17px] 2xl:text-[18px]
              text-gray-500 hover:text-black cursor-pointer transition
              lg:hover:bg-gray-100 lg:px-3 lg:rounded"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default NavbarMenuListItems;
