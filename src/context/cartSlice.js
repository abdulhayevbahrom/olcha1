import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: JSON.parse(localStorage.getItem("cart")) || [],
  reducers: {
    addToCart: (state, action) => {
      let result = [...state, action.payload];
      localStorage.setItem("cart", JSON.stringify(result));
      return result;
    },
  },
});

export const { addToCart } = cartSlice.actions;
