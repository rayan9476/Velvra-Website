import { createSlice } from "@reduxjs/toolkit";

export const blogInfoSlice = createSlice({
  name: "bloginfo",
  initialState: {
    blogdata: [],
    loading: "false",
    error: null,
  },

  reducers: {
    setBlogData(state, action) {
      state.blogdata = action.payload;
      ((state.loading = false), (state.error = false));
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

export const { setBlogData, setLoading, setError } = blogInfoSlice.actions;

export default blogInfoSlice.reducer;
