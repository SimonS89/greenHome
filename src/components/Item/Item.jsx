import { React, useState } from "react";
import ItemCounter from "../ItemCounter/ItemCounter";

const Item = ({ products }) => {
  const [showMore, setShowMore] = useState(false);
  const hide = () => setShowMore(!showMore);

  return products.map((product) => (
    <div className="col" key={product.id}>
      <div className="card text-center ">
        <img
          src={product.img}
          className="card-img-top"
          alt={product.pictureAlt}
        />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">$ {product.price}</p>
          {showMore ? <p>{product.detail}</p> : ""}
          <button
            onClick={hide}
            type="button"
            class="btn btn-outline-dark fw-bold"
          >
            {showMore ? "Ver Menos" : "Ver detalles del producto"}
          </button>
        </div>
        <ItemCounter initialValue={0} stock={product.stock} />
      </div>
    </div>
  ));
};

export default Item;
