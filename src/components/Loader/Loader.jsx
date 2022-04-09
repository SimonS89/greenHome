import Spinner from "react-bootstrap/Spinner";

export const Loader = () => {
  return (
    <Spinner
      animation="grow"
      role="status"
      className="mt-5 mb-5 text-white"
      size="lg"
    >
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
};
