import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar } from "./components/Navbar/Navbar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <ItemListContainer />
        <ItemDetailContainer />
      </main>
    </div>
  );
}

export default App;
