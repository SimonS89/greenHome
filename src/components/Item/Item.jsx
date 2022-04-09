import { React } from "react";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  const { id, title, price, pictureAlt, img } = producto;

  return (
    <div className="col-sm gy-5" key={id}>
      <div className="card text-center text-dark bg-light border-light shadow-sm bg-body rounded me-4 ms-4 h-100 shadow-lg p-3 mb-5 ">
        <img
          src={img}
          className="card-img-top  img-fluid img-thumbnail"
          alt={pictureAlt}
        />
        <div className="card-body">
          <h5 className="card-title fst-italic">{title}</h5>
          <p className="card-text fw-bold">$ {price}</p>
          <Link to={`/detail/${id}`}>
            {" "}
            <button type="button" className="btn btn-dark fw-bold">
              Ver detalles del producto
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
