import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, removeOneProduct, removeProduct, clearCart } from "../../cart/state/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  if (cart.length === 0) return <p>Le panier est vide.</p>;

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={styles.container}>
      <h2>Panier</h2>
      <ul style={styles.list}>
        {cart.map((item) => (
          <li key={item.id} style={styles.item}>
            <img src={item.thumbnail} alt={item.title} style={styles.image} />
            <div style={styles.info}>
              <h3>{item.title}</h3>
              <p>Prix: {item.price} €</p>
              <p>Quantité: {item.quantity}</p>
              <div style={styles.buttons}>
                <button onClick={() => dispatch(addProduct(item))}>+</button>
                <button onClick={() => dispatch(removeOneProduct(item.id))}>-</button>
                <button onClick={() => dispatch(removeProduct(item.id))}>Supprimer</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <h3>Total: {totalPrice.toFixed(2)} €</h3>
      <button onClick={() => dispatch(clearCart())} style={styles.clearBtn}>Vider le panier</button>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "16px",
    border: "1px solid #ddd",
    borderRadius: "8px",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: "16px",
    borderBottom: "1px solid #eee",
    paddingBottom: "8px",
  },
  image: {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    marginRight: "16px",
  },
  info: {
    flex: 1,
  },
  buttons: {
    display: "flex",
    gap: "8px",
    marginTop: "8px",
  },
  clearBtn: {
    marginTop: "16px",
    padding: "8px 16px",
    backgroundColor: "#f44336",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default Cart;
