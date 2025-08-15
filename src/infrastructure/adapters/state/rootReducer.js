// src/infrastructure/adapters/state/store.js
import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "../../../features/cart/state/cartSlice";
import productReducer from "../../../features/products/state/productSlice";
import { baseApi } from "../../../infrastructure/adapters/api/baseApi";

// ✅ Root reducer centralisé
export const rootReducer = combineReducers({
  [ baseApi.reducerPath ]: baseApi.reducer, // RTK Query
  products: productReducer,               // Slice produits (localStorage)
  cart: cartReducer,                      // Slice panier (localStorage)
});