import { MdRadioButtonChecked, MdRadioButtonUnchecked } from "react-icons/md";

function PaymentMethods({
  paymentOpen,
  setPaymentOpen,
  selectedPayment,
  setSelectedPayment,
  selectedPaymentData,
  paymentMethods,
  SectionLabel,
  Card,
}) {
  return (
    <>
      <div className="mb-6 md:mb-8">
        <SectionLabel text="Payment Method" />

        <Card>
          <button
            type="button"
            onClick={() => setPaymentOpen(!paymentOpen)}
            aria-expanded={paymentOpen}
            aria-controls="payment-method-list"
            className="flex items-center justify-between w-full cursor-pointer group "
          >
            <span
              className={` font-[Tenor_Sans] font-normal text-[#555555] group-hover:text-[#DD8560] ${paymentOpen ? "text-[#DD8560]" : "text-[#555555]"} transition-colors duration-200 ease-in text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px] 3xl:text-[19px] tracking-wide`}
            >
              {selectedPaymentData?.label || "Select payment method"}
            </span>
            <svg
              className={`group-hover:text-[#DD8560]  ${paymentOpen ? "text-[#DD8560]" : "text-[#555555]"} transition-all duration-200 ${paymentOpen ? "rotate-180" : ""}`}
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M19 9l-7 7-7-7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${paymentOpen ? "max-h-[200px] mt-4" : "max-h-0"}`}
          >
            <div className="flex flex-col gap-0 border-t border-[#EEEEEE] pt-3">
              {paymentMethods.map((method, i) => (
                <button
                  key={method.id}
                  onClick={() => {
                    setSelectedPayment(method.id);
                    setPaymentOpen(false);
                  }}
                  role="radio"
                  aria-checked={selectedPayment === method.id}
                  className={`flex items-center gap-3 py-3 group/payment cursor-pointer ${i !== paymentMethods.length - 1 ? "border-b border-[#EEEEEE]" : ""}`}
                >
                  {selectedPayment === method.id ? (
                    <MdRadioButtonChecked className="text-black text-[18px]" />
                  ) : (
                    <MdRadioButtonUnchecked className="text-gray-400 text-[18px]" />
                  )}
                  <span className="font-[Tenor_Sans] font-normal text-[#555555] group-hover/payment:text-[#DD8560] transition-colors duration-200 ease-in text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px] 3xl:text-[19px] tracking-wide">
                    {method.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}

export default PaymentMethods;
