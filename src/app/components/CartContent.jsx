import Image from "next/image";


function CartContent({ isEmpty, items, removeItem, updateQty }) {
  return (
    <>
      <div className="flex-1 overflow-y-auto ">
        {isEmpty ? (
          <div className="flex items-center justify-center h-full px-2.5 md:px-4 lg:px-5">
            <p className="text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[24px] text-[#888888] tracking-wide text-center">
              You have no items in your Shopping Bag.
            </p>
          </div>
        ) : (
          <ul className="flex flex-col divide-y divide-[#e8e8e8] px-2.5 md:px-4 lg:px-5">
            {items.map((item) => (
              <li key={item.id} className="py-5 md:py-6 flex gap-4">
                <div className="relative shrink-0 w-[90px] h-[110px] md:w-[135px] md:h-[180px] lg:w-[160px] lg:h-[230px]  xl:w-[170px] xl:h-[250px] 2xl:w-[190px] 2xl:h-[270px] 3xl:w-[220px] 3xl:h-[300px] bg-[#F5F3F0]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>

                <div className="flex flex-col justify-between flex-1 min-w-0">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-[16px]  md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[28px]  tracking-[1.5px] uppercase text-[#000000]">
                        {item.brand}
                      </span>
                      <button
                        onClick={() => removeItem(item.id)}
                        aria-label="Remove item"
                        className="shrink-0 text-[#555555] hover:text-[#DD8560] transition-colors duration-200 mt-0.5 cursor-pointer"
                      >
                        <svg
                          className="md:w-[24px] md:h-[24px] lg:w-[26px] lg:h-[26px]   xl:w-[28px] xl:h-[28px] 2xl:w-[30px] 2xl:h-[30px] 3xl:w-[34px] 3xl:h-[34px] "
                          width="18"
                          height="18"
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
                    </div>

                    <p className="text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[22px] text-[#555555] tracking-wide mt-1 leading-snug">
                      {item.name}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQty(item.id, -1)}
                        aria-label="Decrease quantity"
                        className="w-5 h-5 flex items-center justify-center text-[#333333] cursor-pointer
                               hover:text-[#DD8560] transition-colors duration-200"
                      >
                        <svg
                          width="12"
                          height="2"
                          viewBox="0 0 12 2"
                          fill="none"
                        >
                          <line
                            x1="0"
                            y1="1"
                            x2="12"
                            y2="1"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </button>

                      <span className="text-[13px] md:text-[14px] text-[#0A0A0A] w-4 text-center">
                        {item.qty}
                      </span>

                      <button
                        onClick={() => updateQty(item.id, 1)}
                        aria-label="Increase quantity"
                        className="w-5 h-5 flex items-center justify-center text-[#333333]
                               hover:text-[#DD8560] transition-colors duration-200 cursor-pointer"
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                        >
                          <line
                            x1="6"
                            y1="0"
                            x2="6"
                            y2="12"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                          <line
                            x1="0"
                            y1="6"
                            x2="12"
                            y2="6"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </button>
                    </div>

                    <span className="text-[14px]  md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[24px] text-[#DD8560] tracking-wide">
                      ${item.price * item.qty}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default CartContent;
