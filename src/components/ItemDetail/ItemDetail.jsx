import { React, useContext, useState } from "react";
import ItemCounter from "../ItemCounter/ItemCounter";
import { useNavigate } from "react-router-dom";
import { DetailButtons } from "../DetailButtons/DetailButtons";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ productDetail }) => {
  const { id, title, price, pictureAlt, img, stock, detail } = productDetail;

  const { cart, addToCart, isInCart } = useContext(CartContext);

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(-1);
  };

  const [quantity, setQuantity] = useState(1);

  const addCart = () => {
    const itemToAdd = {
      id,
      title,
      price,
      img,
      quantity,
    };
    addToCart(itemToAdd);
  };

  return (
    <div className="container mt-1 me-4 ms-4">
      <h3 className="text-center text-white mb-4">
        Detalle del producto elegido: <i>{title}</i>
      </h3>
      <div className="col-sm-4 offset-md-4" key={id}>
        <div className="card text-center text-dark bg-light mb-3 border-light shadow-sm p-3 mb-5 bg-body rounded h-100 shadow-lg p-3 mb-5 bg-body rounded">
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
          {!isInCart(id) ? (
            <ItemCounter
              quantity={quantity}
              setQuantity={setQuantity}
              stock={stock}
              onAdd={addCart}
            />
          ) : (
            <DetailButtons />
          )}

          <div className="col">
            <button
              className="btn btn-primary fw-bolder btn-l"
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
