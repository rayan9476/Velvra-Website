import CheckIcon from "./CheckIcon";
import SparkleIcon from "./SparkleIcon";
import ModelCloseButton from "./ModelCloseButton";
import ratings from "../data/ratings";
import DividerSVG from "./DividerSVG";

function PaymentSuccessModalContent({
  closeModal,
  paymentId,
  selectedRating,
  setSelectedRating,
  showError,
  submitted,
  handleSubmit,
  handleBackToHome,
}) {
  return (
    <>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="payment-success-title"
        className="model-content  relative bg-white w-full max-w-[340px] md:max-w-[400px] lg:max-w-[440px] xl:max-w-[480px] 2xl:max-w-[520px] 3xl:max-w-[560px] rounded-sm z-10 overflow-hidden"
      >
        {/* Close Button */}
        <ModelCloseButton closeModal={closeModal} />

        <section className="px-6 md:px-8 lg:px-10 pt-8 md:pt-10 pb-0">
          {/* Heading */}
          <header>
            <h2
              id="payment-success-title"
              className="font-[Tenor_Sans] font-normal text-[#111111] text-center tracking-[4px] md:tracking-[5px] uppercase text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[24px] mb-7 md:mb-8"
            >
              Payment Success
            </h2>
          </header>

          {/* Check Icon with Sparkles */}
          <div
            className="flex items-center justify-center mb-6 md:mb-7 relative"
            aria-hidden="true"
          >
            {/* Top left sparkle */}
            <SparkleIcon className="absolute top-[-8px] left-[50%] -translate-x-[160%] w-3 h-3 md:w-4 md:h-4 text-[#C9A84C]" />

            {/* Top right sparkle large */}
            <SparkleIcon className="absolute top-[-14px] left-[50%] translate-x-[60%] w-4 h-4 md:w-5 md:h-5 text-[#C9A84C]" />

            {/* Left sparkle small */}
            <SparkleIcon className="absolute bottom-[10px] left-[50%] -translate-x-[200%] w-2 h-2 md:w-3 md:h-3 text-[#C9A84C] opacity-60" />

            <CheckIcon />
          </div>

          {/* Success Text */}
          <div className="text-center mb-5 md:mb-6">
            <p className="font-[Tenor_Sans] font-normal text-[#111111] text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px] 3xl:text-[19px] tracking-wide mb-1">
              Your payment was success
            </p>
            <p className="font-[Tenor_Sans] font-normal text-[#AAAAAA] text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[17px] tracking-wide">
              Payment ID {paymentId}
            </p>
          </div>

          {/* Divider with Diamond */}
          <div
            className="flex items-center justify-center gap-3 mb-5 md:mb-6"
            aria-hidden="true"
          >
            <DividerSVG className="w-[7rem] md:w-[8rem] lg:w-[9rem] xl:w-[10rem] 2xl:w-[18rem]" />
          </div>

          {/* Rate Your Purchase */}
          <section
            className="text-center mb-6 md:mb-7"
            aria-label="Rate your purchase section"
          >
            <p className="font-[Tenor_Sans] font-normal text-[#111111] text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px] 3xl:text-[18px] tracking-wide mb-4 md:mb-5">
              Rate your purchase
            </p>
            {/* Rating Emojis */}
            <div
              className="flex items-center justify-center gap-5 md:gap-6 lg:gap-7"
              role="radiogroup"
              aria-label="Rating options"
            >
              {ratings.map((r) => (
                <button
                  type="button"
                  key={r.id}
                  onClick={() => setSelectedRating(r.id)}
                  role="radio"
                  aria-checked={selectedRating === r.id}
                  aria-label={`Rating option ${r.id}`}
                  className="flex flex-col items-center gap-1 group"
                >
                  <div
                    className={`w-9 h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 transition-transform duration-200 ${selectedRating === r.id ? "scale-110" : "group-hover:scale-105"}`}
                  >
                    {r.icon(selectedRating === r.id)}
                  </div>
                </button>
              ))}
            </div>

            {/* No rating warning */}
            {showError && (
              <p
                role="alert"
                className="font-[Tenor_Sans] font-normal text-red-400 text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[17px] mt-3 tracking-wide"
              >
                Please select a rating
              </p>
            )}
            {/* Thank you message */}
            {submitted && selectedRating && (
              <p className="font-[Tenor_Sans] font-normal text-[#C9A84C] text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[17px] mt-3 tracking-wide">
                ✓ Thank you for your feedback!
              </p>
            )}
          </section>
        </section>
        <footer
          className="flex border-t border-[#EEEEEE]"
          aria-label="Modal actions"
        >
          <button
            onClick={handleSubmit}
            aria-label="Submit rating"
            className="flex-1 bg-[#111111] hover:bg-[#DD8560] cursor-pointer transition-all duration-200  py-4 md:py-5"
          >
            <span className="font-[Tenor_Sans] font-normal text-white tracking-[3px] md:tracking-[4px] uppercase text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[17px] ">
              Submit
            </span>
          </button>

          <div className="w-[1px] bg-[#EEEEEE]" aria-hidden="true" />

          <button
            onClick={handleBackToHome}
            aria-label="Back to home page"
            className="flex-1 bg-white hover:bg-[#111111] hover:text-white cursor-pointer transition-all duration-200  py-4 md:py-5"
          >
            <span className="font-[Tenor_Sans] font-normal tracking-[3px] md:tracking-[4px] uppercase text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[17px]">
              Back To Home
            </span>
          </button>
        </footer>
      </div>
    </>
  );
}

export default PaymentSuccessModalContent;
