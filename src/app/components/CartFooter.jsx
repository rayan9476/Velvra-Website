import Link from "next/link";

function CartFooter({ isEmpty, subtotal, setIsCartOpen }) {
  return (
    <>
      <div className="  pt-2">
        {!isEmpty && (
          <>
            {/* Divider */}
            <div className="h-px bg-[#e8e8e8] mb-4 px-2.5 md:px-4 lg:px-5" />

            {/* Subtotal */}
            <div className="flex items-center justify-between mb-2 px-2.5 md:px-4 lg:px-5">
              <span className="text-[16px]  md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[28px] tracking-[2px] uppercase text-[#000000]">
                Sub Total
              </span>
              <span className="text-[14px]  md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[24px] text-[#DD8560] tracking-widest">
                $ {subtotal.toLocaleString()}
              </span>
            </div>

            <p className="px-2.5 md:px-4 lg:px-5 text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[22px] text-[#888888] tracking-wide leading-relaxed mb-5">
              *shipping charges, taxes and discount codes are calculated at the
              time of accounting.
            </p>
          </>
        )}

        {/* CTA Button */}
        {isEmpty ? (
          <Link
            href="/shop"
            onClick={() => setIsCartOpen(false)}
            className="flex items-center justify-center gap-3 w-full py-4 cursor-pointer
                bg-[#0A0A0A] hover:bg-[#DD8560]
                text-white text-[14px]  md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[24px] tracking-[3px] uppercase
                transition-colors duration-300"
          >
            <svg
              className="md:w-[24px] md:h-[24px] lg:w-[28px] lg:h-[28px] xl:w-[32px] lg:h-[32px] xl:w-[34px] xl:h-[34px] 2xl:w-[36px] 2xl:h-[36px] 3xl:w-[40px] 3xl:h-[40px] "
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.1367 5.68384L17.8086 19.3167H3L3.67188 5.68384H17.1367Z"
                stroke="#FCFCFC"
              />
              <path
                d="M6.80035 8.45764L6.80035 4.62624C6.80035 3.6704 7.18006 2.7537 7.85595 2.07781C8.53183 1.40193 9.44853 1.02222 10.4044 1.02222C11.3602 1.02222 12.2769 1.40193 12.9528 2.07781C13.6287 2.7537 14.0084 3.6704 14.0084 4.62624V8.45764"
                stroke="#FCFCFC"
              />
            </svg>
            Continue Shopping
          </Link>
        ) : (
          <button
            className="flex items-center justify-center gap-3 w-full py-4
                bg-[#0A0A0A] hover:bg-[#DD8560] cursor-pointer
                text-white text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[24px] tracking-[3px] uppercase
                transition-colors duration-300"
          >
            <svg
              className="md:w-[24px] md:h-[24px] lg:w-[28px] lg:h-[28px] xl:w-[32px] lg:h-[32px] xl:w-[34px] xl:h-[34px] 2xl:w-[36px] 2xl:h-[36px] 3xl:w-[40px] 3xl:h-[40px] "
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.1367 5.68384L17.8086 19.3167H3L3.67188 5.68384H17.1367Z"
                stroke="#FCFCFC"
              />
              <path
                d="M6.80035 8.45764L6.80035 4.62624C6.80035 3.6704 7.18006 2.7537 7.85595 2.07781C8.53183 1.40193 9.44853 1.02222 10.4044 1.02222C11.3602 1.02222 12.2769 1.40193 12.9528 2.07781C13.6287 2.7537 14.0084 3.6704 14.0084 4.62624V8.45764"
                stroke="#FCFCFC"
              />
            </svg>
            Buy Now
          </button>
        )}
      </div>
    </>
  );
}

export default CartFooter;
