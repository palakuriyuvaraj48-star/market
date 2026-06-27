import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    coupons: [
      { id: "FRESH100", discount: 100, minOrder: 699, active: true },
      { id: "MART50", discount: 50, minOrder: 399, active: true }
    ],
    users: 12482,
    revenue: 1842000,
    ordersToday: 982,
    conversion: 7.8
  },
  reducers: {
    toggleCoupon: (state, action) => {
      const coupon = state.coupons.find((item) => item.id === action.payload);
      if (coupon) coupon.active = !coupon.active;
    },
    addCoupon: (state, action) => {
      state.coupons.push(action.payload);
    }
  }
});

export const { toggleCoupon, addCoupon } = adminSlice.actions;
export default adminSlice.reducer;
