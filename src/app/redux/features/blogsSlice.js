import { createSlice } from "@reduxjs/toolkit";

export const blogsSlice = createSlice({
  name: "blogs",
  initialState: {
    blogsdata: [],
    offset: 4,
    hasMore: true,
    active: "",
    loadMore: false,
    loading: "false",
    error: null,
  },

  reducers: {
    setBlogsData(state, action) {
      state.blogsdata = action.payload;
      ((state.loading = false), (state.error = false));
    },

    setOffset(state, action) {
      state.offset = action.payload;
    },

    setHasMore(state, action) {
      state.hasMore = action.payload;
    },

    setActive(state, action) {
      state.active = action.payload;
    },

    setLoadMore(state, action) {
      state.loadMore = action.payload;
    },

    setLoading(state, action) {
      state.loading = true;
      state.error = null;
    },

    setError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  setBlogsData,
  setOffset,
  setHasMore,
  setActive,
  setLoadMore,
  setLoading,
  setError,
} = blogsSlice.actions;

export default blogsSlice.reducer;
