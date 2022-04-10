import { Link } from "react-router-dom";

export const DetailButtons = () => {
  return (
    <div className="col-sm d-inline mb-3 d-flex justify-content-around ">
      {" "}
      <Link to="/cart" className="btn btn-primary  d-inline fw-bolder m-2">
        Terminar compra
      </Link>
      <Link to="/" className="btn btn-primary d-inline  fw-bolder m-2">
        Seguir comprando
      </Link>
    </div>
  );
};
