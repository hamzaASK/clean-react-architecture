// store.js
import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "../../../infrastructure/adapters/api/baseApi";
import { rootReducer } from "./rootReducer";


// ✅ Store configuré
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware), // RTK Query middleware
});