import { Link } from "react-router-dom";

export const DetailButtons = () => {
  return (
    <div className="col d-inline mb-3">
      {" "}
      <Link to="/cart">
        <button className="btn btn-primary me-2 d-inline fw-bolder">
          Terminar compra
        </button>
      </Link>
      <Link to="/">
        <button className="btn btn-primary d-inline ms-2 fw-bolder">
          Seguir comprando
        </button>
      </Link>
    </div>
  );
};
