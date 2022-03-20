import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AuthService from "../../services/auth";
import { login, logout } from '../actions/auth';
import { IAuthState } from "../../interfaces/auth";

const Auth = new AuthService();

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    isAuthenticated: false,
    errors: null,
    loading: false,
  } as IAuthState,
  reducers: {
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
    },
    setUser: (state, action: PayloadAction<any | null>) => {
      state.user = action.payload;
    },
    clearErrors: (state) => {
      state.errors = null;
    }
  },
  extraReducers: builder => {
    // LOGIN
    builder.addCase(login.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload?.data?.token) {
        state.isAuthenticated = true;
        state.token = action.payload?.data?.token;
        Auth.setToken(action.payload?.data?.token);
      } else {
        state.errors = action.payload;
      }
    });
    builder.addCase(login.rejected, (state) => {
      state.loading = false;
    });
    // LOGOUT
    builder.addCase(logout.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.token = null;
      state.user = null;
      Auth.logout();
    });
    builder.addCase(logout.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default authSlice.reducer;