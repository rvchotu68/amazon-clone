import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    cartLength: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const { payload } = action;
      state.cartItems.push(payload);
      state.cartLength += 1;
    },
  },
});

export const getItemsFromCart = (state) => state.cart.cartItems;
export const getCartLength = (state) => state.cart.cartLength;

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
