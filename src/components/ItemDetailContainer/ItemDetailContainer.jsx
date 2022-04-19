import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { Loader } from "../Loader/Loader";
import { useParams } from "react-router-dom";
import db from "../../firebase/config";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState({});
  const [loading, setLoading] = useState(false);
  const { detailId } = useParams();

  useEffect(() => {
    setLoading(true);

    const productRef = doc(db, "products", detailId);
    getDoc(productRef)
      .then((doc) => {
        const prod = { id: doc.id, ...doc.data() };
        setProductDetail(prod);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [detailId]);

  return (
    <div className="mt-5 d-flex justify-content-center ">
      {loading ? <Loader /> : <ItemDetail productDetail={productDetail} />}
    </div>
  );
};

export default ItemDetailContainer;
