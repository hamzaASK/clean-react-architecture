// application/services/
// Portée transversale à tout le domaine applicatif
// Ces services définissent les règles d’application globales ou coordonnent plusieurs fonctionnalités.
// Ils peuvent orchestrer plusieurs features (products, clients, orders, etc.).
// C’est le cœur de l’Application Layer dans l’Onion Architecture.
// Ils sont réutilisables et indépendants des interfaces graphiques.

// src/application/services/catalogService.js

import { getAllProducts } from "../../features/products/service/productService";
import { getAllCategories } from "../../features/categories/service/categoryService";

// Service global pour afficher un catalogue avec produits + catégories
export const getCatalogData = async () => {
  const products = await getAllProducts();
  const categories = await getAllCategories();
  return { products, categories };
};
