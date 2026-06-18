"use client";
import * as React from "react";
import { BellIcon } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function NotificationDropdown() {
  const [hasNewNotification, setHasNewNotification] = useState(true);
  const router = useRouter();

  const Notifications = [
    {
      id: 1,
      title: "New order received",
      time: "2 min ago",
    },
    {
      id: 2,
      title: "Payment successful",
      time: "10 min ago",
    },
    {
      id: 3,
      title: "New message arrived",
      time: "1 hour ago",
    },
  ];

  return (
    <DropdownMenu
      onOpenChange={(open) => {
        if (open) {
          setHasNewNotification(false);
        }
      }}
    >
      <DropdownMenuTrigger asChild>
        <Button
          variant="none"
          size="icon"
          className="relative cursor-pointer  dropdown-toggle flex items-center justify-center text-gray-500 transition-colors bg-white border border-gray-200 rounded-full hover:text-gray-700 h-11 w-11 hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white  ring-0
     outline-none
    ring-0
    focus:outline-none
    focus:ring-0
    focus-visible:outline-none
    focus-visible:ring-0
    focus-visible:ring-offset-0"
        >
          <BellIcon className="w-5 h-5" />
          {hasNewNotification && (
            <span className="absolute right-0 top-0.5 z-10 h-2 w-2 rounded-full bg-orange-400 flex">
              <span className="absolute inline-flex w-full h-full bg-orange-400 rounded-full opacity-75 animate-ping"></span>
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-60 xl:w-80 dark:bg-[#1a2231] bg-[#FFFFFF] text-gray-700"
      >
        <DropdownMenuLabel
          className={
            "text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[22px] dark:text-white"
          }
        >
          Notifications
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        {Notifications.map((item) => (
          <DropdownMenuItem
            key={item.id}
            className="py-3 cursor-pointer group dark:hover:bg-white/5 hover:bg-white/2"
          >
            <div className="flex flex-col gap-1">
              <span className="text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[20px] font-normal dark:text-white text-gray-400 ">
                {item.title}
              </span>

              <span className="text-[10px] md:text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[15px]   text-[#C9A84C]  ">
                {item.time}
              </span>
            </div>
          </DropdownMenuItem>
        ))}

        <DropdownMenuSeparator />

        <DropdownMenuItem
          className="text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[20px]   justify-center cursor-pointer font-medium dark:hover:bg-white/5 hover:bg-gray-500 dark:text-white text-gray-700"
          onClick={() => router.push("?tab=allnotifications")}
        >
          See all notifications
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
