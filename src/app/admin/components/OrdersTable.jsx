import OrdersList from "./OrdersList";
import TableFooter from "./common/TableFooter";
import { ViewTableHeaders } from "../data/data";
import TableHeader from "./common/TableHeader";

function OrdersTable({
  filteredOrders,
  setSelectedOrder,
  updateStatus,
  orders,
  GetStatusStyle,
  statusCounts,
}) {
  const grid =
    "grid-cols-[minmax(160px,2fr)_minmax(120px,2fr)_1fr_1fr_1fr_1fr]";
  return (
    <>
      <div className="bg-white dark:bg-white/[0.03] rounded-xl border border-gray-100 dark:border-[#1d2939]  flex flex-col overflow-hidden">
        {/* Desktop Header */}

        <TableHeader grid={grid} tableHeaders={ViewTableHeaders} />

        {/* Orders List */}

        <OrdersList
          filteredOrders={filteredOrders}
          setSelectedOrder={setSelectedOrder}
          updateStatus={updateStatus}
        />

        {/* Footer */}

        <TableFooter
          filtered={filteredOrders}
          commonCounts={orders}
          GetStatusStyle={GetStatusStyle}
          statusCounts={statusCounts}
        />
      </div>
    </>
  );
}

export default OrdersTable;
