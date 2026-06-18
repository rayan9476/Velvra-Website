export const SearchBarIcon = () => (
  <svg
    className="search_icon_svg lg:h-[35px] lg:w-[35px] cursor-pointer 
              transition-all duration-300 ease-in-out

    hover:scale-110
    hover:stroke-gray-600

    active:scale-95
              
              "
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z"
      stroke="#14142B"
    />
    <path d="M22 21.9999L18.7823 18.7822" stroke="#14142B" />
  </svg>
);

export const CloseSearchIcon = () => (
  <svg
    className="close_icon_svg lg:h-[50px] lg:w-[50px]     cursor-pointer "
    width="35"
    height="35"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M6 6L18.7742 18.7742" stroke="#333333" strokeLinejoin="round" />
    <path
      d="M6 18.7744L18.7742 6.00022"
      stroke="#333333"
      strokeLinejoin="round"
    />
  </svg>
);

export const RemoveRecentSearchIcon = ({
  className = "",
  onClick,
  ariaLabel = "Close",
}) => (
  <svg
    onClick={onClick}
    aria-label={ariaLabel}
    role="button"
    className={`ml-2 w-4 h-4 cursor-pointer ${className}`}
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity="0.5">
      <path
        d="M4.01758 4.01752L12.571 12.5709"
        stroke="#14142B"
        strokeWidth="0.67"
        strokeLinejoin="round"
      />
      <path
        d="M4.01758 12.571L12.571 4.01765"
        stroke="#14142B"
        strokeWidth="0.67"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);
