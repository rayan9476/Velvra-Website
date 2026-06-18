import { MdRadioButtonChecked, MdRadioButtonUnchecked } from "react-icons/md";
function ShippingMethods({
  shippingOpen,
  setShippingOpen,
  selectedShipping,
  setSelectedShipping,
  selectedShippingData,
  shippingMethods,
  SectionLabel,
  Card,
}) {
  return (
    <>
      <div
        className="mb-6 md:mb-8 "
        role="region"
        aria-label="Shipping method selection section"
      >
        <SectionLabel text="Shipping Method" />

        <Card>
          <button
            onClick={() => setShippingOpen(!shippingOpen)}
            aria-expanded={shippingOpen}
            aria-controls="shipping-method-list"
            type="button"
            aria-label="Toggle shipping method dropdown"
            className="flex items-center justify-between w-full  cursor-pointer group "
          >
            <span
              className={` font-[Tenor_Sans] font-normal text-[#555555] group-hover:text-[#DD8560] ${shippingOpen ? "text-[#DD8560]" : "text-[#555555]"} transition-colors duration-200 ease-in text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px] 3xl:text-[19px] tracking-wide`}
            >
              {selectedShippingData?.label || "Select shipping method"}
            </span>
            <div className="flex items-center gap-3">
              <span
                className={`font-[Tenor_Sans] font-normal text-[#555555] group-hover:text-[#DD8560] ${shippingOpen ? "text-[#DD8560]" : "text-[#555555]"} transition-colors duration-200 ease-in  text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px] 3xl:text-[19px] tracking-wide`}
              >
                {selectedShippingData?.price}
              </span>
              <svg
                className={`group-hover:text-[#DD8560]  ${shippingOpen ? "text-[#DD8560]" : "text-[#555555]"} transition-all duration-200 ${shippingOpen ? "rotate-180" : ""}`}
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
            </div>
          </button>

          <div
            id="shipping-method-list"
            className={`overflow-hidden  transition-all duration-300 ${shippingOpen ? "max-h-[200px] mt-4" : "max-h-0"}`}
            role="region"
            aria-label="Available shipping methods"
          >
            <div className="flex flex-col gap-0 border-t border-[#EEEEEE] pt-3 ">
              {shippingMethods.map((method, i) => (
                <button
                  key={method.id}
                  onClick={() => {
                    setSelectedShipping(method.id);
                    setShippingOpen(false);
                  }}
                  className={`flex cursor-pointer group/shipping items-center justify-between py-3 ${i !== shippingMethods.length - 1 ? "border-b border-[#EEEEEE]" : ""}`}
                  type="button"
                  role="radio"
                  aria-checked={selectedShipping === method.id}
                  aria-label={`Select shipping method ${method.label}`}
                >
                  <div className="flex items-center gap-3">
                    {selectedShipping === method.id ? (
                      <MdRadioButtonChecked className="text-black text-[18px]" />
                    ) : (
                      <MdRadioButtonUnchecked className="text-gray-400 text-[18px]" />
                    )}
                    <span className="font-[Tenor_Sans] font-normal text-[#555555] group-hover/shipping:text-[#DD8560] transition-colors duration-200 ease-in text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px] 3xl:text-[19px] tracking-wide">
                      {method.label}
                    </span>
                  </div>
                  <span className="font-[Tenor_Sans] font-normal text-[#555555] group-hover/shipping:text-[#DD8560] transition-colors duration-200 ease-in  text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px] 3xl:text-[19px] tracking-wide">
                    {method.price}
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

export default ShippingMethods;
