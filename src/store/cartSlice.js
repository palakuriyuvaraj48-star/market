import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    savedForLater: [],
    isDrawerOpen: false,
    coupon: null
  },
  reducers: {
    addToCart: (state, action) => {
      const existing = state.items.find((item) => item.id === action.payload.id);
      if (existing) existing.quantity += action.payload.quantity || 1;
      else state.items.push({ ...action.payload, quantity: action.payload.quantity || 1 });
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    incrementQuantity: (state, action) => {
      const item = state.items.find((cartItem) => cartItem.id === action.payload);
      if (item) item.quantity += 1;
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find((cartItem) => cartItem.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
      else state.items = state.items.filter((cartItem) => cartItem.id !== action.payload);
    },
    saveForLater: (state, action) => {
      const item = state.items.find((cartItem) => cartItem.id === action.payload);
      if (item) {
        state.savedForLater.push(item);
        state.items = state.items.filter((cartItem) => cartItem.id !== action.payload);
      }
    },
    moveSavedToCart: (state, action) => {
      const item = state.savedForLater.find((cartItem) => cartItem.id === action.payload);
      if (item) {
        state.items.push(item);
        state.savedForLater = state.savedForLater.filter((cartItem) => cartItem.id !== action.payload);
      }
    },
    toggleCartDrawer: (state, action) => {
      state.isDrawerOpen = action.payload ?? !state.isDrawerOpen;
    },
    applyCoupon: (state, action) => {
      state.coupon = action.payload;
    },
    clearCart: (state) => {
      state.items = [];
      state.coupon = null;
    }
  }
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  saveForLater,
  moveSavedToCart,
  toggleCartDrawer,
  applyCoupon,
  clearCart
} = cartSlice.actions;
export default cartSlice.reducer;
