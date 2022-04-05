import { React, useState } from "react";
import ItemCounter from "../ItemCounter/ItemCounter";
import { useNavigate } from "react-router-dom";

const ItemDetail = ({ productDetail }) => {
  const { id, title, price, pictureAlt, img, stock, detail } = productDetail;

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(-1);
  };

  const [cuantity, setCUantity] = useState(0);
  const addCart = () => {
    const itemToAdd = {
      id,
      title,
      price,
      img,
      cuantity,
    };

    console.log(itemToAdd);
  };

  return (
    <div className="container mt-4">
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
          <ItemCounter
            cuantity={cuantity}
            setCuantity={setCUantity}
            stock={stock}
            onAdd={addCart}
          />

          <div className="col">
            <button
              className="btn btn-outline-primary fw-bold btn-l"
              onClick={handleNavigate}
            >
              Volver
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
