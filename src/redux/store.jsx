import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./authSlice";
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    authentication: authReducer,
    cart: cartReducer,
  },
});

export default store;
