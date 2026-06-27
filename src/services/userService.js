import { mockDelay } from "./api";

export const userService = {
  updateProfile: (profile) => mockDelay({ ok: true, profile }),
  saveAddress: (address) => mockDelay({ ok: true, address })
};
