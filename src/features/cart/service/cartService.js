// features/products/service/
// Portée locale à la fonctionnalité products
// Ces services implémentent les cas d’usage métier spécifiques à la feature.
// Ils appellent souvent les adapters ou les ports définis dans api/.
// Ils ne sont pas réutilisables ailleurs : ce sont des "use cases" liés aux produits.
// src/features/products/service/productService.js

import { productAdapter } from "../../../infrastructure/adapters/api/productAdapter";

export const getAllProducts = async () => {
    const res = await productAdapter.fetchAll();
    return res.data;
};

export const getProductById = async (id) => {
    const res = await productAdapter.fetchById(id);
    return res.data;
};

export const createProduct = async (product) => {
    const res = await productAdapter.create(product);
    return res.data;
};

export const updateProduct = async (id, product) => {
    const res = await productAdapter.update(id, product);
    return res.data;
};

export const deleteProduct = async (id) => {
    const res = await productAdapter.delete(id);
    return res.data;
};

export const searchProducts = async (query) => {
    const res = await productAdapter.search(query);
    return res.data;
};

export const getProductsByCategory = async (category) => {
    const res = await productAdapter.fetchByCategory(category);
    return res.data;
};

export const getProductsByBrand = async (brand) => {
    const res = await productAdapter.fetchByBrand(brand);
    return res.data;
};

export const getProductsByPriceRange = async (min, max) => {
    const res = await productAdapter.fetchByPriceRange(min, max);
    return res.data;
};

export const getProductsByColor = async (color) => {
    const res = await productAdapter.fetchByColor(color);
    return res.data;
};

export const getProductsBySize = async (size) => {
    const res = await productAdapter.fetchBySize(size);
    return res.data;
};

export const getProductsByMaterial = async (material) => {
    const res = await productAdapter.fetchByMaterial(material);
    return res.data;
};

export const getProductsByGender = async (gender) => {
    const res = await productAdapter.fetchByGender(gender);
    return res.data;
};

export const getProductsBySeason = async (season) => {
    const res = await productAdapter.fetchBySeason(season);
    return res.data;
};

export const getProductsByCollection = async (collection) => {
    const res = await productAdapter.fetchByCollection(collection);
    return res.data;
};
