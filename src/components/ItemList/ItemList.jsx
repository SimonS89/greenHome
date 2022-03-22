import { getFetch } from "../helpers/getFetch";
import React, { useEffect, useState } from "react";
import Item from "../Item/Item";

const ItemList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFetch
      .then((resp) => {
        setProducts(resp);
        return;
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {loading ? (
        <h2>Cargando productos disponibles...</h2>
      ) : (
        // <Item products={products} />
        products.map((producto) => <Item producto={producto} />)
      )}
    </div>
  );
};

export default ItemList;
