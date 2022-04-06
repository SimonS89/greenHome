import ItemList from "../ItemList/ItemList";
import { getFetch } from "../helpers/getFetch";
import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
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
    <>
      <div className="container pt-5 mt-5 text-center">
        {/* <h1 className="text-center mb-5 mt-5">Productos Destacados</h1> */}
        {loading ? (
          <Spinner
            animation="grow"
            role="status"
            className="mt-5 mb-5"
            size="lg"
          >
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          <ItemList products={products} />
        )}
      </div>
    </>
  );
};

export default ItemListContainer;
