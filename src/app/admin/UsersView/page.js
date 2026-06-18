"use client";
import { useState } from "react";
import UserDetailModal from "../components/UserDetailModal";
import FilterAndSearch from "../components/FilterAndSearch";
import { statusOptions, roleOptions } from "../data/data";
import UserTable from "../components/UserTable";

// ─── Mock Data ─────────────────────────────────────────────
const initialUsers = [
  {
    id: 1,
    name: "Iris Watson",
    email: "iris@gmail.com",
    phone: "+1 786 713 8616",
    role: "user",
    status: "Active",
    orders: 8,
    spent: 1240,
    joined: "Jan 12, 2026",
    location: "New York, USA",
  },
  {
    id: 2,
    name: "Rayyan Khan",
    email: "rayyan@gmail.com",
    phone: "+92 300 000 0000",
    role: "admin",
    status: "Active",
    orders: 3,
    spent: 680,
    joined: "Feb 5, 2026",
    location: "Karachi, PK",
  },
  {
    id: 3,
    name: "Sarah Ahmed",
    email: "sarah@gmail.com",
    phone: "+92 321 111 2222",
    role: "user",
    status: "Active",
    orders: 12,
    spent: 3450,
    joined: "Dec 20, 2025",
    location: "Lahore, PK",
  },
  {
    id: 4,
    name: "Ali Hassan",
    email: "ali@gmail.com",
    phone: "+92 333 444 5555",
    role: "user",
    status: "Inactive",
    orders: 1,
    spent: 245,
    joined: "Mar 1, 2026",
    location: "Islamabad, PK",
  },
  {
    id: 5,
    name: "Zara Malik",
    email: "zara@gmail.com",
    phone: "+44 7911 123456",
    role: "user",
    status: "Active",
    orders: 15,
    spent: 4200,
    joined: "Nov 10, 2025",
    location: "London, UK",
  },
  {
    id: 6,
    name: "Fatima Noor",
    email: "fatima@gmail.com",
    phone: "+92 312 987 6543",
    role: "user",
    status: "Banned",
    orders: 0,
    spent: 0,
    joined: "Mar 15, 2026",
    location: "Karachi, PK",
  },
  {
    id: 7,
    name: "Omar Sheikh",
    email: "omar@gmail.com",
    phone: "+971 50 123 4567",
    role: "user",
    status: "Active",
    orders: 6,
    spent: 1890,
    joined: "Jan 28, 2026",
    location: "Dubai, UAE",
  },
  {
    id: 8,
    name: "Nadia Hussain",
    email: "nadia@gmail.com",
    phone: "+92 345 678 9012",
    role: "user",
    status: "Inactive",
    orders: 2,
    spent: 310,
    joined: "Feb 14, 2026",
    location: "Multan, PK",
  },
];

// ─── Main Users View ───────────────────────────────────────
function UsersView() {
  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("All Status");
  const [filterRole, setFilterRole] = useState("All Roles");
  const [selectedUser, setSelectedUser] = useState(null);

  const updateUser = (id, key, value) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === id ? { ...u, [key]: value } : u)),
    );
    if (selectedUser?.id === id) {
      setSelectedUser((prev) => ({ ...prev, [key]: value }));
    }
  };

  const deleteUser = (id) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  const filtered = users.filter((u) => {
    const matchSearch =
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase()) ||
      u.location.toLowerCase().includes(search.toLowerCase());
    const matchStatus =
      filterStatus === "All Status" || u.status === filterStatus;
    const matchRole = filterRole === "All Roles" || u.role === filterRole;
    return matchSearch && matchStatus && matchRole;
  });

  const statusCounts = statusOptions.reduce((acc, s) => {
    acc[s] = users.filter((u) => u.status === s).length;
    return acc;
  }, {});

  const [openStatusCategory, setOpenStatusCategory] = useState(false);
  const selectCategory = (c) => {
    setFilterStatus(c);
    setOpenStatusCategory(false);
  };

  const [openRoleCategory, setOpenRoleCategory] = useState(false);

  const selectCategory2 = (c) => {
    setFilterRole(c);
    setOpenRoleCategory(false);
  };

  return (
    <>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 md:mb-8">
        <div>
          <h1 className="font-[Tenor_Sans] font-normal text-[#98A2B3] text-[14px] md:text-[16px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[36px] tracking-wide mb-1">
            Users
          </h1>
          <p className="font-[Tenor_Sans] font-normal text-[#888888] text-[13px] md:text-[14px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[17px] tracking-wide">
            {users.length} registered users
          </p>
        </div>

        {/* Stats Row */}
        <div className="flex gap-3">
          {[
            {
              label: "Active",
              count: statusCounts["Active"],
              color: "text-green-600 bg-green-50 dark:bg-green-900/20",
            },
            {
              label: "Inactive",
              count: statusCounts["Inactive"],
              color: "text-amber-600 bg-amber-50 dark:bg-amber-900/20",
            },
            {
              label: "Banned",
              count: statusCounts["Banned"],
              color: "text-red-500 bg-red-50 dark:bg-red-900/20",
            },
          ].map((s) => (
            <div
              key={s.label}
              className={`flex items-center cursor-pointer hover:opacity-70 transition-opacity transform-gpu duration-300 ease-in gap-1.5 px-3 py-1.5 rounded-xl xl:rounded-2xl 2xl:rounded-3xl ${s.color}`}
            >
              <span className="font-[Tenor_Sans] font-normal text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[22px]  tracking-wide">
                {s.count}
              </span>
              <span className="font-[Tenor_Sans] font-normal  text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[22px] tracking-wide ">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Filters */}

      <FilterAndSearch
        search={search}
        setSearch={setSearch}
        placeholder="Search by name, email or location..."
        filterCategoryCommon={filterStatus}
        selectCategoryCommon={selectCategory}
        openCategoryCommon={openStatusCategory}
        setOpenCategoryCommon={setOpenStatusCategory}
        categoriesCommon={statusOptions}
        filterCategoryCommon2={filterRole}
        selectCategoryCommon2={selectCategory2}
        openCategoryCommon2={openRoleCategory}
        setOpenCategoryCommon2={setOpenRoleCategory}
        categoriesCommon2={roleOptions}
        isTrue={true}
      />

      {/* Table */}

      <UserTable
        filtered={filtered}
        users={users}
        setSelectedUser={setSelectedUser}
        updateUser={updateUser}
      />

      {/* User Detail Modal */}
      {selectedUser && (
        <UserDetailModal
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
          onUpdate={updateUser}
          onDelete={deleteUser}
        />
      )}
    </>
  );
}

export default UsersView;
