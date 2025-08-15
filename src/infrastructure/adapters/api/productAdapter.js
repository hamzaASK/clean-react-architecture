// src/infrastructure/adapters/api/productAdapter.js
import { baseApi } from "./baseApi";

export const productAdapter = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchAll: builder.query({
      query: () => "/products",
    }),
    fetchById: builder.query({
      query: (id) => `/products/${id}`,
    }),
    create: builder.mutation({
      query: (data) => ({
        url: "/products",
        method: "POST",
        body: data,
      }),
    }),
    update: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/products/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
    delete: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
    }),
  }),
  overrideExisting: false,
});

// Export automatique des hooks générés
export const {
  useFetchAllQuery,
  useFetchByIdQuery,
  useCreateMutation,
  useUpdateMutation,
  useDeleteMutation,
} = productAdapter;
