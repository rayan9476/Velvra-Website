import { createSlice } from "@reduxjs/toolkit";

export const collectionItemSlice = createSlice({
  name: "collectionItem",

  initialState: {
    visible: false,
  },

  reducers: {
    setVisible(state, action) {
      state.visible = action.payload;
    },
  },
});

export const { setVisible } = collectionItemSlice.actions;

export default collectionItemSlice.reducer;
