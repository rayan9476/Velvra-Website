import Icon from "./Icon";
import { icons } from "../../components/icons/AdminIcons";
function OrdersSearch({ search, setSearch }) {
  return (
    <>
      <div className="flex items-center gap-2 bg-white dark:bg-white/5 border border-gray-100 dark:border-[#1d2939] rounded-xl px-4 py-3 mb-5 md:mb-6">
        <span className="text-[#AAAAAA]">
          <Icon d={icons.search} size={20} />
        </span>
        <input
          type="text"
          placeholder="Search by order ID, customer name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="font-[Tenor_Sans] font-normal flex-1 bg-transparent dark:text-white text-[13px] md:text-[14px] placeholder-[#CCCCCC] outline-none tracking-wide"
        />
      </div>
    </>
  );
}

export default OrdersSearch;
