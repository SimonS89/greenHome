import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { BsFillTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import cartPlant from "../../assets/img/cartPlant.jpg";

const Cart = () => {
  const { cart, totalPrice, clearCart, removeItem } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="container  mt-5 text-center mb-5 text-white fw-bold">
        <h2>Tu carrito esta vacio</h2>
        <img src={cartPlant} className="img-fluid h-100" alt="..." />
        <hr />
        <h5>Vuelve al shop para comprar</h5>
        <Link to="/" className="btn btn-danger">
          Volver
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="container  mt-5 text-center mb-5">
        <h2 className="text-white text-center mb-5">Tu compra</h2>
        <ul className="list-group me-3 ms-3">
          {cart.map((item) => (
            <li
              key={item.id}
              className="list-group-item row y  pb-3 pt-3 fw-bold fs-4 border-dark"
            >
              {item.title}
              <span className="badge text-dark rounded-pill">
                {" "}
                Cantidad de productos: {item.quantity}
              </span>
              <span className="badge text-dark rounded-pill">
                {" "}
                Precio total por cantidad: $ {item.price * item.quantity}
              </span>
              <hr />
              <button
                className="btn btn-outline-danger border-0 fs-3"
                onClick={() => removeItem(item.id)}
              >
                <BsFillTrashFill />
              </button>
            </li>
          ))}
        </ul>
        <h3 className="mt-5 list-group-item pb-3 pt-3 fw-bold fs-4 border-dark text-dark">
          Subtotal: $ {totalPrice()}
        </h3>
        <button className="btn btn-danger" onClick={clearCart}>
          {" "}
          Vaciar Carrito
        </button>
        <Link to="/">
          <button className="btn btn-primary d-inline ms-2">
            Seguir comprando
          </button>
        </Link>
      </div>
    </>
  );
};

export default Cart;
