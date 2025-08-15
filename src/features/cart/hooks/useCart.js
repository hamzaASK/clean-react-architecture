// src/features/cart/hooks/useCart.js
import { useDispatch, useSelector } from "react-redux";
import { addProduct, removeOneProduct, removeProduct, clearCart } from "../state/cartSlice";

export const useCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  return {
    cart,
    addToCart: (product) => dispatch(addProduct(product)),
    removeOne: (id) => dispatch(removeOneProduct(id)),
    removeAll: (id) => dispatch(removeProduct(id)),
    clear: () => dispatch(clearCart()),
  };
};
