import { React } from "react";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  const { id, title, price, pictureAlt, img } = producto;

  return (
    <div className="col" key={id}>
      <div className="card text-center text-dark bg-light mb-3 border-light shadow-sm p-3 mb-5 bg-body rounded">
        <img src={img} className="card-img-top" alt={pictureAlt} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">$ {price}</p>
          <Link to={`/detail/${id}`}>
            {" "}
            <button type="button" className="btn btn-outline-dark fw-bold">
              Ver detalles del producto
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
