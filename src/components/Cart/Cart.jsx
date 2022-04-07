import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);
  console.log(cart);
  return <h2 className="text-white text-center mb-5">Tu compra</h2>;
};

export default Cart;
