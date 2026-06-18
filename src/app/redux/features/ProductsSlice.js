import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",

  initialState: {
    sort: "New",
    sortOpen: false,
    page: 1,
    gridCols: 2,
    active: false,

    products: [],
    isLoading: true,
    error: null,
  },

  reducers: {
    setSort(state, action) {
      state.sort = action.payload;
    },

    setSortOpen(state, action) {
      state.sortOpen = action.payload;
    },

    setPage(state, action) {
      state.page = action.payload;
    },

    setGridCols(state, action) {
      state.gridCols = action.payload;
    },

    setActive(state, action) {
      state.active = action.payload;
    },

    setProducts(state, action) {
      state.products = action.payload;
      state.isLoading = false;
      state.error = null;
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

export const {
  setSort,
  setSortOpen,
  setPage,
  setGridCols,
  setActive,
  setProducts,
  setLoading,
  setError,
} = productsSlice.actions;

export default productsSlice.reducer;
