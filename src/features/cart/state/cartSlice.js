import { createSlice } from "@reduxjs/toolkit";
import { localStorageAdapter } from "../../../infrastructure/adapters/storage/localStorageAdapter";

const LOCAL_STORAGE_KEY = "cart";

const initialState = {
  items: localStorageAdapter.getItem(LOCAL_STORAGE_KEY) || [], // {id, name, price, quantity}
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action) {
      const product = action.payload;
      const existing = state.items.find((p) => p.id === product.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }

      localStorageAdapter.setItem(LOCAL_STORAGE_KEY, state.items);
    },

    removeOneProduct(state, action) {
      const id = action.payload;
      const existing = state.items.find((p) => p.id === id);

      if (existing) {
        if (existing.quantity > 1) {
          existing.quantity -= 1;
        } else {
          state.items = state.items.filter((p) => p.id !== id);
        }
      }

      localStorageAdapter.setItem(LOCAL_STORAGE_KEY, state.items);
    },

    removeProduct(state, action) {
      const id = action.payload;
      state.items = state.items.filter((p) => p.id !== id);
      localStorageAdapter.setItem(LOCAL_STORAGE_KEY, state.items);
    },

    clearCart(state) {
      state.items = [];
      localStorageAdapter.removeItem(LOCAL_STORAGE_KEY);
    },
  },
});

export const { addProduct, removeOneProduct, removeProduct, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
