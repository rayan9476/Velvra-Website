import { ModeToggle } from "../../components/ui/ModeToggle";
import { NotificationDropdown } from "../../components/ui/NotificationDropdown";
import { ProfileDropdown } from "../../components/ui/ProfileDropdown";
import { HumburgerIcon } from "../../components/icons/AdminIcons";

function Header({ setSidebarOpen, activeNav }) {
  return (
    <>
      <header className="dark:bg-[#101828] bg-white border-b-[1px] border-gray-200 dark:border-[#1d2939] px-4 md:px-6 lg:px-8 py-4 flex items-center justify-between sticky top-0 z-20">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSidebarOpen((prev) => !prev)}
            className="items-center  cursor-pointer justify-center w-10 h-10 text-gray-500 border-gray-200 rounded-lg z-99999 dark:border-gray-800 lg:hidden dark:text-gray-400 lg:h-11 lg:w-11 lg:border"
            aria-label="Toggle Sidebar"
          >
            <HumburgerIcon />
          </button>

          <h2 className="font-[Tenor_Sans] -ml-[1.5rem] lg:ml-0 font-normal text-[#C9A84C]  tracking-[3px] uppercase text-[13px] md:text-[14px] lg:text-[15px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[32px] capitalize">
            {activeNav}
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 2xsm:gap-3">
            <ModeToggle />

            <div className="relative">
              <NotificationDropdown />
            </div>
          </div>

          <div className="relative cursor-pointer  dropdown-toggle flex items-center justify-center text-gray-500 transition-colors bg-white border border-gray-200 rounded-full hover:text-gray-700 h-11 w-11 hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white">
            <ProfileDropdown />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
