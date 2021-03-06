import React, { useState } from "react";

const ItemCounter = ({ quantity, setQuantity, stock, onAdd }) => {
  const [bgColour, setBgColour] = useState("#F6B352");

  const btnStyle = { background: `${bgColour}` };

  const handlePlus = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleLess = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const btnLessConfig = {
    className: `btn
            ${
              quantity > 0
                ? "btn-light fw-bolder btn-lg me-3"
                : "btn-danger fw-bolder btn-lg me-3"
            }`,
    disabled: quantity === 0 ? true : false,
  };

  const btnPlusConfig = {
    className: `btn
            ${
              quantity === stock
                ? "btn-danger btn-lg ms-3 fw-bolder"
                : "btn-light btn-lg ms-3 fw-bolder"
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
          style={btnStyle}
          onMouseEnter={() => setBgColour("#F68657")}
          onMouseLeave={() => setBgColour("#F6B352")}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCounter;
