import { useState } from "react";
import OrderAvatar from "./OrderAvatar";
import { CloseModelIcon } from "../../components/icons/AdminIcons";
import { roleOptions, statusOptionsUser } from "../data/data";
import GetStatusStyle from "./utils/styles/GetStatusStyle";
import GetRoleStyle from "./utils/styles/GetRoleStyle";

function UserDetailModal({ user, onClose, onUpdate, onDelete }) {
  const [confirmDelete, setConfirmDelete] = useState(false);

  return (
    <div className="fixed w-full inset-0 z-50 flex items-center justify-center px-4">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
        onClick={onClose}
      />
      <div className="relative bg-white dark:bg-[#101828] rounded-2xl w-full max-w-[460px] md:max-w-[520px] z-10 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className=" flex items-center justify-between px-6 py-5 border-b border-gray-100 dark:border-[#1d2939]">
          <p className="font-[Tenor_Sans] font-normal text-[#111111] dark:text-white tracking-[3px] uppercase text-[13px] md:text-[14px]  lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[22px]">
            User Details
          </p>

          <button
            onClick={onClose}
            className="cursor-pointer  z-999 flex h-9.5 w-9.5 items-center justify-center rounded-full bg-gray-100 text-gray-400 transition-colors hover:bg-gray-200 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white sm:right-6 sm:top-6 sm:h-11 sm:w-11"
          >
            <CloseModelIcon />
          </button>
        </div>

        <div className="p-6 md:p-7 max-h-[75vh] overflow-y-auto custom-scrollbar flex flex-col gap-5">
          {/* Profile */}
          <div className="flex items-center gap-4">
            <OrderAvatar
              name={user.name}
              className="!w-14 !h-14 md:!w-16 md:!h-16 "
            />
            <div>
              <p className="font-[Tenor_Sans] font-normal text-[#111111] dark:text-white text-[13px] md:text-[14px]  lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[22px] mb-1">
                {user.name}
              </p>
              <p className="font-[Tenor_Sans] font-normal text-[#888888] text-[11px] md:text-[12px]  lg:text-[13px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[16px] tracking-wide mb-2">
                {user.email}
              </p>

              <div className="flex items-center gap-2">
                <span
                  className={`font-[Tenor_Sans] font-normal text-[11px] md:text-[12px]  lg:text-[13px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[16px]  tracking-wide px-2.5 py-1 rounded-full ${GetRoleStyle(user.role)}`}
                >
                  {user.role}
                </span>
                <span
                  className={`font-[Tenor_Sans] font-normal text-[11px] md:text-[12px]  lg:text-[13px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[16px]  tracking-wide px-2.5 py-1 rounded-full ${GetStatusStyle(user.status)}`}
                >
                  {user.status}
                </span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-[1px] bg-gray-100 dark:bg-white/10" />

          {/* Info Grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Phone", value: user.phone },
              { label: "Location", value: user.location },
              { label: "Joined", value: user.joined },
              { label: "Total Orders", value: user.orders },
              { label: "Total Spent", value: `$${user.spent}`, gold: true },
              {
                label: "User ID",
                value: `#${String(user.id).padStart(4, "0")}`,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-gray-50 dark:bg-white/5 rounded-xl p-3 md:p-4"
              >
                <p className="font-[Tenor_Sans] font-normal text-[#888888] text-[10px] md:text-[11px]  lg:text-[12px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[15px]  tracking-[2px] uppercase mb-1">
                  {item.label}
                </p>
                <p
                  className={`font-[Tenor_Sans] font-normal text-[13px] md:text-[14px]  lg:text-[15px] xl:text-[16px] 2xl:text-[17px] 3xl:text-[18px] ${item.gold ? "text-[#C9A84C]" : "text-[#111111] dark:text-white"}`}
                >
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="h-[1px] bg-gray-100 dark:bg-white/10" />

          {/* Update Role & Status */}
          <div className="flex flex-col gap-4">
            <div>
              <p className="font-[Tenor_Sans] font-normal text-[#888888] text-[12px] md:text-[13px]  lg:text-[14px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[17px] tracking-[2px] uppercase mb-3">
                Update Role
              </p>
              <div className="flex gap-2">
                {roleOptions.slice(1).map((opt) => (
                  <button
                    key={opt}
                    onClick={() => onUpdate(user.id, "role", opt)}
                    className={`font-[Tenor_Sans] cursor-pointer font-normal text-[11px] md:text-[12px]  lg:text-[13px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[16px]  tracking-wide px-3 py-1.5 rounded-full border transition-all ${
                      user.role === opt
                        ? `${GetRoleStyle(opt)} border-transparent`
                        : "border-gray-200 dark:border-white/10 text-[#888888] hover:border-[#C9A84C] hover:text-[#C9A84C]"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="font-[Tenor_Sans] font-normal text-[#888888] text-[12px] md:text-[13px]  lg:text-[14px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[17px] tracking-[2px] uppercase mb-3">
                Update Status
              </p>
              <div className="flex gap-2">
                {statusOptionsUser.slice(1).map((opt) => (
                  <button
                    key={opt}
                    onClick={() => onUpdate(user.id, "status", opt)}
                    className={`font-[Tenor_Sans] cursor-pointer font-normal text-[11px] md:text-[12px]  lg:text-[13px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[16px]  tracking-wide px-3 py-1.5 rounded-full border transition-all ${
                      user.status === opt
                        ? `${GetStatusStyle(opt)} border-transparent`
                        : "border-gray-200 dark:border-white/10 text-[#888888] hover:border-[#C9A84C] hover:text-[#C9A84C]"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-[1px] bg-gray-100 dark:bg-white/10" />

          {/* Delete */}
          {!confirmDelete ? (
            <button
              onClick={() => setConfirmDelete(true)}
              className="w-full cursor-pointer border border-red-200 dark:border-red-900/40 text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 font-[Tenor_Sans] font-normal text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[17px] tracking-[3px] uppercase py-3 rounded-xl transition-all duration-200"
            >
              Delete User
            </button>
          ) : (
            <div className="bg-red-50 dark:bg-red-900/10 rounded-xl p-4 flex flex-col gap-3">
              <p className="font-[Tenor_Sans] font-normal text-[#111111] dark:text-white text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px]  text-center">
                Delete "{user.name}"? This cannot be undone.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    onDelete(user.id);
                    onClose();
                  }}
                  className="flex-1 cursor-pointer bg-red-500 hover:bg-red-600 text-white font-[Tenor_Sans] font-normal text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[16px]  tracking-[3px] uppercase py-3 rounded-xl transition-colors"
                >
                  Confirm
                </button>
                <button
                  onClick={() => setConfirmDelete(false)}
                  className="flex-1 cursor-pointer border border-gray-200 dark:border-white/10 text-[#888888] hover:border-[#C9A84C] dark:hover:border-[#C9A84C] font-[Tenor_Sans] font-normal text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[16px]  tracking-[3px] uppercase py-3 rounded-xl transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserDetailModal;
