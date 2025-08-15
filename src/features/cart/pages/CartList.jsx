import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../state/cartSlice.js";
import Header from "../../../common/components/organisms/Header/Header.jsx";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);

  useEffect(() => {
    dispatch(setProducts([
      { id: 1, name: "Produit A" },
      { id: 2, name: "Produit B" },
    ]));
  }, [dispatch]);

  return (
    <ul>
      <Header />
      {products.map((p) => (
        <li key={p.id}>{p.name}</li>
      ))}
    </ul>
  );
};

export default ProductList;
