import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
  return (
    <button>
      <FaShoppingCart className="text-dark" />
    </button>
  );
};

export default CartWidget;
