import Icon from "./Icon";
import { icons } from "../../components/icons/AdminIcons";
import { useEffect, useState } from "react";

function AllNotifications() {
  const notifications = [
    {
      id: 1,
      title: "New order received",
      description: "Order #1024 placed successfully",
      time: "2 min ago",
    },
    {
      id: 2,
      title: "Payment successful",
      description: "Payment completed by customer",
      time: "10 min ago",
    },
  ];

  const [deletedNotifications, setDeletedNotifications] = useState([]);
  const [FilterNotifications, setFilterNotifications] = useState(notifications);

  useEffect(() => {
    const filtered = notifications.filter(
      (notification) => !deletedNotifications.includes(notification.id),
    );

    setFilterNotifications(filtered);
  }, [deletedNotifications]);

  return (
    <div className="space-y-4">
      <h1 className="font-[Tenor_Sans] font-normal text-[#98A2B3] text-[14px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[32px]  tracking-wide">
        All Notifications
      </h1>

      {FilterNotifications.length === 0 ? (
        <div className="py-16 text-center">
          <p className="font-[Tenor_Sans] font-normal text-[#AAAAAA] text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[24px] tracking-wide">
            No notifications found
          </p>
        </div>
      ) : (
        FilterNotifications.map((item) => (
          <div
            key={item.id}
            className="relative rounded-xl border p-4 dark:bg-white/[0.03] bg-white"
          >
            <h2 className="text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[20px] font-semibold dark:text-white text-gray-500">
              {item.title}
            </h2>
            <p className="text-[10px] md:text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[15px]   text-gray-400">
              {item.description}
            </p>
            <span className="text-[10px] md:text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[15px]   text-[#C9A84C]  ">
              {item.time}
            </span>

            <button
              onClick={() =>
                setDeletedNotifications([...deletedNotifications, item.id])
              }
              className="absolute right-2 top-4 w-8 h-8 rounded-lg dark:bg-[#1D2931] bg-gray-200 border-[1px] dark:border-[#1d2939] cursor-pointer hover:bg-red-50 text-[#888888] hover:text-red-400 transition-all flex items-center justify-center"
            >
              <Icon d={icons.trash} size={18} />
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default AllNotifications;
