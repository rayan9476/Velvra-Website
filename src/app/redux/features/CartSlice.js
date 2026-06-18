import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",

  initialState: {
    items: [],
    isLoading: true,
    error: null,
  },

  reducers: {
    setItems(state, action) {
      state.items = action.payload;
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

export const { setItems, setLoading, setError } = cartSlice.actions;

export default cartSlice.reducer;
