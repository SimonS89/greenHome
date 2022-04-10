export const Info = () => {
  return (
    <>
      <div className="container pt-4">
        <div className="row">
          <div className="col">
            <div
              className="card shadow-lg rounded card text-dark bg-light mb-3 mb-3 ms-auto"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
            >
              <div className="row g-0">
                <div className="col-md-4 col">
                  <div className="card-body">
                    <h3 className="card-title fs-3 fw-bold">
                      Características del Vivero
                    </h3>
                    <p className="card-text fs-5">
                      El <strong> vivero</strong> es un conjunto de
                      instalaciones que tiene como propósito fundamental la
                      producción de plantas para abastecer las demandas de los
                      programas de reforestación. … Los{" "}
                      <strong>viveros </strong> temporales o volantes se
                      establecen en áreas de difícil acceso, pero muy cercanos a
                      las zonas donde se realizará la plantación.
                    </p>
                    <p className="card-text">
                      <small className="text-light fw-bold">
                        Actualizado 18 de noviembre
                      </small>
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <img
                    src="https://res.cloudinary.com/greenhome/image/upload/v1649548932/GreenHome/zomioculcaZamiifolia_pnuwnx.jpg"
                    className="img-fluid rounded-start"
                    alt="imagen de zlatan ibrahimovic"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div
              className="card shadow-lg rounded card text-dark bg-white mb-3"
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
            >
              <div className="row g-0">
                <div className="col-md-4 ">
                  <img
                    src="https://res.cloudinary.com/greenhome/image/upload/v1649548932/GreenHome/zomioculcaZamiifolia_pnuwnx.jpg"
                    className="img-fluid rounded-start h-100"
                    alt="imagen de harry kane"
                  />
                </div>
                <div className="col-md-4">
                  <div className="card-body">
                    <h3 className="card-title fs-3 fw-bold">
                      La importancia de un Vivero
                    </h3>
                    <p className="card-text fs-5">
                      La <strong>importancia de un vivero </strong>es, tener la
                      posibilidad de producir diferentes variedades de plantas
                      específicas, con la cantidad y la calidad necesaria para
                      reforestar cierta área determinada. … Diversificar la
                      estructura productiva local, favoreciendo el impulso de
                      <strong>viveros</strong> de carácter innovador.
                    </p>
                    <p className="card-text">
                      <small className="text-light fw-bold">
                        Actualizado 18 de noviembre
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      <script>AOS.init();</script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"
      ></script>
    </>
  );
};
