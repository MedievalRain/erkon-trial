import { PayloadAction, createSlice } from "@reduxjs/toolkit/react";
const initialState = {
  phone: "",
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    savePhone(state, action: PayloadAction<string>) {
      state.phone = action.payload;
    },
    login(state) {
      state.isLoggedIn = true;
    },
  },
});

export const { savePhone, login } = authSlice.actions;
export default authSlice.reducer;
