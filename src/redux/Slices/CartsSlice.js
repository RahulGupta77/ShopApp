import { createSlice } from "@reduxjs/toolkit";

export const CartsSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload) // action.payload is the actual argument passed in add() at product.jsx
    },
    remove: (state, action) => {
      return state.filter((item)=> item.id !== action.payload)
    },
  },
});

export const { add, remove } = CartsSlice.actions;
export default CartsSlice.reducer;
