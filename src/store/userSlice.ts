import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isSignedIn: false,
  },
  reducers: {
    add: (state) => {
      state.isSignedIn = true;
    },
    remove: (state) => {
      state.isSignedIn = false;
    },
  },
});

export const { add, remove } = userSlice.actions;
export default userSlice.reducer;
