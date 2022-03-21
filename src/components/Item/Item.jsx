import React from "react";
import ItemCounter from "../ItemCounter/ItemCounter";

const Item = ({ products }) => {
  return products.map((product) => (
    <div className="col" key={product.id}>
      <div className="card text-center">
        <img
          src={product.img}
          className="card-img-top"
          alt={product.pictureAlt}
        />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">$ {product.price}</p>
          <button type="button" class="btn btn-outline-dark fw-bold">
            Ver detalle del producto
          </button>
        </div>
        <ItemCounter className="align-self-center" initialValue={1} stock={5} />
      </div>
    </div>
  ));
};

export default Item;
