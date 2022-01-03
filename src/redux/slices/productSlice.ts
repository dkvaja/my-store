import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CartItemsTypes } from "../../pages/Store";

export interface initialStateType {
  products: [];
  selectedProduct?: {};
  cartProducts?: CartItemsTypes[];
  isLoading: boolean;
  error: string;
}

const initialState: initialStateType = {
  products: [],
  selectedProduct: {},
  cartProducts: [],
  isLoading: false,
  error: "",
};

export const getProductData = createAsyncThunk(
  "product/getProductData",
  async (_thunkAPI) => {
    const res = await (await fetch("https://fakestoreapi.com/products")).json();
    return res;
  }
);

export const getSelectedProduct = createAsyncThunk(
  "product/getProductData",
  async (productId: string, _thunkAPI) => {
    const res = await (
      await fetch(`https://fakestoreapi.com/products/${productId}`)
    ).json();
    return res;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state: initialStateType, { payload }) => {
      state.cartProducts = payload;
    },
  },
  extraReducers: {
    [getProductData.pending.toString()]: (state: initialStateType) => {
      state.isLoading = true;
      state.error = "An Error occur on pending";
    },
    [getProductData.fulfilled.toString()]: (
      state: initialStateType,
      { payload }
    ) => {
      state.products = payload;
      state.isLoading = false;
      state.error = "An Error occur after success fetch";
    },
    [getProductData.rejected.toString()]: (state: initialStateType) => {
      state.isLoading = false;
      state.error = "An Error occur after reject";
    },
    [getSelectedProduct.pending.toString()]: (state: initialStateType) => {
      state.isLoading = true;
      state.error = "An Error occur on pending";
    },
    [getSelectedProduct.fulfilled.toString()]: (
      state: initialStateType,
      { payload }
    ) => {
      state.selectedProduct = payload;
      state.isLoading = false;
      state.error = "An Error occur after success fetch";
    },
    [getSelectedProduct.rejected.toString()]: (state: initialStateType) => {
      state.isLoading = false;
      state.error = "An Error occur after reject";
    },
  },
});
export const { addToCart } = productSlice.actions;
export const productReducer = productSlice.reducer;
