import { createSlice } from "@reduxjs/toolkit";

export const collectionsSlice = createSlice({
  name: "collections",

  initialState: {
    headerVisible: false,
    collections: [],
    loading: true,
    error: null,
  },

  reducers: {
    setHeaderVisible(state, action) {
      state.headerVisible = action.payload;
    },

    setCollections(state, action) {
      state.collections = action.payload;
      state.loading = false;
      state.error = null;
    },

    setLoading(state) {
      state.loading = true;
      state.error = null;
    },

    setError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setHeaderVisible, setCollections, setLoading, setError } =
  collectionsSlice.actions;

export default collectionsSlice.reducer;
