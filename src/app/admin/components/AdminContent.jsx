"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import AdminProfileEditModel from "./AdminProfileEditModel";
import ProfileAddressEditModel from "../../components/ProfileAddressEditModel";
import MonthlySales from "./MonthlySales";
import SideBar from "./SideBar";
import Header from "./Header";
import WelcomeSection from "./WelcomeSection";
import ProductsView from "../ProductsView/Page";
import OrdersView from "../OrdersView/page";
import UsersView from "../UsersView/page";
import Profile from "./Profile";
import AddProductModal from "./AddProductModal";
import EditProductModal from "./EditProductModal";
import DeleteConfirmModal from "./DeleteConfirmModal";
import AllNotifications from "./AllNotifications";
import {
  initialProducts,
  stats,
  categories,
  SectionCategories,
} from "../data/data";

function AdminContent() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [products, setProducts] = useState(initialProducts);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("All Categories");

  const [WhichSectionProduct, setWhichSectionProduct] = useState({
    category: "Random",
  });

  const [openCategory1, setOpenCategory1] = useState(false);
  const [openCategory2, setOpenCategory2] = useState(false);
  const [openCategory3, setOpenCategory3] = useState(false);
  const [openCategory4, setOpenCategory4] = useState(false);
  const [form, setForm] = useState({
    name: "",
    category: "All Categories",
    price: "",
    stock: "",
    status: "Active",
    image: "",
  });

  const update = (key) => (e) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
  const emptyForm = {
    name: "",
    category: "All Categories",
    price: "",
    stock: "",
    image: "",
  };
  const [errors, setErrors] = useState({});

  const openAddModal = () => {
    setForm(emptyForm); // reset tu empty
    setWhichSectionProduct({
      category: "Random",
    });
    setErrors({});
    setShowAddModal(true);
  };

  const closeAddModal = () => {
    setShowAddModal(false);
    setErrors({});
    setOpenCategory3(false);
    setOpenCategory4(false);
  };

  const isValidUrl = (url) => {
    try {
      const parsed = new URL(url);
      return parsed.protocol === "http:" || parsed.protocol === "https:";
    } catch {
      return false;
    }
  };
  const handleAdd = () => {
    const newErrors = {};

    if (!form.name) newErrors.name = "Product name is required";
    if (!form.price) newErrors.price = "Price is required";
    if (!form.stock) newErrors.stock = "Stock is required";
    if (!form.category) newErrors.category = "Category is required";
    if (!WhichSectionProduct.category)
      newErrors.section = "Section is required";

    if (form.image && !isValidUrl(form.image)) {
      newErrors.image = "Invalid image URL";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    const newProduct = {
      id: Date.now(),
      name: form.name,
      category: form.category,
      section: WhichSectionProduct.category,
      price: Number(form.price),
      stock: Number(form.stock),
      status:
        Number(form.stock) === 0
          ? "Out of Stock"
          : Number(form.stock) < 10
            ? "Low Stock"
            : "Active",
      image:
        form.image ||
        "https://images.unsplash.com/photo-1548624313-0396a54c3b9d?w=200&q=80",
    };
    setProducts((prev) => [newProduct, ...prev]);
    setForm({
      name: "",
      category: "",
      price: "",
      stock: "",
      status: "Active",
      image: "",
    });
    setShowAddModal(false);
    setErrors({});
  };

  const handleEdit = () => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === selectedProduct.id
          ? {
              ...p,
              ...form,
              ...WhichSectionProduct,
              section: WhichSectionProduct.category,
              category: form.category,
              price: Number(form.price),
              stock: Number(form.stock),
              status:
                Number(form.stock) === 0
                  ? "Out of Stock"
                  : Number(form.stock) < 10
                    ? "Low Stock"
                    : "Active",
            }
          : p,
      ),
    );
    setShowEditModal(false);
  };

  const handleDelete = () => {
    setProducts((prev) => prev.filter((p) => p.id !== selectedProduct.id));
    setShowDeleteModal(false);
  };

  const openEdit = (product) => {
    setSelectedProduct(product);
    setForm({
      name: product.name,
      category: product.category,
      price: String(product.price),
      stock: String(product.stock),
      status: product.status,
      image: product.image,
    });
    setWhichSectionProduct({
      category: product.section,
    });
    setShowEditModal(true);
  };

  const closeEditModal = () => {
    setShowEditModal(false);
    setErrors({});
    setOpenCategory4(false);
  };

  const openDelete = (product) => {
    setSelectedProduct(product);
    setShowDeleteModal(true);
  };

  const filteredProducts = products.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchCat =
      filterCategory === "All Categories" || p.category === filterCategory;

    return matchSearch && matchCat;
  });

  const selectCategory = (c) => {
    setFilterCategory(c);
    setOpenCategory1(false);
  };

  const selectCategory2 = (c) => {
    setForm((prev) => ({
      ...prev,
      category: c,
    }));

    setOpenCategory2(false);
  };

  const selectCategory3 = (c) => {
    setForm((prev) => ({
      ...prev,
      category: c,
    }));

    setOpenCategory3(false);
  };

  const selectCategory4 = (c) => {
    setWhichSectionProduct((prev) => ({
      ...prev,
      category: c,
    }));

    setOpenCategory4(false);
  };

  const searchParams = useSearchParams();

  const activeNav = searchParams.get("tab") || "dashboard";
  const admin = {
    name: "Rayyan Khan",
    image: "",
  };

  const [showProfileEditModel, setshowProfileEditModel] = useState(false);
  const [showProfileAddressEditModel, setshowProfileAddressEditModel] =
    useState(false);

  const [adminProfile, setAdminProfile] = useState({
    firstName: "Rayan",
    lastName: "Khan",
    email: "r32284947@.com",
    phone: "+09 363 398 46",
    bio: "Admin",

    Facebook: "https://www.facebook.com/PimjoHQ",
    Xcom: "https://x.com/PimjoHQ",
    Linkedin: "https://www.linkedin.com/company/pimjo",
    Instagram: "https://instagram.com/PimjoHQ",

    role: "admin",
    city: "Karachi, Pakistan",

    role: "admin",

    country: "Pakistan",
    state: "Phoenix, Karachi, Pakistan.",
    postalCode: "ERT 2489",
    taxId: "AS4568384",
  });
  return (
    <div className="min-h-screen dark:bg-[#101828] bg-[#f9fafb] font-[Tenor_Sans] font-normal flex   -mt-[60px] lg:-mt-[70px] 2xl:-mt-[80px] 3xl:-mt-[90px]">
      {/* ── Sidebar ── */}
      <>
        <SideBar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          activeNav={activeNav}
        />
      </>
      {/* ── Main Content ── */}
      <div
        className="
      flex-1 flex flex-col min-w-0
     "
      >
        {/* Top Bar */}
        <Header setSidebarOpen={setSidebarOpen} activeNav={activeNav} />
        {/* Page Content */}
        <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-auto">
          {/* ── Dashboard View ── */}
          {activeNav === "dashboard" && (
            <WelcomeSection stats={stats} products={products} />
          )}
          {/* ── Products View ── */}
          {activeNav === "products" && (
            <ProductsView
              products={products}
              // categories={categories}
              filterCategory={filterCategory}
              selectCategory={selectCategory}
              openAddModal={openAddModal}
              openEdit={openEdit}
              openDelete={openDelete}
              search={search}
              setSearch={setSearch}
              filteredProducts={filteredProducts}
              setOpenCategory1={setOpenCategory1}
              openCategory1={openCategory1}
            />
          )}
          {/* ── Orders View ── */}
          {activeNav === "orders" && <OrdersView />}

          {/* ── Users View ── */}
          {activeNav === "users" && <UsersView />}

          {activeNav === "profile" && (
            <Profile
              admin={admin}
              adminProfile={adminProfile}
              setshowProfileEditModel={setshowProfileEditModel}
              setshowProfileAddressEditModel={setshowProfileAddressEditModel}
            />
          )}
          {activeNav === "monthlysales" && <MonthlySales />}
          {activeNav === "allnotifications" && <AllNotifications />}
        </main>
      </div>
      {showProfileEditModel && (
        <AdminProfileEditModel
          adminProfile={adminProfile}
          setAdminProfile={setAdminProfile}
          setshowProfileEditModel={setshowProfileEditModel}
        />
      )}
      {showProfileAddressEditModel && (
        <ProfileAddressEditModel
          adminProfile={adminProfile}
          setAdminProfile={setAdminProfile}
          setshowProfileAddressEditModel={setshowProfileAddressEditModel}
        />
      )}
      {/* ── Add Product Modal ── */}
      {showAddModal && (
        <AddProductModal
          closeAddModal={closeAddModal}
          form={form}
          update={update}
          errors={errors}
          setOpenCategory3={setOpenCategory3}
          openCategory3={openCategory3}
          categories={categories}
          selectCategory3={selectCategory3}
          setOpenCategory4={setOpenCategory4}
          openCategory4={openCategory4}
          WhichSectionProduct={WhichSectionProduct}
          SectionCategories={SectionCategories}
          selectCategory4={selectCategory4}
          handleAdd={handleAdd}
        />
      )}
      {/* ── Edit Product Modal ── */}
      {showEditModal && (
        <EditProductModal
          closeEditModal={closeEditModal}
          form={form}
          update={update}
          setOpenCategory2={setOpenCategory2}
          openCategory2={openCategory2}
          categories={categories}
          selectCategory2={selectCategory2}
          setOpenCategory4={setOpenCategory4}
          openCategory4={openCategory4}
          WhichSectionProduct={WhichSectionProduct}
          SectionCategories={SectionCategories}
          selectCategory4={selectCategory4}
          handleEdit={handleEdit}
        />
      )}
      {/* ── Delete Confirm Modal ── */}
      {showDeleteModal && (
        <DeleteConfirmModal
          setShowDeleteModal={setShowDeleteModal}
          selectedProduct={selectedProduct}
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
}

export default AdminContent;
