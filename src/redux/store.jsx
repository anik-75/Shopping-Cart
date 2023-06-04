import { configureStore } from "@reduxjs/toolkit";

import AuthReducer from "./AuthSlice";
import cartReducer from "./CartSlice";

const store = configureStore({
  reducer: {
    authentication: AuthReducer,
    cart: cartReducer,
  },
});

export default store;
