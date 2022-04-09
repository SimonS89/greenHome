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

  const btnLessConfig = {
    className: `btn
            ${
              quantity > 1
                ? "btn-outline-dark fw-bolder btn-lg me-3"
                : "btn-danger fw-bolder btn-lg me-3"
            }`,
    disabled: quantity === 1 ? true : false,
  };

  const btnPlusConfig = {
    className: `btn
            ${
              quantity === stock
                ? "btn-danger btn-lg ms-3 fw-bolder"
                : "btn-outline-dark btn-lg ms-3 fw-bolder"
            }`,
    disabled: quantity === stock ? true : false,
  };

  return (
    <div className="container align-items-center">
      <div className="col col-sm">
        <button type="button" onClick={handleLess} {...btnLessConfig}>
          {" "}
          -{" "}
        </button>
        <span>{quantity}</span>
        <button type="button" onClick={handlePlus} {...btnPlusConfig}>
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
