import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const index = state.findIndex(
        (item) => item.name === action.payload.name,
      );
      if (index !== -1) {
        state[index] = { ...state[index], quantity: state[index].quantity + 1 };
      } else {
        state.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item.name !== action.payload.name);
    },
    updateCartItem: (state, action) => {
      const index = state.findIndex(
        (item) => item.name === action.payload.name,
      );
      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload };
      }
    },
  },
});

export const { addToCart, removeFromCart, updateCartItem } = cartSlice.actions;
export default cartSlice.reducer;
