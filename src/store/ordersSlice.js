import { createSlice, nanoid } from "@reduxjs/toolkit";

const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    items: [
      {
        id: "FM10021",
        placedAt: "2026-06-16",
        status: "Delivered",
        total: 684,
        items: ["Tomato", "Milk", "Basmati Rice"],
        eta: "Delivered in 9 minutes"
      }
    ]
  },
  reducers: {
    placeOrder: {
      reducer: (state, action) => {
        state.items.unshift(action.payload);
      },
      prepare: ({ cartItems, total, address, payment }) => ({
        payload: {
          id: `FM${nanoid(6).toUpperCase()}`,
          placedAt: new Date().toISOString().slice(0, 10),
          status: "Packed",
          total,
          address,
          payment,
          eta: "Arriving in 10 minutes",
          items: cartItems.map((item) => item.name)
        }
      })
    },
    updateOrderStatus: (state, action) => {
      const order = state.items.find((item) => item.id === action.payload.id);
      if (order) order.status = action.payload.status;
    }
  }
});

export const { placeOrder, updateOrderStatus } = ordersSlice.actions;
export default ordersSlice.reducer;
