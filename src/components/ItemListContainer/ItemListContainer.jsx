import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  return (
    <div className="container pt-5">
      <h1 className="text-center mb-5 mt-5">Productos Destacados</h1>
      <ItemList />
    </div>
  );
};

export default ItemListContainer;
