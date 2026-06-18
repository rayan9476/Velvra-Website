import { createSlice } from "@reduxjs/toolkit";

export const heroCarouselSlice = createSlice({
  name: "heroCarousel",
  initialState: {
    slides: [],
    loading: "false",
    error: null,
  },

  reducers: {
    setSlides(state, action) {
      state.slides = action.payload;
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

export const { setSlides, setLoading, setError } = heroCarouselSlice.actions;

export default heroCarouselSlice.reducer;
