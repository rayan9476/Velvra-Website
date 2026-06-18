function ModelCloseButton({ closeModal }) {
  return (
    <>
      <button
        type="button"
        onClick={closeModal}
        aria-label="Close modal"
        className="absolute cursor-pointer top-4 right-4 md:top-5 md:right-5 text-[#AAAAAA] hover:text-[#111111] transition-colors duration-200 z-10"
      >
        <svg
          width="18"
          height="18"
          className="lg:w-[20px] lg:h-[20px] xl:w-[24px] xl:h-[24px] 2xl:w-[26px] 2xl:h-[26px] 3xl:w-[30px] 3xl:h-[30px]"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M18 6L6 18M6 6l12 12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </>
  );
}

export default ModelCloseButton;
