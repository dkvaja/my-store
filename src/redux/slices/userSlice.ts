import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface userType {
  name?: any;
  email?: string;
  phone?: number;
  username?: string;
}

export interface initialStateType {
  user: {
    name?: any;
    email?: string;
    phone?: number;
    username?: string;
  };
  isLoading: boolean;
  hasError: boolean;
}

const initialState: initialStateType = {
  user: {},
  isLoading: false,
  hasError: false,
};

export const getLoggedInUserData = createAsyncThunk(
  "auth/getUserData",
  async (data, _thunkAPI) => {
    const res = await (await fetch("https://fakestoreapi.com/users/1")).json();
    return res;
  }
);

export const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    [getLoggedInUserData.pending.toString()]: (state: initialStateType) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [getLoggedInUserData.fulfilled.toString()]: (
      state: initialStateType,
      { payload }
    ) => {
      state.user = payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [getLoggedInUserData.rejected.toString()]: (state: initialStateType) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export const userReducer = userSlice.reducer;
