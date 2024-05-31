import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface AuthenticationState {
  isAuthenticated?: boolean;
}

const initialState = {
  isAuthenticated: false,
} satisfies AuthenticationState as AuthenticationState;

const authenticationSlice = createSlice({
  name: "authentication",
  initialState: initialState,
  reducers: {
    setIsAuthenticated(state, action: PayloadAction<boolean>) {
      state.isAuthenticated = action.payload;
    },
  },
});

export default authenticationSlice;
