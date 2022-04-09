import ItemList from "../ItemList/ItemList";
import { getFetch } from "../helpers/getFetch";
import { useEffect, useState } from "react";
import { Loader } from "../Loader/Loader";
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
      <div className="container  mt-5 text-center ">
        {loading ? <Loader /> : <ItemList products={products} />}
      </div>
    </>
  );
};

export default ItemListContainer;
