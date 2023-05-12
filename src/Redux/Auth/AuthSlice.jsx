import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "usman@gmail.com",
  password: "usman123",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    register: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },

    login: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    logout: (state) => {
      state.email = "";
      state.password = "";
    },
  },
});
export const { register, login, logout } = authSlice.actions;
export default authSlice.reducer;
