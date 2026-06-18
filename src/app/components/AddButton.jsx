function AddButton({ onClick, text }) {
  return (
    <>
      <button
        onClick={onClick}
        className="w-full bg-[#111111] hover:bg-[#DD8560] cursor-pointer  transition-all duration-300 flex items-center justify-center gap-4 py-5 md:py-6 group"
      >
        <span className="font-[Tenor_Sans] font-normal text-[#FCFCFC] tracking-[4px] md:tracking-[6px] uppercase text-[14px]  md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[24px]">
          {text}
        </span>
        <svg
          className="group-hover:translate-x-2 transition-transform duration-300  md:w-[24px] md:h-[24px] lg:w-[28px] lg:h-[28px] xl:w-[32px] lg:h-[32px] xl:w-[34px] xl:h-[34px] 2xl:w-[36px] 2xl:h-[36px] 3xl:w-[40px] 3xl:h-[40px] "
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M5 12h14M13 6l6 6-6 6"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </>
  );
}

export default AddButton;
