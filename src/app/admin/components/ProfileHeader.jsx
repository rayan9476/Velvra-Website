import { Avatar, AvatarImage, AvatarFallback } from "@/Components/ui/avatar";
import { socialLinks } from "../data/data";

function ProfileHeader({ admin, adminProfile, setshowProfileEditModel }) {
  return (
    <>
      <div className="p-5 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex flex-col items-center w-full gap-6 xl:flex-row">
            <div className="w-20 h-20 overflow-hidden border border-gray-200 rounded-full dark:border-gray-800">
              <Avatar className="w-20 h-20 border border-gray-200 dark:border-gray-800">
                <AvatarImage
                  src={admin?.image || ""}
                  alt={admin?.name || "Admin"}
                />

                <AvatarFallback>
                  {admin?.name
                    ? admin.name
                        .split(" ")
                        .map((word) => word[0])
                        .join("")
                        .slice(0, 2)
                        .toUpperCase()
                    : "AD"}
                </AvatarFallback>
              </Avatar>
            </div>

            <div className="order-3 xl:order-2">
              <h4 className="mb-2 text-lg 3xl:text-2xl  font-semibold text-center text-gray-800 dark:text-white/90 xl:text-left">
                {adminProfile.firstName}
              </h4>

              <div className="flex flex-col items-center gap-1 text-center xl:flex-row xl:gap-3 xl:text-left">
                <p className="text-sm 2xl:text-[16px] 3xl:text-[18px] text-gray-500 dark:text-gray-400">
                  {adminProfile.role}
                </p>
                <div className="hidden h-3.5 w-px bg-gray-300 dark:bg-gray-700 xl:block"></div>
                <p className="text-sm 2xl:text-[16px] 3xl:text-[18px] text-gray-500 dark:text-gray-400">
                  {adminProfile.city}
                </p>
              </div>
            </div>

            <div className="flex items-center order-2 gap-2 grow xl:order-3 xl:justify-end">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 w-11 items-center justify-center gap-2 rounded-full border border-gray-300 bg-white text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          <button
            onClick={() => setshowProfileEditModel(true)}
            className="flex cursor-pointer w-full items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-3 text-sm 2xl:text-[16px] 3xl:text-[18px] font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200 lg:inline-flex lg:w-auto"
          >
            Edit
          </button>
        </div>
      </div>
    </>
  );
}

export default ProfileHeader;
