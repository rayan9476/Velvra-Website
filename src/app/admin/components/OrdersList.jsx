import OrderAvatar from "./OrderAvatar";
import StatusDropdown from "./StatusDropdown";
import GetPaymentLabel from "./utils/styles/GetPaymentLabel";
import { statusOptions } from "../data/data";
import GetStatusStyle from "./utils/styles/GetStatusStyle";
import TableNofound from "./common/TableNofound";
function OrdersList({ filteredOrders, setSelectedOrder, updateStatus }) {
  return (
    <>
      <div className="divide-y divide-gray-100 dark:divide-[#1d2939] flex-1 min-h-0 overflow-y-auto overflow-x-hidden custom-scrollbar   ">
        {filteredOrders.length === 0 ? (
          // <div className="py-16 text-center">
          //   <p className="font-[Tenor_Sans] font-normal text-[#AAAAAA] text-[14px] md:text-[16px] tracking-wide">
          //     No orders found
          //   </p>
          // </div>
          <TableNofound message="No orders found" />
        ) : (
          filteredOrders.map((order) => (
            <div
              key={order.id}
              onClick={() => setSelectedOrder(order)}
              className="px-4 md:px-6 py-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-white/5 transition-colors duration-150 "
            >
              {/* Mobile Layout */}
              <div className="flex md:hidden items-start gap-3">
                <OrderAvatar name={order.customer.name} />
                <div className="flex-1 min-w-0">
                  <p className="font-[Tenor_Sans] font-normal text-[#C9A84C] text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[22px] tracking-wide truncate mb-0.5">
                    {order.id}
                  </p>
                  <p className="font-[Tenor_Sans] font-normal text-[#111111] dark:text-white  text-[13px] md:text-[14px]  lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[22px] truncate mb-0.5">
                    {order.customer.name}
                  </p>
                  <p className="font-[Tenor_Sans] font-normal text-[#888888]  text-[13px] md:text-[14px]  lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[22px] tracking-wide">
                    {order.items.length} item
                    {order.items.length > 1 ? "s" : ""} · ${order.total} ·{" "}
                    {order.date}
                  </p>
                </div>
                <div onClick={(e) => e.stopPropagation()}>
                  <StatusDropdown
                    status={order.status}
                    onChange={(s) => updateStatus(order.id, s)}
                    Options={statusOptions}
                    styleFunc={GetStatusStyle}
                  />
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden md:grid grid-cols-[minmax(160px,2fr)_minmax(120px,2fr)_1fr_1fr_1fr_1fr] gap-4 items-center">
                {/* Order ID */}
                <p className="font-[Tenor_Sans] min-w-0 truncate font-normal text-[#C9A84C] text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[17px] tracking-wide truncate">
                  {order.id}
                </p>

                {/* Customer */}
                <div className="flex items-center gap-2 min-w-0">
                  <OrderAvatar name={order.customer.name} />
                  <div className="min-w-0  truncate">
                    <p className="font-[Tenor_Sans] font-normal text-[#111111] dark:text-white text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[17px] truncate">
                      {order.customer.name}
                    </p>
                    <p className="font-[Tenor_Sans] font-normal text-[#888888] text-[10px] md:text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[15px] truncate tracking-wide">
                      {order.customer.email}
                    </p>
                  </div>
                </div>

                {/* Items */}
                <p className="font-[Tenor_Sans] min-w-0 truncate font-normal text-[#888888] dark:text-white text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[16px] tracking-wide">
                  {order.items.length} item{order.items.length > 1 ? "s" : ""}
                </p>

                {/* Total */}
                <p className="font-[Tenor_Sans] min-w-0 truncate font-normal text-[#C9A84C] text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[17px]">
                  ${order.total}
                </p>

                {/* Payment */}
                <p className="font-[Tenor_Sans] min-w-0 truncate font-normal text-[#888888] dark:text-white text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[16px] tracking-wide truncate">
                  {GetPaymentLabel(order.payment)}
                </p>

                {/* Status Dropdown */}
                <div className="min-w-0 ">
                  <StatusDropdown
                    status={order.status}
                    onChange={(s) => updateStatus(order.id, s)}
                    Options={statusOptions}
                    styleFunc={GetStatusStyle}
                  />
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default OrdersList;
