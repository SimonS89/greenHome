import React, { useState } from "react";

const ItemListContainer = ({ persona }) => {
  const [mostrar, setMostrar] = useState(false);

  const verMas = () => {
    setMostrar(!mostrar);
  };

  return (
    <div class="container">
      {mostrar ? (
        <h2>
          Hola {persona.nombre} {persona.apellido}
        </h2>
      ) : (
        ""
      )}
      {}
      <button type="button" class="btn btn-primary" onClick={verMas}>
        {mostrar ? "Ver Menos" : "Ver Mas"}
      </button>
    </div>
  );
};

export default ItemListContainer;
