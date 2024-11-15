import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cartSlice";
import { compareSlice } from "./compareSlice";
import { heartSlise } from "./heartSlise";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    compare: compareSlice.reducer,
    heart: heartSlise.reducer,
  },
});
