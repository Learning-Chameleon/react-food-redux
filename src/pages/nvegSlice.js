import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { name: "Chicken Fry", price: 12, imageUrl: "/food/chicken-fry.png" },
  { name: "Chicken Gravy", price: 15, imageUrl: "/food/chicken-gravy.png" },
  {
    name: "Hyderabad Dum Biryani",
    price: 20,
    imageUrl: "/food/hyd-dum-bir.png",
  },
  { name: "Mutton Fry", price: 18, imageUrl: "/food/mutton-fry.png" },
  { name: "Tandoor", price: 10, imageUrl: "/food/tandoor.png" },
];

const nvegSlice = createSlice({
  name: "nveg",
  initialState,
  reducers: {},
});
export default nvegSlice.reducer;
