import { createSlice } from "@reduxjs/toolkit";
import reducer from "./nvegSlice";

const initialState = [
  { name: "Butter Naan", price: 10, imageUrl: "/food/butter-naan.png" },
  { name: "Dal", price: 10, imageUrl: "/food/dal.png" },
  { name: "Dosa", price: 15, imageUrl: "/food/dosa.png" },
  { name: "Idli", price: 15, imageUrl: "/food/idli.png" },
  {
    name: "Malbar Parotta",
    price: 20,
    imageUrl: "/food/malbar-parotta.png",
  },
  {
    name: "Nool Parotta",
    price: 18,
    imageUrl: "/food/nool-parotta.png",
  },
  {
    name: "North Indian Meal",
    price: 18,
    imageUrl: "/food/north-indian-meal.png",
  },
  { name: "Rice", price: 12, imageUrl: "/food/rice.png" },
  {
    name: "South Indian Meal",
    price: 10,
    imageUrl: "/food/south-indian-meal.png",
  },
  { name: "Upma", price: 8, imageUrl: "/food/upma.png" },
];

const vegSlice = createSlice({
  name: "veg",
  initialState,
  reducers: {},
});

export default vegSlice.reducer;
