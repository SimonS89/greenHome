import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar } from "./components/Navbar/Navbar";
import ItemCounter from "./components/ItemCounter/ItemCounter";

function App() {
  const persona = {
    nombre: "Juanito",
    apellido: "Albahaca",
  };
  return (
    <div>
      <Navbar />
      <main>
        <ItemListContainer persona={persona} />
        <ItemCounter initialValue={1} stock={5} onAdd="Agregado al carrito" />
      </main>
    </div>
  );
}

export default App;
