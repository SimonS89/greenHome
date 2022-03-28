import React from "react";

const Footer = () => (
  <footer className="page-footer font-small blue pt-4 bg-dark text-light">
    <div className="container-fluid text-center text-md-left">
      <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
          <h5 className="text-uppercase">Título del Footer</h5>
          <p>Algun contenido relacionado con la página</p>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />

        <div className="col-md-3 mb-md-0 mb-1">
          <h5 className="text">Links a secciones de la página</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#!">Link 1</a>
            </li>
            <li>
              <a href="#!">Link 2</a>
            </li>
          </ul>
        </div>

        <div className="col-md-3 mb-md-0 mb-1">
          <h5 className="text">Links a redes sociales</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#!">Link 1</a>
            </li>
            <li>
              <a href="#!">Link 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="footer-copyright text-center py-3">
      © 2022 Copyright:
      <a href="#!"> Simón Sueldo</a>
    </div>
  </footer>
);

export default Footer;
