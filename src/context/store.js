import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cartSlice";
import { heartSlise } from "./heartSlise";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    heart: heartSlise.reducer,
  },
});
