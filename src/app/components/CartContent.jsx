import Image from "next/image";
import {
  RemoveItemIcon,
  IncreaseQtyIcon,
  DecreaseQtyIcon,
} from "./icons/CartContentIcons";

function CartContent({
  isEmpty,
  items,
  removeItem,
  updateQty,
  emptyText = "Your cart is empty.",
  className = "overflow-y-auto ",
}) {
  return (
    <>
      <div className={` ${className}  flex-1 `}>
        {isEmpty ? (
          <div className="flex flex-col items-center justify-center h-full px-2.5 md:px-4 lg:px-5">
            <p className="text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[24px] text-[#888888] tracking-wide text-center">
              {emptyText}
            </p>
          </div>
        ) : (
          <ul className="flex flex-col divide-y divide-[#e8e8e8] px-2.5 md:px-4 lg:px-5">
            {items.map((item) => (
              <li key={item.id} className="py-5 md:py-6 flex gap-4">
                <figure className="relative shrink-0 w-[90px] h-[110px] md:w-[135px] md:h-[180px] lg:w-[160px] lg:h-[230px]  xl:w-[170px] xl:h-[250px] 2xl:w-[190px] 2xl:h-[270px] 3xl:w-[220px] 3xl:h-[300px] bg-[#F5F3F0]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover object-top"
                  />
                </figure>

                <div className="flex flex-col justify-between flex-1 min-w-0">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-[16px]  md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[28px]  tracking-[1.5px] uppercase text-[#000000]">
                        {item.brand}
                      </span>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        aria-label="Remove item"
                        className="shrink-0 text-[#555555] hover:text-[#DD8560] transition-colors duration-200 mt-0.5 cursor-pointer"
                      >
                        <RemoveItemIcon />
                      </button>
                    </div>

                    <p className="text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[22px] text-[#555555] tracking-wide mt-1 leading-snug">
                      {item.name}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => updateQty(item.id, -1)}
                        aria-label="Decrease quantity"
                        className="w-5 h-5 flex items-center justify-center text-[#333333] cursor-pointer
                               hover:text-[#DD8560] transition-colors duration-200"
                      >
                        <DecreaseQtyIcon />
                      </button>

                      <span className="text-[13px] md:text-[14px] text-[#0A0A0A] w-4 text-center">
                        {item.qty}
                      </span>

                      <button
                        type="button"
                        onClick={() => updateQty(item.id, 1)}
                        aria-label="Increase quantity"
                        className="w-5 h-5 flex items-center justify-center text-[#333333]
                               hover:text-[#DD8560] transition-colors duration-200 cursor-pointer"
                      >
                        <IncreaseQtyIcon />
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
