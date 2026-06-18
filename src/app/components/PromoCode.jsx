import { useDispatch } from "react-redux";
import { PromoIcon, ArrowRotateIcon } from "./icons/PromoCodeIcons";

function PromoCode({
  promoOpen,
  setPromoOpen,
  promoCode,
  setPromoCode,
  promoApplied,
  setPromoApplied,
  promoError,
  setPromoError,
}) {
  const dispatch = useDispatch();

  const applyPromo = () => {
    if (promoCode.toLowerCase() === "velvra10") {
      dispatch(setPromoApplied(true));
      dispatch(setPromoError(false));
    } else {
      dispatch(setPromoError(true));
      dispatch(setPromoApplied(false));
    }
  };

  return (
    <>
      <div
        role="region"
        aria-label="Promo code section"
        className="py-5 md:py-6 border-b border-[#EEEEEE] px-2.5  md:px-4 lg:px-5 "
      >
        <button
          onClick={() => dispatch(setPromoOpen(!promoOpen))}
          aria-expanded={promoOpen}
          aria-controls="promo-input-section"
          aria-label="Toggle promo code input"
          type="button"
          className="flex items-center gap-3 w-full cursor-pointer group"
        >
          {/* Promo Icon */}

          <PromoIcon promoOpen={promoOpen} />

          <span
            className={`font-[Tenor_Sans] font-normal text-[#333333] group-hover:text-[#DD8560] ${promoOpen ? "text-[#DD8560]" : "text-[#333333]"} transition-colors duration-300 ease-in text-[13px] md:text-[14px] lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[21px] tracking-wide`}
          >
            Add promo code
          </span>

          <ArrowRotateIcon promoOpen={promoOpen} />
        </button>

        {/* Promo Input */}
        <div
          role="region"
          aria-label="Enter promo code input"
          className={`overflow-hidden  transition-all duration-300 ${promoOpen ? "max-h-[120px] mt-4" : "max-h-0"}`}
        >
          <div className="flex items-center gap-3 border-b border-[#CCCCCC] pb-2">
            <input
              type="text"
              value={promoCode}
              onChange={(e) => dispatch(setPromoCode(e.target.value))}
              placeholder="Enter promo code"
              className="font-[Tenor_Sans] font-normal flex-1 text-[13px] md:text-[14px] lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[21px]   outline-none tracking-wide bg-transparent
                
                
                text-gray-500            
        placeholder-gray-400      
        caret-gray-500 "
              aria-label="Promo code input field"
            />
            <button
              onClick={applyPromo}
              type="button"
              aria-label="Apply promo code"
              className="font-[Tenor_Sans] font-normal cursor-pointer text-[#111111] text-[13px] md:text-[14px] lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[21px]  tracking-[2px] uppercase hover:text-[#DD8560] transition-colors duration-300 ease-in"
            >
              Apply
            </button>
          </div>
          {promoApplied && (
            <p
              role="status"
              aria-live="polite"
              className="font-[Tenor_Sans] font-normal text-[#C9A84C] text-[13px] md:text-[14px] lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[21px]  mt-2 tracking-wide"
            >
              ✓ Promo code applied — 10% off
            </p>
          )}
          {promoError && (
            <p
              role="alert"
              className="font-[Tenor_Sans] font-normal text-red-400 text-[13px] md:text-[14px] lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[21px]  mt-2 tracking-wide"
            >
              Invalid promo code. enter correct promo code to get 10% off.
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default PromoCode;
