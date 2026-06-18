import { statusOptions } from "../data/data";
import Image from "next/image";
import { CloseModelIcon } from "../../components/icons/AdminIcons";
import GetPaymentLabel from "./utils/styles/GetPaymentLabel";
import GetStatusStyle from "./utils/styles/GetStatusStyle";
import OrderAvatar from "./OrderAvatar";

function OrderDetailModal({ order, onClose, onStatusChange }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
        onClick={onClose}
      />
      <div className="relative bg-white dark:bg-[#101828] rounded-2xl w-full max-w-[480px] md:max-w-[560px] z-10 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 dark:border-[#1d2939]">
          <div>
            <p className="font-[Tenor_Sans] font-normal text-[#111111] dark:text-white tracking-[3px] uppercase text-[13px] md:text-[14px]  lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[22px]">
              Order Details
            </p>
            <p className="font-[Tenor_Sans] font-normal text-[#C9A84C] text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[17px] tracking-wide mt-0.5">
              {order.id}
            </p>
          </div>

          <button
            onClick={onClose}
            className="absolute cursor-pointer right-3 top-3 z-999 flex h-9.5 w-9.5 items-center justify-center rounded-full bg-gray-100 text-gray-400 transition-colors hover:bg-gray-200 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white sm:right-6 sm:top-6 sm:h-11 sm:w-11"
          >
            <CloseModelIcon />
          </button>
        </div>

        <div className="p-6 md:p-7 max-h-[75vh] overflow-y-auto flex flex-col gap-5">
          {/* Customer */}
          <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-white/5 rounded-xl">
            <OrderAvatar
              name={order.customer.name}
              className="!w-14 !h-14 md:!w-16 md:!h-16 "
            />
            <div>
              <p className="font-[Tenor_Sans] font-normal text-[#111111] dark:text-white text-[13px] md:text-[14px]  lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[22px]">
                {order.customer.name}
              </p>
              <p className="font-[Tenor_Sans] font-normal text-[#888888] text-[11px] md:text-[12px]  lg:text-[13px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[16px] tracking-wide">
                {order.customer.email}
              </p>
            </div>
          </div>

          {/* Order Items */}
          <div>
            <p className="font-[Tenor_Sans] font-normal text-[#888888] text-[12px] md:text-[13px]  lg:text-[14px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[17px] tracking-[2px] uppercase mb-3">
              Items
            </p>
            <div className="flex flex-col gap-3">
              {order.items.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-[#F5F5F3]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-[Tenor_Sans] font-normal text-[#111111] dark:text-white text-[12px] md:text-[13px]  lg:text-[14px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[17px] truncate">
                      {item.name}
                    </p>
                    <p className="font-[Tenor_Sans] font-normal text-[#888888] text-[11px] md:text-[12px]  lg:text-[13px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[16px] tracking-wide">
                      Qty: {item.qty}
                    </p>
                  </div>
                  <p className="font-[Tenor_Sans] font-normal text-[#C9A84C] text-[12px] md:text-[13px]  lg:text-[14px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[17px] flex-shrink-0">
                    ${item.price * item.qty}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="h-[1px] bg-gray-100 dark:bg-white/10" />

          {/* Summary */}
          <div className="flex flex-col gap-2">
            {[
              {
                label: "Payment Method",
                value: GetPaymentLabel(order.payment),
              },
              { label: "Order Date", value: order.date },
              { label: "Total Amount", value: `$${order.total}`, gold: true },
            ].map((row) => (
              <div
                key={row.label}
                className="flex items-center justify-between"
              >
                <p className="font-[Tenor_Sans] font-normal text-[#888888] text-[12px] md:text-[13px]  lg:text-[14px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[17px] tracking-wide">
                  {row.label}
                </p>
                <p
                  className={`font-[Tenor_Sans] font-normal text-[12px] md:text-[13px]  lg:text-[14px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[17px] ${row.gold ? "text-[#C9A84C]" : "text-[#111111] dark:text-white"}`}
                >
                  {row.value}
                </p>
              </div>
            ))}
          </div>

          {/* Update Status */}
          <div>
            <p className="font-[Tenor_Sans] font-normal text-[#888888] text-[11px] md:text-[12px]  lg:text-[13px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[16px] tracking-[2px] uppercase mb-3">
              Update Status
            </p>
            <div className="flex flex-wrap gap-2">
              {statusOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => onStatusChange(order.id, opt)}
                  className={`font-[Tenor_Sans] cursor-pointer font-normal text-[11px] md:text-[12px]  lg:text-[13px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[16px] tracking-wide px-3 py-1.5 rounded-full border transition-all ${
                    order.status === opt
                      ? `${GetStatusStyle(opt)} border-transparent`
                      : "border-gray-200 dark:border-white/10 text-[#888888] hover:border-[#C9A84C] hover:text-[#C9A84C]"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetailModal;
