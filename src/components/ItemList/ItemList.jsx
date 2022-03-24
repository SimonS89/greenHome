import { getFetch } from "../helpers/getFetch";
import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import Spinner from "react-bootstrap/Spinner";

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
    <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
      {loading ? (
        <Spinner animation="grow" role="status" size="lg">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        products.map((producto) => (
          <Item key={producto.id} producto={producto} />
        ))
      )}
    </div>
  );
};

export default ItemList;
