import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartItems = action.payload;
    },
    removeFromCart: () => {},
  },
});

export const { addToCart,removeFromCart } = cartSlice.actions

export default cartSlice.reducer ;