import { configureStore } from "@reduxjs/toolkit";

import AuthReducer from "./AuthSlice";

const store = configureStore({
  reducer: {
    authentication: AuthReducer,
  },
});

export default store;
