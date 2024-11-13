import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: JSON.parse(localStorage.getItem("cart")) || [],
  reducers: {
    addToCart: (state, action) => {
      let result = [...state, { ...action.payload, quantity: 1 }];
      localStorage.setItem("cart", JSON.stringify(result));
      return result;
    },

    removeFromCart: (state, action) => {
      let result = state.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(result));
      return result;
    },

    increment: (state, action) => {
      let result = state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(result));
      return result;
    },

    decrement: (state, action) => {
      let result = state.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            quantity: item.quantity > 1 ? item.quantity - 1 : 1,
          };
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(result));
      return result;
    },

    clearCart: (state, action) => {
      localStorage.removeItem("cart");
      return [];
    },
  },
});

export const { addToCart, removeFromCart, increment, decrement, clearCart } =
  cartSlice.actions;
