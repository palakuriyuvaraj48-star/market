import { createSlice } from "@reduxjs/toolkit";
import { products } from "../data/products";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: products,
    recentlyViewed: [],
    status: "idle"
  },
  reducers: {
    viewProduct: (state, action) => {
      state.recentlyViewed = [
        action.payload,
        ...state.recentlyViewed.filter((id) => id !== action.payload)
      ].slice(0, 8);
    },
    addProduct: (state, action) => {
      state.items.push(action.payload);
    },
    updateProduct: (state, action) => {
      const index = state.items.findIndex((product) => product.id === action.payload.id);
      if (index >= 0) state.items[index] = action.payload;
    },
    removeProduct: (state, action) => {
      state.items = state.items.filter((product) => product.id !== action.payload);
    }
  }
});

export const { viewProduct, addProduct, updateProduct, removeProduct } = productsSlice.actions;
export default productsSlice.reducer;
