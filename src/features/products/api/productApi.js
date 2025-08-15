// src/features/products/api/productApi.js

import { getAllProducts } from "../service/productService";

export const productApiPort = {
  fetchAll: async () => {
    try {
      const products = await getAllProducts();
      return products;
    }
    catch (error) {
      console.error("Erreur lors du fetch des produits :", error);
      throw error;
    }
  },
};
