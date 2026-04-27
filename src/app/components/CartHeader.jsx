function CartHeader({ setIsCartOpen }) {
  return (
    <>
      <div className="px-2.5 md:px-4 lg:px-5 pt-6 pb-4">
        <button
          onClick={() => setIsCartOpen(false)}
          aria-label="Close cart"
          className="mb-4 cursor-pointer text-[#333333]  hover:text-[#DD8560] transition-colors duration-200"
        >
          <svg
            className=" lg:h-[50px] lg:w-[50px]   "
            width="35"
            height="35"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M6 6L18 18"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
            <path
              d="M6 18L18 6"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <h2 className="text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[26px] 3xl:text-[28px] tracking-[3px] uppercase text-[#000000]">
          Cart
        </h2>
      </div>
    </>
  );
}

export default CartHeader;
