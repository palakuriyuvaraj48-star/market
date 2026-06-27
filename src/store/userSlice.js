import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    profile: {
      name: "Yuva FreshMart",
      email: "yuva@example.com",
      phone: "+91 98765 43210"
    },
    addresses: [
      {
        id: "home",
        label: "Home",
        line: "221B Green Avenue, Bengaluru",
        pin: "560001"
      }
    ],
    payments: [
      { id: "upi", label: "UPI", detail: "freshmart@upi" },
      { id: "card", label: "Visa", detail: "Ending 4242" }
    ],
    notifications: [
      "Cashback unlocked on grocery orders above Rs. 799.",
      "Your morning essentials are available for 10 minute delivery."
    ]
  },
  reducers: {
    addAddress: (state, action) => {
      state.addresses.push(action.payload);
    },
    updateProfile: (state, action) => {
      state.profile = { ...state.profile, ...action.payload };
    }
  }
});

export const { addAddress, updateProfile } = userSlice.actions;
export default userSlice.reducer;
