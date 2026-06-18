"use client";
import { useState } from "react";
import GetStatusStyle from "../components/utils/styles/GetStatusStyle";
import { statusOptions } from "../data/data";
import OrderDetailModal from "../components/OrderDetailModal";
import OrdersTable from "../components/OrdersTable";
import OrdersViewHeader from "../components/OrdersViewHeader";
import StatusPills from "../components/StatusPills";
import OrdersSearch from "../components/OrdersSearch";

// ─── Mock Data ─────────────────────────────────────────────
const initialOrders = [
  {
    id: "VLV-20260405-00001",
    customer: { name: "Iris Watson", email: "iris@gmail.com", image: "" },
    items: [
      {
        name: "Luxury Boucle Knit Cardigan",
        qty: 2,
        price: 120,
        image:
          "https://images.unsplash.com/photo-1548624313-0396a54c3b9d?w=100&q=80",
      },
      {
        name: "Silk Draped Midi Dress",
        qty: 1,
        price: 180,
        image:
          "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=100&q=80",
      },
    ],
    total: 420,
    payment: "card",
    status: "Delivered",
    date: "Apr 5, 2026",
  },
  {
    id: "VLV-20260404-00002",
    customer: { name: "Rayyan Khan", email: "rayyan@gmail.com", image: "" },
    items: [
      {
        name: "Camel Wool Overcoat",
        qty: 1,
        price: 340,
        image:
          "https://images.unsplash.com/photo-1548624313-0396a54c3b9d?w=100&q=80",
      },
    ],
    total: 340,
    payment: "cod",
    status: "Shipped",
    date: "Apr 4, 2026",
  },
  {
    id: "VLV-20260403-00003",
    customer: { name: "Sarah Ahmed", email: "sarah@gmail.com", image: "" },
    items: [
      {
        name: "Gold Chain Necklace",
        qty: 2,
        price: 95,
        image:
          "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=100&q=80",
      },
      {
        name: "Pearl Drop Earrings",
        qty: 1,
        price: 110,
        image:
          "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=100&q=80",
      },
    ],
    total: 300,
    payment: "jazzcash",
    status: "Processing",
    date: "Apr 3, 2026",
  },
  {
    id: "VLV-20260402-00004",
    customer: { name: "Ali Hassan", email: "ali@gmail.com", image: "" },
    items: [
      {
        name: "Leather Combat Boots",
        qty: 1,
        price: 245,
        image:
          "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=100&q=80",
      },
    ],
    total: 245,
    payment: "card",
    status: "Pending",
    date: "Apr 2, 2026",
  },
  {
    id: "VLV-20260401-00005",
    customer: { name: "Zara Malik", email: "zara@gmail.com", image: "" },
    items: [
      {
        name: "Silk Slip Dress",
        qty: 1,
        price: 175,
        image:
          "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=100&q=80",
      },
      {
        name: "Suede Shoulder Bag",
        qty: 1,
        price: 295,
        image:
          "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=100&q=80",
      },
    ],
    total: 470,
    payment: "card",
    status: "Cancelled",
    date: "Apr 1, 2026",
  },
  {
    id: "VLV-20260331-00006",
    customer: { name: "Fatima Noor", email: "fatima@gmail.com", image: "" },
    items: [
      {
        name: "Cashmere Turtleneck",
        qty: 2,
        price: 165,
        image:
          "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=100&q=80",
      },
    ],
    total: 330,
    payment: "cod",
    status: "Delivered",
    date: "Mar 31, 2026",
  },
];

function OrdersView() {
  const [orders, setOrders] = useState(initialOrders);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [selectedOrder, setSelectedOrder] = useState(null);

  const updateStatus = (orderId, newStatus) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === orderId ? { ...o, status: newStatus } : o)),
    );
    if (selectedOrder?.id === orderId) {
      setSelectedOrder((prev) => ({ ...prev, status: newStatus }));
    }
  };

  const filteredOrders = orders.filter((o) => {
    const matchSearch =
      o.id.toLowerCase().includes(search.toLowerCase()) ||
      o.customer.name.toLowerCase().includes(search.toLowerCase()) ||
      o.customer.email.toLowerCase().includes(search.toLowerCase());
    const matchStatus = filterStatus === "All" || o.status === filterStatus;
    return matchSearch && matchStatus;
  });

  const statusCounts = statusOptions.reduce((acc, s) => {
    acc[s] = orders.filter((o) => o.status === s).length;
    return acc;
  }, {});

  return (
    <>
      {/* Header */}

      <OrdersViewHeader orders={orders} />

      {/* Status Pills */}

      <StatusPills
        orders={orders}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
        statusCounts={statusCounts}
        statusOptions={statusOptions}
        GetStatusStyle={GetStatusStyle}
      />

      {/* Search */}
      <OrdersSearch search={search} setSearch={setSearch} />

      {/* Table */}

      <OrdersTable
        filteredOrders={filteredOrders}
        setSelectedOrder={setSelectedOrder}
        updateStatus={updateStatus}
        orders={orders}
        GetStatusStyle={GetStatusStyle}
        statusCounts={statusCounts}
      />

      {/* Order Detail Modal */}
      {selectedOrder && (
        <OrderDetailModal
          order={selectedOrder}
          onClose={() => setSelectedOrder(null)}
          onStatusChange={updateStatus}
        />
      )}
    </>
  );
}

export default OrdersView;
