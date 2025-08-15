// productSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { localStorageAdapter } from "../../../infrastructure/adapters/storage/localStorageAdapter";

const LOCAL_STORAGE_KEY = "products";

const initialState = {
  items: localStorageAdapter.getItem(LOCAL_STORAGE_KEY) || [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.items = action.payload;

      // 🔄 Persiste dans localStorage
      localStorageAdapter.setItem(LOCAL_STORAGE_KEY, action.payload);
    },

    clearProducts(state) {
      state.items = [];

      // ❌ Supprime du localStorage
      localStorageAdapter.removeItem(LOCAL_STORAGE_KEY);
    },
  },
});

export const { setProducts, clearProducts } = productSlice.actions;
export default productSlice.reducer;
