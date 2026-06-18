"use client";

import {
  CircleHelpIcon,
  LogOutIcon,
  SettingsIcon,
  UserPenIcon,
} from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ProfileDropdown() {
  const profileMenuItems = [
    {
      id: 1,
      label: "Edit Profile",
      icon: UserPenIcon,
    },
    {
      id: 2,
      label: "Account Settings",
      icon: SettingsIcon,
    },
    {
      id: 3,
      label: "Support",
      icon: CircleHelpIcon,
    },
  ];

  const router = useRouter();
  const searchParams = useSearchParams();

  const admin = {
    name: "Rayyan Khan",
    image: "",
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="none"
          size="icon"
          className="relative cursor-pointer  dropdown-toggle flex items-center justify-center   border border-gray-200 rounded-full  h-11 w-11  dark:border-gray-800     
     outline-none
    ring-0
    focus:outline-none
    focus:ring-0
    focus-visible:outline-none
    focus-visible:ring-0
    focus-visible:ring-offset-0"
        >
          <Avatar className={"h-full w-full bg-white dark:bg-gray-900"}>
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
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-60 xl:w-76 dark:bg-[#1a2231]"
      >
        <div className="px-3 py-3 ">
          <h4
            className=" font-medium          text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[22px] dark:text-white text-gray-700
"
          >
            Rayyan
          </h4>

          <p className=" text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[20px] dark:text-gray-400  text-gray-500">
            rayyan@gmail.com
          </p>
        </div>

        <DropdownMenuGroup className="border-b dark:border-[#1d2939] border-gray-200">
          {profileMenuItems.map((item) => {
            const Icon = item.icon;

            return (
              <DropdownMenuItem
                key={item.id}
                onClick={() => router.push(`?tab=profile`)}
                className="cursor-pointer   dark:hover:bg-white/5 py-2 md:py-3 xl:py-4 2xl:py-5 3xl:py-6  "
              >
                <Icon className="mr-2 !h-4 !w-4 md:!h-5 md:!w-5     xl:!h-6 xl:!w-6 2xl:!h-7 2xl:!w-7  shrink-0 dark:text-white text-gray-700 " />

                <span className="font-semibold text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[17px] dark:text-white text-gray-700">
                  {item.label}
                </span>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuGroup>

        <DropdownMenuItem
          onClick={() => router.push("/admin/signin")}
          className={
            "    cursor-pointer font-semibold   dark:text-white text-[#344054] dark:hover:bg-white/5 py-2 md:py-3 xl:py-4 2xl:py-5 3xl:py-6   text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[17px]"
          }
        >
          <LogOutIcon className=" mr-2 !h-4 !w-4 md:!h-5 md:!w-5     xl:!h-6 xl:!w-6 shrink-0  " />
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
