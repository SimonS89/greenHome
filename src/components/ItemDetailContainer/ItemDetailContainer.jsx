import React, { useEffect, useState } from "react";
import { getFetch } from "../helpers/getFetch";
import ItemDetail from "../ItemDetail/ItemDetail";
import { Loader } from "../Loader/Loader";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState({});
  const [loading, setLoading] = useState(false);

  const { detailId } = useParams();

  useEffect(() => {
    setLoading(true);
    getFetch
      .then((res) => {
        setProductDetail(res.find((product) => product.id === detailId));
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
