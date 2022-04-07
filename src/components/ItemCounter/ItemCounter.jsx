import React from "react";

const ItemCounter = ({ quantity, setQuantity, stock, onAdd }) => {
  const handlePlus = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleLess = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="container mt-3 align-items-center">
      <div className="col col-sm">
        <button
          type="button"
          className="btn btn-outline-dark fw-bolder btn-lg me-3"
          onClick={handleLess}
          disabled={quantity === 1 ? true : false}
        >
          {" "}
          -{" "}
        </button>
        <span>{quantity}</span>
        <button
          type="button"
          className="btn btn-outline-dark btn-lg ms-3 fw-bolder"
          onClick={handlePlus}
          disabled={quantity === stock ? true : false}
        >
          {" "}
          +{" "}
        </button>
      </div>
      <div className="col">
        <button
          className=" mt-2 mb-4  fw-bolder btn btn-dark fw-bolder"
          onClick={onAdd}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCounter;
