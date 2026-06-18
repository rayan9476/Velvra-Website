export const NavbarMenuCloseIcon = () => (
  <svg
    className="close_icon_svg lg:h-[50px] lg:w-[50px]     cursor-pointer "
    width="35"
    height="35"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6 6L18.7742 18.7742" stroke="#333333" strokeLinejoin="round" />
    <path
      d="M6 18.7744L18.7742 6.00022"
      stroke="#333333"
      strokeLinejoin="round"
    />
  </svg>
);

export const DiamondIcon = () => (
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
);

export const ChevronDownIcon = ({ className = "", isOpen = false }) => (
  <svg
    className={`transition-transform duration-300 ${
      isOpen ? "rotate-180" : ""
    } ${className}`}
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
);
