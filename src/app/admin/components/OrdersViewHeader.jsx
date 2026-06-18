function OrdersViewHeader({ orders }) {
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 md:mb-8">
        <div>
          <h1 className="font-[Tenor_Sans] font-normal text-[#98A2B3] text-[14px] md:text-[16px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[36px] tracking-wide mb-1">
            Orders
          </h1>
          <p className="font-[Tenor_Sans] font-normal text-[#888888] text-[13px] md:text-[14px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[17px] tracking-wide">
            {orders.length} total orders
          </p>
        </div>
      </div>
    </>
  );
}

export default OrdersViewHeader;
