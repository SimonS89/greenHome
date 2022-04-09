import { createContext, useState } from "react";

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

  const clearCart = () => {
    const clear = window.confirm("Se vaciara el carrito de compras.");
    if (clear) {
      setCart([]);
    }
  };

  const removeItem = (id) => {
    const remove = window.confirm(
      "Estás seguro/a que querés remover este producto?"
    );
    if (remove) {
      setCart(cart.filter((item) => item.id !== id));
    }
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
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
