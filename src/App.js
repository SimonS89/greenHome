import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar } from "./components/Navbar/Navbar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Footer from "./components/Footer/Footer.jsx";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./context/CartContext";
// import { Info } from "./components/Info/Info";
// import { products } from "./assets/data/products";
// import db from "./firebase/config";
// import { addDoc, collection } from "firebase/firestore";

function App() {
  //   const uploadProducts = () => {
  //     products.forEach(async (el) => {
  //       await addDoc(collection(db, "products"), el);
  //     });
  //   };

  return (
    <CartProvider>
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
          {/* <button onClick={uploadProducts}>Subir productos</button> */}
          <Routes>
            <Route path="/" element={<ItemListContainer />} />

            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />

            <Route path="/detail/:detailId" element={<ItemDetailContainer />} />

            <Route path="/cart" element={<Cart />} />

            {/* <Route path="/info" element={<Info />} /> */}

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </CartProvider>
  );
}

export default App;
