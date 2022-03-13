import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.css";
import { NavBoots } from "./components/Bootstrap/NavBoots";

const persona = {
  nombre: "Juanito",
  apellido: "Albahaca",
};

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer persona={persona} />
      <NavBoots />
    </div>
  );
}

export default App;
