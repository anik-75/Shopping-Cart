import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { isLoggedIn: false, user: null };

const AuthSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.user = action.payload;
    },

    signUp(state, action) {
      state.isLoggedIn = true;
      state.user = action.payload;
    },

    logout(state) {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const AuthActions = AuthSlice.actions;

export default AuthSlice.reducer;
