import React, { useState } from "react";

const ItemCounter = ({ initialValue, stock, onAdd }) => {
  const [counter, setCounter] = useState(initialValue);

  const sumar = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const restar = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const addCart = () => {
    alert(`ud ha seleccionado  ${counter} productos`);
  };

  return (
    <div className="container">
      <p>Contador de productos</p>
      <button
        type="button"
        className="btn btn-primary fw-bolder"
        onClick={restar}
      >
        {" "}
        -{" "}
      </button>
      <span>{counter}</span>
      <button type="button" className="btn btn-primary" onClick={sumar}>
        {" "}
        +{" "}
      </button>
      <button className="d-block mt-2 fw-bolder btn btn-dark" onClick={addCart}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCounter;
