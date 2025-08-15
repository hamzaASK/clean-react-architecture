// src/infrastructure/adapters/api/baseApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Définition de l'API de base
export const baseApi = createApi({
  reducerPath: "baseApi", // nom du slice généré
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com", // 🔗 ton backend
    prepareHeaders: (headers, { getState }) => {
      // Exemple: ajouter un token d'auth si besoin
      const token = getState().auth?.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}), // laissé vide, les features (products, users...) vont les injecter
});
