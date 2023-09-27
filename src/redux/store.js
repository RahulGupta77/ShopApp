import { configureStore } from "@reduxjs/toolkit";
import CartsSlice from "./Slices/CartsSlice";

export const store = configureStore({
  reducer: {
    cart : CartsSlice, 
  }
})