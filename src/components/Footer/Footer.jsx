import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import Logo from "../../assets/img/GreenHome-logos_white.png";

const Footer = () => (
  <footer className="page-footer font-small blue pt-4 bg-dark text-light">
    <div className="container-fluid text-center text-md-left">
      <div className="row">
        <div className="col-md-6 mt-md-0 mt-1">
          <Link to="/" className="navbar-brand">
            <img
              alt="Logo green home"
              src={Logo}
              width="230"
              height="40"
              className="d-inline align-top"
            />
          </Link>
          <p className="pt-2">
            La <strong>importancia de un vivero</strong> es tener la posibilidad
            de producir diferentes variedades de plantas específicas, con la
            cantidad y la calidad necesaria para reforestar cierta área
            determinada y diversificar la estructura productiva local,
            favoreciendo así el impulso de viveros de carácter innovador.
          </p>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />

        <div className="col-md-3 mb-md-0 mb-1">
          <h5 className="text">Links a categorias de productos</h5>
          <ul className="list-unstyled">
            <li>
              <Link to="/category/indoor">Plantas de interior</Link>
            </li>
            <li>
              <Link to="/category/outdoor">Plantas de exterior</Link>
            </li>
            <li>
              <Link to="/category/other">Productos de jardin</Link>
            </li>
          </ul>
        </div>

        <div className="col-md-3 mb-md-0 mb-1">
          <h5 className="text">Links a redes sociales</h5>
          <ul className="list-unstyled">
            <li className="d-inline m-3">
              <a
                className="text-white fs-2"
                href="https://www.linkedin.com/in/simon-sueldo-ab7b539b/"
                target="_blank"
                rel="noreferrer"
              >
                <BsLinkedin />
              </a>
            </li>
            <li className="d-inline m-3">
              <a
                href="https://github.com/SimonS89"
                className="text-white fs-2"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub />
              </a>
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
