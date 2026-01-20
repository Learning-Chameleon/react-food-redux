import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
  lang: "en-US",
  menu: { veg: "Vegetarian", nveg: "Non Vegetarian" },
  background: "#fff",
  color: "#333",
  brandColor: "#E1114E",
};

const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    updateTheme: (state, action) =>
      action.payload === "light"
        ? { ...state, theme: "light", background: "#fff", color: "#333" }
        : { ...state, theme: "dark", background: "#333", color: "#fff" },
  },
});

export const { updateTheme } = navbarSlice.actions;
export default navbarSlice.reducer;
