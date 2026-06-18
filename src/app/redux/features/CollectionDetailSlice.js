import { createSlice } from "@reduxjs/toolkit";

export const collectionDetailSlice = createSlice({
  name: "collectionDetail",

  initialState: {
    wishlist: {},
    collection: {
      products: [],
      relatedCollections: [],
    },
    isLoading: true,
    error: null,
  },

  reducers: {
    setWishlist(state, action) {
      //   state.wishlist = action.payload;

      const productId = action.payload;

      state.wishlist[productId] = !state.wishlist[productId];
    },

    setCollection(state, action) {
      state.collection = action.payload;
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

export const { setWishlist, setCollection, setLoading, setError } =
  collectionDetailSlice.actions;

export default collectionDetailSlice.reducer;
