import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    setUser: (state, action) => {
      const { payload } = action;
      return { ...payload };
    },
    removeUser: (state) => (state = null),
  },
});

export default userSlice.reducer;

export const { setUser, removeUser } = userSlice.actions;

export const getUser = (state) => state.user;
