// src/App.jsx
import React from "react";
import ProductList from "./features/products/pages/ProductList";

const App = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Bienvenue dans mon e-commerce</h1>
      <ProductList />
    </div>
  );
};

export default App;
