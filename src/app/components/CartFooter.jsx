import Link from "next/link";
import { ShoppingCartIcon } from "./icons/CartFooterIcons";

function CartFooter({
  isEmpty,
  subtotal,
  setIsCartOpen,
  subtotalText = "Sub Total",
  emptyTextbtn = "Continue Shopping",
  notemptyTextbtn = "Buy Now",
  shippingText = true,
  className = "pt-2",
  classNameBtn = "py-4",
}) {
  return (
    <>
      <div className={`   ${className}`}>
        {!isEmpty && (
          <>
            {/* Divider */}
            <div className="h-px bg-[#e8e8e8] mb-4 px-2.5 md:px-4 lg:px-5" />

            {/* Subtotal */}
            <div className="flex items-center justify-between mb-2 px-2.5 md:px-4 lg:px-5">
              <span className="text-[16px]  md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[28px] tracking-[2px] uppercase text-[#000000]">
                {subtotalText}
              </span>
              <span className="text-[14px]  md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[24px] text-[#DD8560] tracking-widest">
                $ {subtotal.toLocaleString()}
              </span>
            </div>

            {shippingText && (
              <p className="px-2.5 md:px-4 lg:px-5 text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[22px] text-[#888888] tracking-wide leading-relaxed mb-5">
                *shipping charges, taxes and discount codes are calculated at
                the time of accounting.
              </p>
            )}
          </>
        )}

        {/* CTA Button */}
        {isEmpty ? (
          <Link
            href="/shop"
            onClick={() => setIsCartOpen(false)}
            className={`flex items-center justify-center gap-3 w-full ${classNameBtn} cursor-pointer
                bg-[#0A0A0A] hover:bg-[#DD8560]
                text-white text-[14px]  md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[24px] tracking-[3px] uppercase
                transition-colors duration-300`}
          >
            <span>
              {" "}
              <ShoppingCartIcon />
            </span>
            {emptyTextbtn}
          </Link>
        ) : (
          <button
            type="button"
            className={`flex items-center justify-center gap-3 w-full ${classNameBtn}
                bg-[#0A0A0A] hover:bg-[#DD8560] cursor-pointer
                text-white text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[24px] tracking-[3px] uppercase
                transition-colors duration-300`}
          >
            <span>
              {" "}
              <ShoppingCartIcon />
            </span>

            {notemptyTextbtn}
          </button>
        )}
      </div>
    </>
  );
}

export default CartFooter;
