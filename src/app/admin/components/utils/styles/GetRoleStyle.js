function GetRoleStyle(role) {
  return role === "admin"
    ? "text-[#C9A84C] bg-[#FDF8F0] dark:bg-[#C9A84C]/10"
    : "text-[#888888] bg-gray-50 dark:bg-white/5 dark:text-gray-400";
}

export default GetRoleStyle;
