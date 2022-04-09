import { useNavigate } from "react-router-dom";

export const StocklessItem = ({ productDetail }) => {
  const { id, title, price, pictureAlt, img, stock, detail } = productDetail;
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(-1);
  };

  return (
    <div className="container mt-1 me-4 ms-4">
      <h3 className="text-center text-white mb-4">
        Detalle del producto elegido: <i>{title}</i>
      </h3>
      <div className="col-sm-4 offset-md-4" key={id}>
        <div className="card text-center text-dark bg-light border-light shadow-sm p-3 mb-5 bg-body rounded h-100 ">
          {stock <= 0 && (
            <p className="text-danger fw-bold fs-4">¡ Item sin stock !</p>
          )}
          <img
            src={img}
            className="card-img-top img-thumbnail img-fluid"
            alt={pictureAlt}
          />
          <div className="card-body card-text">
            <p>{detail}</p>
            <p className="card-text fs-5">
              <strong>
                <i>Precio: $ {price}</i>
              </strong>
            </p>
            <p className="card-text fs-5">
              <strong>
                <i>Stock disponible: {stock} </i>
              </strong>
            </p>
          </div>

          <div className="col">
            <button
              className="btn btn-primary fw-bolder btn-l"
              onClick={handleNavigate}
            >
              Volver
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
