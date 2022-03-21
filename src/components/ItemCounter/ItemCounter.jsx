import React, { useState } from "react";

const ItemCounter = ({ initialValue, stock }) => {
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

  const onAdd = () => {
    alert(`ud ha seleccionado ${counter} productos`);
  };

  return (
    <div className="container mt-3 align-items-center">
      <div className="col">
        <button
          type="button"
          className="btn btn-outline-dark fw-bolder btn-lg me-3"
          onClick={restar}
          disabled={counter === 0 ? true : false}
        >
          {" "}
          -{" "}
        </button>
        <span>{counter}</span>
        <button
          type="button"
          className="btn btn-outline-dark btn-lg ms-3"
          onClick={sumar}
          disabled={counter === stock ? true : false}
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
