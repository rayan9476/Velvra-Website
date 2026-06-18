import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

export const checkoutSlice = createSlice({
  name: "checkout",

  initialState: {
    cart: [],
    promoOpen: false,
    promoCode: "",
    promoApplied: false,
    promoError: false,
    isLoading: true,
    error: null,
  },

  reducers: {
    setCart(state, action) {
      state.cart = action.payload;
      state.isLoading = false;
      state.error = null;
    },

    setPromoOpen(state, action) {
      state.promoOpen = action.payload;
    },

    setPromoCode(state, action) {
      state.promoCode = action.payload;
    },

    setPromoApplied(state, action) {
      state.promoApplied = action.payload;
    },

    setPromoError(state, action) {
      state.promoError = action.payload;
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
  setCart,
  setPromoOpen,
  setPromoCode,
  setPromoApplied,
  setPromoError,
  setLoading,
  setError,
} = checkoutSlice.actions;

export default checkoutSlice.reducer;
