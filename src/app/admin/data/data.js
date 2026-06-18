import { icons, socialIcons } from "../../components/icons/AdminIcons";

export const initialProducts = [
  {
    id: 1,
    name: "Luxury Boucle Knit Cardigan",
    category: "Women",
    section: "Random",
    price: 120,
    stock: 45,
    status: "Active",
    image:
      "https://images.unsplash.com/photo-1548624313-0396a54c3b9d?w=200&q=80",
  },
  {
    id: 2,
    name: "Silk Draped Midi Dress",
    category: "Women",
    section: "Random",
    price: 180,
    stock: 28,
    status: "Active",
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=200&q=80",
  },
  {
    id: 3,
    name: "Camel Wool Overcoat",
    category: "Men",
    section: "Random",
    price: 340,
    stock: 12,
    status: "Active",
    image:
      "https://images.unsplash.com/photo-1548624313-0396a54c3b9d?w=200&q=80",
  },
  {
    id: 4,
    name: "Gold Chain Necklace",
    category: "Accessories",
    section: "Random",
    price: 95,
    stock: 0,
    status: "Out of Stock",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=200&q=80",
  },
  {
    id: 5,
    name: "Leather Combat Boots",
    category: "Shoes",
    section: "Random",
    price: 245,
    stock: 8,
    status: "Low Stock",
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=200&q=80",
  },
];

export const stats = [
  {
    label: "Total Products",
    value: "248",
    icon: icons.products,
    change: "+12",
    positive: true,
  },
  {
    label: "Total Orders",
    value: "1,429",
    icon: icons.orders,
    change: "+8%",
    positive: true,
  },
  {
    label: "Total Users",
    value: "3,842",
    icon: icons.users,
    change: "+23%",
    positive: true,
  },
  {
    label: "Revenue",
    value: "$48,290",
    icon: icons.dashboard,
    change: "-3%",
    positive: false,
  },
];

export const categories = [
  "All Categories",
  "Women",
  "Men",
  "Kids",
  "Shoes",
  "Accessories",
  "Beauty",
];

export const SectionCategories = [
  "Random",
  "Hero Section",
  "New Arrival",
  "Collections",
  "Just for You",
];

export const navItems = [
  { id: "dashboard", label: "Dashboard", icon: icons.dashboard },
  { id: "products", label: "Products", icon: icons.products },
  { id: "orders", label: "Orders", icon: icons.orders },
  { id: "users", label: "Users", icon: icons.users },
  { id: "monthlysales", label: "MonthlySales", icon: icons.trendingUp },
];

export const socialLinks = [
  {
    href: "https://www.facebook.com/PimjoHQ",
    icon: socialIcons.facebook,
  },
  {
    href: "https://x.com/PimjoHQ",
    icon: socialIcons.twitter,
  },
  {
    href: "https://www.linkedin.com/company/pimjo",
    icon: socialIcons.linkedin,
  },
  {
    href: "https://instagram.com/PimjoHQ",
    icon: socialIcons.instagram,
  },
];

export const tableHeaders = [
  "Product",
  "Category",
  "Section",
  "Price",
  "Stock",
  "Status",
  "Actions",
];

export const statusOptions = [
  "Pending",
  "Processing",
  "Shipped",
  "Delivered",
  "Cancelled",
];

export const ViewTableHeaders = [
  "Order ID",
  "Customer",
  "Items",
  "Total",
  "Payment",
  "Status",
  // "Actions",
];

export const UsersTableHeaders = [
  "User",
  "Location",
  "Role",
  "Status",
  "Orders",
  "Spent",
  "Joined",
];

export const roleOptions = ["All Roles", "user", "admin"];
export const statusOptionsUser = ["All Status", "Active", "Inactive", "Banned"];
