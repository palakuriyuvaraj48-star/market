import { mockDelay } from "./api";

export const orderService = {
  placeOrder: (payload) => mockDelay({ ok: true, ...payload }),
  trackOrder: (id) =>
    mockDelay({
      id,
      steps: ["Order confirmed", "Packed", "Out for delivery", "Arriving soon"]
    })
};
