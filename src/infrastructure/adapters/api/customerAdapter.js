// infrastructure/adapters/api/clientAdapter.js
import { api } from "./baseApi";

export const customerAdapter = {
    fetchAll: () => api.get("/customers"),
    getById: (id) => api.get(`/customers/${id}`),
    create: (data) => api.post("/customers", data),
    update: (id, data) => api.put(`/customers/${id}`, data),
    delete: (id) => api.delete(`/customers/${id}`),
};

