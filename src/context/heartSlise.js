import { createSlice } from "@reduxjs/toolkit";

export const heartSlise = createSlice({
    name: "heart",
    initialState: JSON.parse(localStorage.getItem("heart")) || [],
    reducers: {
        addToHeart: (state, action) => {
            let result =[...state, { ...action.payload, quantity: 1}];
            localStorage.setItem("heart", JSON.stringify(result));
            return result;
        },

        removeFromHeart: (state, action) => {
            let result = state.filter((item) => item.id !== action.payload);
            localStorage.setItem("heart", JSON.stringify(result));
            return result;
        },

    }
})

export const { addToHeart, removeFromHeart } = heartSlise.actions;