import React, { useEffect, useState } from "react";
import { getFetch } from "../helpers/getFetch";
import ItemDetail from "../ItemDetail/ItemDetail";
import Spinner from "react-bootstrap/Spinner";
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
    <div className="mt-5 pt-5 d-flex justify-content-center ">
      {loading ? (
        <Spinner animation="grow" role="status" size="lg">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <ItemDetail productDetail={productDetail} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
