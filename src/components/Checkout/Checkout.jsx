import {
  addDoc,
  collection,
  Timestamp,
  doc,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import db from "../../firebase/config";
import swal from "sweetalert";

const Checkout = () => {
  const { cart, totalPrice, buy } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);

  const [values, setValues] = useState({
    name: "",
    email: "",
    tel: "",
    address: "",
    comments: "",
  });

  const handleInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = {
      items: cart,
      total: totalPrice(),
      buyer: { ...values },
      date: Timestamp.fromDate(new Date()),
    };
    swal({
      title: "¿Realizar compra?",
      text: "¿Queres realizar la compra por $ " + totalPrice() + "?",
      icon: "info",
      buttons: ["Cancelar", "Confirmar"],
    }).then((resp) => {
      if (resp) {
        const ordersRef = collection(db, "orders");
        cart.forEach((item) => {
          const docRef = doc(db, "products", item.id);
          getDoc(docRef).then((doc) => {
            updateDoc(docRef, {
              stock: doc.data().stock - item.quantity,
            });
          });
        });
        addDoc(ordersRef, order).then((doc) => {
          setOrderId(doc.id);
          buy();
        });
      }
    });
  };

  if (orderId) {
    return (
      <div className="container my-5 bg-light text-center">
        <h2>¡ Tu orden se registró exitósamente!</h2>
        <hr />
        <h4>Tu número de seguimiento es : {orderId}</h4>
        <Link className="btn btn-primary" to="/">
          {" "}
          Volver al inicio{" "}
        </Link>
      </div>
    );
  }

  if (cart.length === 0) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container my-5 text-center">
      <h2 className="bg-light">Datos para su compra</h2>
      <hr />

      <form onSubmit={handleSubmit}>
        <input
          className="form-control my-2"
          type={"text"}
          placeholder="Nombre completo"
          value={values.name}
          name="name"
          onChange={handleInputChange}
        />
        <input
          className="form-control my-2"
          type={"email"}
          placeholder="Dirección de correo electrónico"
          value={values.email}
          name="email"
          onChange={handleInputChange}
        />
        <input
          className="form-control my-2"
          type={"tel"}
          placeholder="Teléfono celular"
          value={values.tel}
          name="tel"
          onChange={handleInputChange}
        />
        <input
          className="form-control my-2"
          type={"text"}
          placeholder="Domicilio"
          value={values.address}
          name="address"
          onChange={handleInputChange}
        />
        <textarea
          className="form-control my-2"
          type={"text"}
          placeholder="Comentarios"
          value={values.comments}
          name="comments"
          onChange={handleInputChange}
        />
        <button className="btn btn-primary" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Checkout;
