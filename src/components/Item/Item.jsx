import { React, useState } from "react";
import ItemCounter from "../ItemCounter/ItemCounter";

const Item = ({ producto }) => {
  const { id, title, price, pictureAlt, img, stock, detail } = producto;
  const [showMore, setShowMore] = useState(false);
  const hide = () => setShowMore(!showMore);

  return (
    <div className="col" key={id}>
      <div className="card text-center text-dark bg-light mb-3 border-light shadow-sm p-3 mb-5 bg-body rounded">
        <img src={img} className="card-img-top" alt={pictureAlt} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">$ {price}</p>
          {showMore ? <p>{detail}</p> : ""}
          <button
            onClick={hide}
            type="button"
            class="btn btn-outline-dark fw-bold"
          >
            {showMore ? "Ver Menos" : "Ver detalles del producto"}
          </button>
        </div>
        <ItemCounter initialValue={0} stock={stock} />
      </div>
    </div>
  );
};

export default Item;
