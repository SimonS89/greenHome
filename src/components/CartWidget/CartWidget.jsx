import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { cartQuantity } = useContext(CartContext);

  if (cartQuantity() !== 0) {
    return (
      <>
        <Link to="/cart" className="fs-5">
          <FaShoppingCart className="text-white fs-3" />
        </Link>
        <span className="ms-2 text-white fw-bold fs-4">{cartQuantity()}</span>
      </>
    );
  }

  return "";
};

export default CartWidget;
