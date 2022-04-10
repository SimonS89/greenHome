import cartPlant from "../../assets/img/cartPlant.jpg";
import { Link } from "react-router-dom";

export const EmptyCart = () => {
  return (
    <div className="container  mt-5 text-center mb-5 text-white fw-bold">
      <h2 className="text-dark bg-light mb-4">Tu carrito esta vacio</h2>
      <img
        src={cartPlant}
        className="img-fluid h-100 img-thumbnail"
        alt="..."
      />
      <hr />
      <h3 className="text-dark bg-light mb-3">Vuelve al shop para comprar</h3>
      <Link to="/" className="btn btn-danger">
        Volver
      </Link>
    </div>
  );
};
