import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <>
      <h1 className="text-center mb-5 mt-5 text-white">Productos Destacados</h1>
      <div className="row row-cols-1 row-cols-md-4 g-4 justify-content-center pb-5">
        {products.map((producto) => (
          <Item key={producto.id} producto={producto} />
        ))}
      </div>
    </>
  );
};

export default ItemList;
