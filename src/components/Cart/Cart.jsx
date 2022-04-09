import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { BsFillTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { EmptyCart } from "../EmptyCart/EmptyCart";

const Cart = () => {
  const { cart, totalPrice, clearCart, removeItem } = useContext(CartContext);

  if (cart.length === 0) {
    return <EmptyCart />;
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
        </ul>{" "}
        <div className="mt-5 list-group-item pb-3 pt-3 fw-bold fs-4 border-dark text-dark mb-3">
          <h3> Subtotal: $ {totalPrice()}</h3>
        </div>
        <button className="btn btn-danger" onClick={clearCart}>
          {" "}
          Vaciar Carrito
        </button>
        <Link to="/" className="btn btn-primary d-inline ms-2">
          Seguir comprando
        </Link>
      </div>
    </>
  );
};

export default Cart;
