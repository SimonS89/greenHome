import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
  return (
    <button>
      <FaShoppingCart className="text-success" />
    </button>
  );
};

export default CartWidget;
