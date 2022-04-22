import Spinner from "react-bootstrap/Spinner";

export const Loader = () => {
  return (
    <>
      <Spinner
        animation="grow"
        role="status"
        className="mt-5 mb-5 text-dark"
        size="lg"
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <p className="text-center fw-bold mb-3 fs-3 bg-light">
        Aguarde por favor...
      </p>
    </>
  );
};
