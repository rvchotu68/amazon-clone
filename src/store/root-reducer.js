import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cart.slice";
export const rootReducer = combineReducers({
  cart: cartReducer,
});
