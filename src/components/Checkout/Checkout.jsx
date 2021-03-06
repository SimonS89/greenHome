import {
  getDocs,
  addDoc,
  collection,
  Timestamp,
  writeBatch,
  query,
  where,
  documentId,
} from "firebase/firestore";
import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import db from "../../firebase/config";
import swal from "sweetalert";
import validateInfo from "../validateInfo/validateInfo";
import "./styles.css";

const Checkout = () => {
  const { cart, totalPrice, buy } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setErrors(validateInfo(values));
    setIsSubmitting(true);
    const order = {
      items: cart,
      total: totalPrice(),
      buyer: { ...values },
      date: Timestamp.fromDate(new Date()),
    };
    const batch = writeBatch(db);
    const ordersRef = collection(db, "orders");
    const productsRef = collection(db, "products");
    const q = query(
      productsRef,
      where(
        documentId(),
        "in",
        cart.map((item) => item.id)
      )
    );
    const products = await getDocs(q);

    const outOfStock = [];

    products.forEach((doc) => {
      const itemInCart = cart.find((item) => item.id === doc.id);

      if (doc.data().stock >= itemInCart.quantity) {
        batch.update(doc.ref, {
          stock: doc.data().stock - itemInCart.quantity,
        });
      } else {
        outOfStock.push(itemInCart);
      }
    });

    if (isSubmitting && Object.keys(errors).length === 0) {
      if (outOfStock.length === 0) {
        batch.commit();
        addDoc(ordersRef, order).then((doc) => {
          setOrderId(doc.id);
          buy();
        });
      } else {
        swal({
          title: "Hay items sin stock",
          text: "Items agotados durante su proceso de compra",
          icon: "error",
        });
      }
    }
  };

  if (orderId) {
    return (
      <div
        className="container my-5 text-center pt-5 pb-5 "
        style={{ backgroundColor: "#383A3F" }}
      >
        <h2 className="bg-light p-3 mb-5">
          ?? Tu orden se registr?? exit??samente!
        </h2>
        <hr className="text-light" />
        <h4 className="bg-light p-3 mb-5 mt-5">
          Tu n??mero de seguimiento es : {orderId}
        </h4>
        <Link className="btn btn-primary fw-bold" to="/">
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
    <div
      className="container my-5 text-center mb-5 pt-5 pb-5 mt-5"
      style={{ backgroundColor: "#383A3F" }}
    >
      <h2 className="bg-light pb-2 pt-1">Datos para su compra</h2>
      <hr />

      <form onSubmit={handleSubmit}>
        <div className="text-start text-danger fw-bold bg-light">
          {" "}
          <input
            className="form-control my-2 mb-3"
            type={"text"}
            placeholder="Nombre completo"
            value={values.name}
            name="name"
            onChange={handleInputChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div className="text-start text-danger fw-bold bg-light">
          {" "}
          <input
            className="form-control my-2 mb-3"
            type={"email"}
            placeholder="Direcci??n de correo electr??nico"
            value={values.email}
            name="email"
            onChange={handleInputChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="text-start text-danger fw-bold bg-light">
          {" "}
          <input
            className="form-control my-2 mb-3"
            type={"email"}
            placeholder="Ingrese nuevamente su direcci??n de correo electr??nico"
            value={values.email2}
            name="email2"
            onChange={handleInputChange}
          />
          {errors.email2 && <p>{errors.email2}</p>}
        </div>
        <div className="text-start text-danger fw-bold bg-light">
          {" "}
          <input
            className="form-control my-2 mb-3"
            type={"tel"}
            placeholder="Tel??fono celular"
            value={values.tel}
            name="tel"
            onChange={handleInputChange}
          />
          {errors.tel && <p>{errors.tel}</p>}
        </div>
        <div className="text-start text-danger fw-bold bg-light">
          {" "}
          <input
            className="form-control my-2 mb-3"
            type={"text"}
            placeholder="Domicilio"
            value={values.address}
            name="address"
            onChange={handleInputChange}
          />
          {errors.address && <p>{errors.address}</p>}
        </div>

        <textarea
          className="form-control my-2 mb-5"
          type={"text"}
          placeholder="Comentarios"
          value={values.comments}
          name="comments"
          onChange={handleInputChange}
        />
        <button className="btn btn-primary fw-bold btn-lg" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Checkout;
