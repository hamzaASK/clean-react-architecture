// infrastructure/adapters/api/categoryAdapter.js
import { api } from "./baseApi";

export const categoryAdapter = {
    fetchAll: () => api.get("/categories"),
    fetchById: (id) => api.get(`/categories/${id}`),
    create: (data) => api.post("/categories", data),
    update: (id, data) => api.put(`/categories/${id}`, data),
    delete: (id) => api.delete(`/categories/${id}`),
};
