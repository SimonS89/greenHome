import ItemCounter from "../ItemCounter/ItemCounter";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  return (
    <div className="container mt-5">
      <h1 class="text-center mb-5">Productos Destacados</h1>
      <ItemList />
    </div>
  );
};

export default ItemListContainer;
