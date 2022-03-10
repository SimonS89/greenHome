import React from "react";

const ItemListContainer = ({ persona }) => {
  return (
    <div>
      <h2>
        Hola {persona.nombre} {persona.apellido}
      </h2>
    </div>
  );
};

export default ItemListContainer;
