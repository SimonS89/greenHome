import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.css";
import { NavBoots } from "./components/Navbar/Navbar";

const persona = {
  nombre: "Juanito",
  apellido: "Albahaca",
};

function App() {
  return (
    <div>
      <NavBoots />
      <main>
        <ItemListContainer persona={persona} />
      </main>
    </div>
  );
}

export default App;
