import React, { useState } from "react";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  const { id, title, price, pictureAlt, img } = producto;
  const [bgColour, setBgColour] = useState("#F6B352");

  const btnStyle = { background: `${bgColour}` };

  return (
    <div className="col-sm gy-5" key={id}>
      <div
        style={{ backgroundColor: "#383A3F" }}
        className="card text-center text-light  border-light shadow-lg p-3 mb-5  rounded  me-4 ms-4 h-100 shadow-lg "
      >
        <img
          src={img}
          className="card-img-top  img-fluid img-thumbnail"
          alt={pictureAlt}
        />
        <div className="card-body">
          <h4 className="card-title fst-italic">{title}</h4>
          <p className="card-text fw-bold">$ {price}</p>
          <Link to={`/detail/${id}`}>
            {" "}
            <button
              type="button"
              className="btn btn-dark fw-bold"
              style={btnStyle}
              onMouseEnter={() => setBgColour("#F68657")}
              onMouseLeave={() => setBgColour("#F6B352")}
            >
              Ver detalles del producto
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
