import api from "@/app/lib/axios";

// ─── Auth ──────────────────────────────────────────────────
export const loginUser = async (email, password) => {
  const res = await api.post("/api/auth/login", { email, password });
  return res.data;
};

export const registerUser = async (name, email, password) => {
  const res = await api.post("/api/auth/register", { name, email, password });
  return res.data;
};

export const logoutUser = async () => {
  const res = await api.post("/api/auth/logout");
  return res.data;
};

// ─── Products ──────────────────────────────────────────────
export const fetchProducts = async () => {
  const res = await api.get("/api/products");
  return res.data.products;
};

export const fetchProductsWithLimit = async (limit) => {
  const res = await api.get(`/api/products?limit=${limit}`);
  return res.data.products;
};

export const fetchProduct = async (id) => {
  const res = await api.get(`/api/products/${id}`);
  return res.data.product;
};

export const addProduct = async (data) => {
  const res = await api.post("/api/products", data);
  return res.data;
};

export const updateProduct = async (id, data) => {
  const res = await api.put(`/api/products/${id}`, data);
  return res.data;
};

export const deleteProduct = async (id) => {
  const res = await api.delete(`/api/products/${id}`);
  return res.data;
};

// ─── Image Upload ──────────────────────────────────────────
export const uploadImage = async (formData) => {
  const res = await api.post("/api/upload", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data;
};

// ─── Cart ──────────────────────────────────────────────────
export const fetchCart = async () => {
  const res = await api.get("/api/cart");
  return res.data;
};

export const addToCart = async (productId, quantity) => {
  console.log("hellowhi", productId, quantity);

  const res = await api.post("/api/cart", { productId, quantity });
  return res.data;
};

export const updateCartItem = async (id, quantity) => {
  const res = await api.put(`/api/cart/${id}`, { quantity });
  return res.data;
};

export const removeCartItem = async (id) => {
  const res = await api.delete(`/api/cart/${id}`);
  return res.data;
};

// ─── Orders ────────────────────────────────────────────────
export const fetchOrders = async (excludeCancelled = false) => {
  const url = excludeCancelled
    ? `/api/orders?status=exclude_cancelled`
    : `/api/orders`;

  const res = await api.get(url);
  return res.data.orders;
};

export const fetchOrder = async (id, excludeCancelled = false) => {
  const url = excludeCancelled
    ? `/api/orders/${id}?status=exclude_cancelled`
    : `/api/orders/${id}`;

  const res = await api.get(url);
  return res.data.orders;
};

export const placeOrder = async (paymentMethod) => {
  const res = await api.post("/api/orders", { paymentMethod });
  return res.data;
};

export const cancelOrder = async (id) => {
  const res = await api.put(`/api/orders/${id}`, { status: "cancelled" });
  return res.data;
};

// ─── Payment ───────────────────────────────────────────────
export const createPayment = async () => {
  const res = await api.post("/api/payment");
  return res.data;
};

// collections
export const fetchCollections = async () => {
  const res = await api.get("/api/collections");
  return res.data.collections;
};

export const fetchCollection = async (id) => {
  const res = await api.get(`/api/collections/${id}`);
  return res.data;
};

// blogs

export const fetchBlogs = async (limit = 4, offset = 0) => {
  const res = await api.get(`/api/blogs?limit=${limit}&offset=${offset}`);
  return res.data.blogs;
};

export const fetchBlog = async (id) => {
  console.log("fetching blog with id:", id);
  const res = await api.get(`/api/blogs/${id}`);
  return res.data.blog;
};
