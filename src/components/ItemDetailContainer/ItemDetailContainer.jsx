import React, { useEffect, useState } from "react";
import { getFetch } from "../helpers/getFetch";
import ItemDetail from "../ItemDetail/ItemDetail";
import Spinner from "react-bootstrap/Spinner";

const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getFetch
      .then((res) =>
        setProductDetail(res.find((product) => product.id === "5"))
      )
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
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
