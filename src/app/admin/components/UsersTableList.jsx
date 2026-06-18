"use client";
import OrderAvatar from "./OrderAvatar";
import GetStatusStyle from "./utils/styles/GetStatusStyle";
import GetRoleStyle from "./utils/styles/GetRoleStyle";
import { statusOptions, roleOptions } from "../data/data";
import StatusDropdown from "./StatusDropdown";
import TableNofound from "./common/TableNofound";

function UsersTableList({ filtered, setSelectedUser, updateUser }) {
  const grid =
    "grid-cols-[minmax(120px,2fr)_minmax(120px,2fr)_1fr_1fr_1fr_1fr_1fr]";
  return (
    <>
      <div className="divide-y divide-gray-100 dark:divide-[#1d2939] overflow-y-auto overflow-x-hidden">
        {filtered.length === 0 ? (
          <TableNofound message="No users found" />
        ) : (
          filtered.map((user) => (
            <div
              key={user.id}
              className="px-4 md:px-6 py-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-white/5 transition-colors duration-150 "
              onClick={() => setSelectedUser(user)}
            >
              {/* Mobile Layout */}
              <div className="flex md:hidden items-start gap-3">
                <OrderAvatar name={user.name} />
                <div className="flex-1 min-w-0">
                  <p className="font-[Tenor_Sans] font-normal text-[#111111] dark:text-white text-[13px] truncate mb-0.5">
                    {user.name}
                  </p>
                  <p className="font-[Tenor_Sans] font-normal text-[#888888] text-[11px] tracking-wide truncate mb-1">
                    {user.email}
                  </p>
                  <div className="flex items-center gap-2">
                    <span
                      className={`font-[Tenor_Sans] font-normal text-[10px] tracking-wide px-2 py-0.5 rounded-full ${GetRoleStyle(user.role)}`}
                    >
                      {user.role}
                    </span>
                    <span className="font-[Tenor_Sans] font-normal text-[#888888] text-[10px] tracking-wide">
                      {user.orders} orders · ${user.spent}
                    </span>
                  </div>
                </div>
                <div>
                  <StatusDropdown
                    status={user.status}
                    onChange={(val) => updateUser(user.id, "status", val)}
                    Options={statusOptions.slice(1)}
                    styleFunc={GetStatusStyle}
                  />
                </div>
              </div>

              {/* Desktop Layout */}
              <div className={`hidden  md:grid ${grid} gap-4 items-center`}>
                {/* User */}
                <div className="flex items-center gap-3 min-w-0 truncate">
                  <OrderAvatar name={user.name} />
                  <div className="min-w-0">
                    <p className="font-[Tenor_Sans] font-normal text-[#111111] dark:text-white text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[17px] truncate">
                      {user.name}
                    </p>
                    <p className="font-[Tenor_Sans] font-normal text-[#888888] text-[10px] md:text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[15px] truncate tracking-wide">
                      {user.email}
                    </p>
                  </div>
                </div>

                {/* Location */}
                <p className="min-w-0  font-[Tenor_Sans] font-normal text-[#888888] dark:text-gray-400 text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[17px] tracking-wide truncate">
                  {user.location}
                </p>

                {/* Role */}
                <div className="min-w-0 ">
                  <StatusDropdown
                    status={user.role}
                    onChange={(val) => updateUser(user.id, "role", val)}
                    Options={roleOptions.slice(1)}
                    styleFunc={GetRoleStyle}
                  />
                </div>

                {/* Status */}
                <div className="min-w-0">
                  <StatusDropdown
                    status={user.status}
                    onChange={(val) => updateUser(user.id, "status", val)}
                    Options={statusOptions.slice(1)}
                    styleFunc={GetStatusStyle}
                  />
                </div>

                {/* Orders */}
                <p className="min-w-0 truncate font-[Tenor_Sans] font-normal text-[#888888] dark:text-white text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[17px] tracking-wide">
                  {user.orders}
                </p>

                {/* Spent */}
                <p className="min-w-0 truncate font-[Tenor_Sans] font-normal text-[#C9A84C] text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[17px]">
                  ${user.spent}
                </p>

                {/* Joined */}
                <p className="min-w-0  font-[Tenor_Sans] font-normal text-[#888888] dark:text-gray-400 text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[17px] tracking-wide truncate">
                  {user.joined}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default UsersTableList;
