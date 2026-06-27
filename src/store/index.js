import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import cartReducer from "./cartSlice";
import wishlistReducer from "./wishlistSlice";
import userReducer from "./userSlice";
import ordersReducer from "./ordersSlice";
import adminReducer from "./adminSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    user: userReducer,
    orders: ordersReducer,
    admin: adminReducer
  }
});
