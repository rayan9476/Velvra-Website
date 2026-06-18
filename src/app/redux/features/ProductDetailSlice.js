import { createSlice } from "@reduxjs/toolkit";

export const productDetailSlice = createSlice({
  name: "productDetail",

  initialState: {
    activeImg: null,
    product: [],
    related: [],
    isLoading: true,
    error: null,
  },

  reducers: {
    setActiveImg(state, action) {
      state.activeImg = action.payload;
    },

    setProducts(state, action) {
      state.product = action.payload;
      state.isLoading = false;
      state.error = null;
    },

    setRelated(state, action) {
      state.related = action.payload;
    },

    setLoading(state) {
      state.isLoading = true;
      state.error = null;
    },

    setError(state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { setActiveImg, setProducts, setRelated, setLoading, setError } =
  productDetailSlice.actions;

export default productDetailSlice.reducer;
