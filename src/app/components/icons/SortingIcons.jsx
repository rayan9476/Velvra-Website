export const SortChevronIcon = ({ sortOpen }) => (
  <svg
    className={`md:h-[19px] md:w-[19px] lg:h-[20px] lg:w-[20px] xl:h-[21px] xl:w-[21px] 2xl:h-[22px] 2xl:w-[22px] 3xl:h-[23px] 3xl:w-[23px]    transition-transform duration-300 ${sortOpen ? "rotate-180" : ""}`}
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill="none"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity="0.5">
      <path
        d="M8.03499 11.1685L4.55573 6.46831L11.5142 6.46832L8.03499 11.1685Z"
        fill="#333333"
      />
    </g>
  </svg>
);
