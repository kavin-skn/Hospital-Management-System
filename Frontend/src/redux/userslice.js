import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "", // You can add more user-related data here
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.username = action.payload.username;
      // You can set other user-related data in the state if needed
    },
    logout: (state) => {
      state.username = "";
      // Reset other user-related data if needed
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
