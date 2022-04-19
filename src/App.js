import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { Navbar } from "./components/Navbar/Navbar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Footer from "./components/Footer/Footer.jsx";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./context/CartContext";
import Checkout from "./components/Checkout/Checkout";
import { Info } from "./components/Info/Info";

function App() {
  return (
    <CartProvider>
      <div
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/greenhome/image/upload/v1649601777/GreenHome/bg_ea1bxc.jpg)",
          backgroundSize: "contain",
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

            <Route path="/checkout" element={<Checkout />} />

            <Route path="/info" element={<Info />} />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </CartProvider>
  );
}

export default App;
