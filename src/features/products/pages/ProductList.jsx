import { Button } from "@/common/components/ui/button.jsx";
import Header from "../../../common/components/organisms/Header/Header.jsx";
import { useFetchAllQuery } from "../../../infrastructure/adapters/api/productAdapter.js";
import Cart from "../../cart/components/Cart.jsx";
import { useCart } from "../../cart/hooks/useCart.js";
import Test from "./Test.jsx";
import { SidebarProvider } from "@/common/components/ui/sidebar.jsx";

const ProductList = () => {
  const { data: products, error, isLoading } = useFetchAllQuery();

  return (
    <div>
      {/* <SidebarProvider>
        
      <Test>
      </Test>
</SidebarProvider> */}

      <Header />
      <Cart />
      <div style={styles.container}>
        <br />
        <Button className="bg-red-500" >Hamzaaaaaaaaaaaaaaaaa</Button>
        <br />
        {products?.products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </div>
  );
};

const ProductCard = ({ product }) => {
  const { addToCart, removeOne, cart } = useCart();
  const inCart = true

  return (
    <div style={stylesPr.card}>
      <img src={product.thumbnail} alt={product.title} style={stylesPr.image} />
      <h3>{product.title}</h3>
      <p>{product.category}</p>
      <p>{product.price} €</p>

      <div style={stylesPr.buttons}>
        <button onClick={() => addToCart(product)}>
          Ajouter au panier {inCart ? `(${inCart.quantity})` : ""}
        </button>
        {inCart && (
          <button onClick={() => removeOne(product.id)}>
            Supprimer
          </button>
        )}
      </div>
    </div>
  );
};
const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
};

const stylesPr = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    margin: "8px",
    width: "220px",
    textAlign: "center",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },
  image: {
    width: "150px",
    height: "150px",
    objectFit: "cover",
    marginBottom: "8px",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "12px",
  },
};

export default ProductList;
