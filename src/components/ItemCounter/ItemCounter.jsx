import React from "react";

const ItemCounter = ({ cuantity, setCuantity, stock, onAdd }) => {
  const handlePlus = () => {
    if (cuantity < stock) {
      setCuantity(cuantity + 1);
    }
  };

  const handleLess = () => {
    if (cuantity > 1) {
      setCuantity(cuantity - 1);
    }
  };

  return (
    <div className="container mt-3 align-items-center">
      <div className="col">
        <button
          type="button"
          className="btn btn-outline-dark fw-bolder btn-lg me-3"
          onClick={handleLess}
          disabled={cuantity === 1 ? true : false}
        >
          {" "}
          -{" "}
        </button>
        <span>{cuantity}</span>
        <button
          type="button"
          className="btn btn-outline-dark btn-lg ms-3"
          onClick={handlePlus}
          disabled={cuantity === stock ? true : false}
        >
          {" "}
          +{" "}
        </button>
      </div>
      <div className="col">
        <button
          className=" mt-2 mb-4  fw-bolder btn btn-outline-dark"
          onClick={onAdd}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCounter;
