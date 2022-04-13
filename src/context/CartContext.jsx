import { createContext, useState } from "react";
import swal from "sweetalert";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const cartQuantity = () => {
    return cart.reduce((acc, prod) => (acc += prod.quantity), 0);
  };

  const totalPrice = () => {
    return cart.reduce((acc, item) => (acc += item.price * item.quantity), 0);
  };

  const buy = () => {
    swal({
      title: "¡Compra realizada con éxito!",
      icon: "success",
    }).then(() => {
      setCart([]);
    });
  };

  const clearCart = () => {
    swal({
      title: "¿Querés vaciar tu carrito de compras?",
      text: "Se eliminaran todos los productos guardados en tu carrito",
      icon: "warning",
      buttons: ["Cancelar", "Confirmar"],
    }).then((resp) => {
      if (resp) {
        setCart([]);
        swal({
          title: "¡Productos eliminados con éxito!",
          icon: "success",
        });
      }
    });
  };

  const removeItem = (id) => {
    swal({
      title: "¿Querés eliminar los productos seleccionados?",
      text: "Se eliminara la totalidad de los productos seleccionados",
      icon: "warning",
      buttons: ["Cancelar", "Confirmar"],
    }).then((resp) => {
      if (resp) {
        setCart(cart.filter((item) => item.id !== id));
        swal({
          title: "¡Productos eliminados con éxito!",
          icon: "success",
        });
      }
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        isInCart,
        cartQuantity,
        totalPrice,
        clearCart,
        removeItem,
        buy,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
