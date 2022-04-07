import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar } from "./components/Navbar/Navbar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Footer from "./components/Footer/Footer.jsx";
import { CartContext } from "./context/CartContext";
import { useState } from "react";
import Cart from "./components/Cart/Cart";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const cartQuantity = () => {
    return cart.length;
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, isInCart, cartQuantity }}>
      <div
        style={{
          backgroundImage:
            "url(https://images4.alphacoders.com/932/932271.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />

            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />

            <Route path="/detail/:detailId" element={<ItemDetailContainer />} />

            <Route path="/cart" element={<Cart />} />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </CartContext.Provider>
  );
}

export default App;
