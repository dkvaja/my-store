import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./redux/slices/userSlice";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { productReducer } from "./redux/slices/productSlice";

const middlewarethunk = [thunk];

const combinedReducer = combineReducers({
  getUserData: userReducer,
  getProductData: productReducer,
});

const persistConfig = {
  key: "myShop",
  storage,
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, combinedReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [...middlewarethunk],
});
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
