import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cart.slice";
import userReducer from "./user.slice";
export const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
});
