import { mockDelay } from "./api";

export const cartService = {
  syncCart: (items) => mockDelay({ ok: true, items }),
  validateCoupon: (code) =>
    mockDelay(
      {
        FRESH100: { code: "FRESH100", discount: 100, minOrder: 699 },
        MART50: { code: "MART50", discount: 50, minOrder: 399 }
      }[code.toUpperCase()] || null
    )
};
