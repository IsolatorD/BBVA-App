import HttpService from "../../services/http";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IAuthResponse } from "../../interfaces/auth";

const http = new HttpService();

export const login = createAsyncThunk("auth/login", async (data: any) => {
  try {
    const response = await http.post("mobile/auth/login", data);
    console.log('response login', response.data);
    return response.data as IAuthResponse;
  } catch (error: any) {
    console.log("Error logging in", error.response.data);
    return { ...error.response.data.error }
  }
});

export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    const response = await http.post("mobile/auth/logout");
    console.log("Response logout", response.data);
    return response.data as any;
  } catch (error: any) {
    console.log("Error logging out", error.response.data);
    return { ...error.response.data.error };
  }
});