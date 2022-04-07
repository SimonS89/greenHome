import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { BsFillTrashFill } from "react-icons/bs";

const Cart = () => {
  const { cart, totalPrice, clearCart, removeItem } = useContext(CartContext);

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
      </div>
    </>
  );
};

export default Cart;
