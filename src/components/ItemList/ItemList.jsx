import { getFetch } from "../helpers/getFetch";
import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";

const ItemList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    getFetch
      .then((resp) => {
        if (categoryId) {
          setProducts(resp.filter((item) => item.category === categoryId));
        } else {
          setProducts(resp);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }, [categoryId]);

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center pb-5">
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
