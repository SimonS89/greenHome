import ItemList from "../ItemList/ItemList";
// import { getFetch } from "../helpers/getFetch";
import { useEffect, useState } from "react";
import { Loader } from "../Loader/Loader";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import db from "../../firebase/config";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const productsRef = collection(db, "products");
    const q = categoryId
      ? query(
          productsRef,
          where("category", "==", categoryId),
          orderBy("title")
        )
      : query(productsRef, orderBy("title"));
    getDocs(q)
      .then((resp) => {
        const items = resp.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(items);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
    // getFetch
    //   .then((resp) => {
    //     if (categoryId) {
    //       setProducts(resp.filter((item) => item.category === categoryId));
    //     } else {
    //       setProducts(resp);
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   })
    //   .finally(() => setLoading(false));
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
