"use client";

import UsersTableList from "./UsersTableList";
import { UsersTableHeaders } from "../data/data";
import TableHeader from "./common/TableHeader";
import TableFooter from "./common/TableFooter";
function UserTable({ filtered, users, setSelectedUser, updateUser }) {
  const grid =
    "grid-cols-[minmax(120px,2fr)_minmax(120px,2fr)_1fr_1fr_1fr_1fr_1fr]";
  return (
    <>
      <div className="bg-white dark:bg-white/[0.03] rounded-xl border border-gray-100 dark:border-[#1d2939] overflow-hidden">
        {/* Desktop Header */}

        <TableHeader grid={grid} tableHeaders={UsersTableHeaders} />

        {/* Users List */}

        <UsersTableList
          filtered={filtered}
          setSelectedUser={setSelectedUser}
          updateUser={updateUser}
        />

        {/* Footer */}
        {/* <div className="px-6 py-4 border-t border-gray-100 dark:border-[#1d2939] bg-gray-50 dark:bg-white/5 flex items-center justify-between">
          <p className="font-[Tenor_Sans] font-normal text-[#888888] text-[13px] md:text-[14px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[17px]  tracking-wide">
            Showing {filtered.length} of {users.length} users
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 xl:w-3 xl:h-3 rounded-full bg-[#C9A84C]" />
              <span className="font-[Tenor_Sans] font-normal text-[#888888] text-[13px] md:text-[14px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[17px]  tracking-wide">
                {users.filter((u) => u.role === "admin").length} admin
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 xl:w-3 xl:h-3 rounded-full bg-gray-400" />
              <span className="font-[Tenor_Sans] font-normal text-[#888888] text-[13px] md:text-[14px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[17px]  tracking-wide">
                {users.filter((u) => u.role === "user").length} users
              </span>
            </div>
          </div>
        </div> */}

        <TableFooter filtered={filtered} commonCounts={users} isTrue={true} />
      </div>
    </>
  );
}

export default UserTable;
