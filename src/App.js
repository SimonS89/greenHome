import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <ItemListContainer />
      </main>
    </div>
  );
}

export default App;
