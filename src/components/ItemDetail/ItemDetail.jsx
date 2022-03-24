import React from "react";
import ItemCounter from "../ItemCounter/ItemCounter";

const ItemDetail = ({ productDetail }) => {
  const { id, title, price, pictureAlt, img, stock, detail } = productDetail;

  return (
    <div className="container mt-5 pt-5">
      <h2 className="text-center">
        Detalle del producto elegido: <i>{title}</i>
      </h2>
      <div className="col-md-6 offset-md-3" key={id}>
        <div className="card text-center text-dark bg-light mb-3 border-light shadow-sm p-3 mb-5 bg-body rounded">
          <img src={img} className="card-img-top" alt={pictureAlt} />
          <div className="card-body">
            <p className="card-text">
              <strong>
                <i>
                  El precio es de: $ {price} y tenemos en stock {stock}{" "}
                  ejemplares.
                </i>
              </strong>
            </p>
            <p>{detail}</p>
          </div>
          <ItemCounter initialValue={0} stock={stock} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
