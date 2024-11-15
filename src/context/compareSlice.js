import { createSlice } from "@reduxjs/toolkit";

export const compareSlice = createSlice({
  name: "compare",
  initialState: JSON.parse(localStorage.getItem("compare")) || [],
  reducers: {
    addToCompare: (state, action) => {
      let result = [...state, { ...action.payload, quantity: 1 }];
      localStorage.setItem("compare", JSON.stringify(result));
      return result;
    },

    removeFromCompare: (state, action) => {
      let result = state.filter((item) => item.id !== action.payload);
      localStorage.setItem("compare", JSON.stringify(result));
      return result;
    },

    clearCompare: (state, action) => {
      localStorage.removeItem("compare");
      return [];
    },
  },
});

export const { addToCompare, removeFromCompare, clearCompare } =
  compareSlice.actions;
