import { useRouter } from "next/navigation";
import Icon from "./Icon";
import { icons } from "../../components/icons/AdminIcons";
import { navItems } from "../data/data";

function SideBar({ sidebarOpen, setSidebarOpen, activeNav }) {
  const router = useRouter();

  return (
    <>
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed lg:relative  top-0 left-0 min-h-full bg-white dark:bg-[#101828] border-r-[1px] border-gray-200  dark:border-[#1d2939] z-40 flex flex-col transition-transform duration-300 ease-in-out w-[240px] md:w-[260px] xl:w-[280px] ${sidebarOpen ? "translate-x-0 " : "-translate-x-full "} lg:translate-x-0
           `}
      >
        {/* Logo */}
        <div className="px-6 py-4 ">
          <p className="font-[Tenor_Sans] font-normal text-[#C9A84C] tracking-[6px] uppercase text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[32px] ">
            Velvra
          </p>
          <p className="font-[Tenor_Sans] font-normal dark:text-white/40 text-[10px] lg:text-[11px] xl:text-[12px] tracking-[3px] uppercase mt-1">
            Admin Panel
          </p>
        </div>

        <h2 className="font-[Tenor_Sans]  px-6 py-4 text-[10px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[16px] uppercase flex leading-[20px] dark:text-[#e4e7ec] text-black justify-start">
          Menu
        </h2>

        {/* Nav */}
        <nav className="flex-1 px-4  flex flex-col gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                router.push(`?tab=${item.id}`);
                setSidebarOpen(false);
              }}
              className={`flex items-center cursor-pointer gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                activeNav === item.id
                  ? "bg-[#C9A84C] text-[#111111]"
                  : "text-[#C9A84C] dark:hover:text-white hover:text-black  dark:hover:bg-white/5 hover:bg-[#C9A84C]"
              }`}
            >
              <Icon d={item.icon} size={18} />
              <span className="font-[Tenor_Sans] font-normal text-[13px] md:text-[14px] tracking-wide">
                {item.label}
              </span>
            </button>
          ))}
        </nav>

        {/* Logout */}
        <div className="px-4 pb-6 border-t border-gray-200  dark:border-[#1d2939] pt-4">
          <button className="flex items-center gap-3 px-4 py-3 dark:text-white/40 text-black hover:text-[#C9A84C] cursor-pointer dark:hover:text-white transition-colors duration-200 w-full">
            <Icon d={icons.logout} size={22} />
            <span className="font-[Tenor_Sans] font-normal text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[22px] tracking-wide">
              Logout
            </span>
          </button>
        </div>
      </aside>
    </>
  );
}

export default SideBar;
