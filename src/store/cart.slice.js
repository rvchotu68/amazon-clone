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
    removeItem: (state, action) => {
      const { payload } = action;
      const index = state.cartItems.findIndex((item) => item.id === payload);

      console.log("index", index);
      console.log("payload", payload);
      let newCartItems = [...state.cartItems];
      const count = newCartItems[index].qty;
      if (index >= 0) {
        newCartItems.splice(index, 1);
      }
      return {
        ...state,
        cartItems: [...newCartItems],
        cartLength: state.cartLength > 0 && state.cartLength - count,
      };
    },
    increaseQty: (state, action) => {
      const { payload } = action;
      const index = state.cartItems.findIndex((item) => item.id === payload);
      const newCartItems = [...state.cartItems];
      console.log("newCartItems", newCartItems);
      newCartItems[index].qty += 1;
      state.cartItems = [...newCartItems];
      state.cartLength += 1;
    },
    decreaseQty: (state, action) => {
      const { payload } = action;
      const index = state.cartItems.findIndex((item) => item.id === payload);
      const newCartItems = [...state.cartItems];
      console.log("newCartItems", newCartItems);
      newCartItems[index].qty -= 1;
      state.cartItems = [...newCartItems];
      state.cartLength -= 1;
    },
  },
});

export const getItemsFromCart = (state) => state.cart.cartItems;
export const getCartLength = (state) => state.cart.cartLength;

export const { addToCart, removeItem, increaseQty, decreaseQty } =
  cartSlice.actions;
export default cartSlice.reducer;
