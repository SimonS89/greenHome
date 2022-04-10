import { React, useContext, useState } from "react";
import ItemCounter from "../ItemCounter/ItemCounter";
import { useNavigate } from "react-router-dom";
import { DetailButtons } from "../DetailButtons/DetailButtons";
import { CartContext } from "../../context/CartContext";
import { StocklessItem } from "../StocklessItem/StocklessItem";

const ItemDetail = ({ productDetail }) => {
  const { id, title, price, pictureAlt, img, stock, detail } = productDetail;

  const { addToCart, isInCart } = useContext(CartContext);

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
    quantity > 0 && addToCart(itemToAdd);
  };

  if (stock < 1) {
    return <StocklessItem productDetail={productDetail} />;
  }

  return (
    <div className="container mt-1 me-4 ms-4">
      <h1 className="text-center text-dark bg-light mb-4">
        Detalle del producto elegido: <i>{title}</i>
      </h1>
      <div className="col-sm-4 offset-md-4" key={id}>
        <div
          className="card text-center text-white border-light shadow-sm h-100 shadow-lg p-3 mb-5 rounded"
          style={{ backgroundColor: "#383A3F" }}
        >
          <img
            src={img}
            className="card-img-top img-thumbnail img-fluid"
            alt={pictureAlt}
          />
          <div className="card-body card-text">
            <p>{detail}</p>
            <p className="card-text fs-5">
              <strong>
                <i>Precio: $ {price}</i>
              </strong>
            </p>
            <p className="card-text fs-5">
              <strong>
                <i>Stock disponible: {stock} </i>
              </strong>
            </p>
            {stock <= 2 && (
              <p className="text-danger fw-bold fs-5">
                ¡Últimas unidades disponibles!
              </p>
            )}
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
              className="btn btn-light fw-bolder btn-l"
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
