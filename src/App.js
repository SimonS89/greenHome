import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

const persona = {
  nombre: "Juanito",
  apellido: "Albahaca",
};

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer persona={persona} />
    </div>
  );
}

export default App;
