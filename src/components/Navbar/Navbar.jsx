import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import Logo from "../../assets/img/GreenHome-logos_white.png";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top mb-5">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            alt="Logo green home"
            src={Logo}
            width="230"
            height="40"
            className="d-inline align-top"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                <span>Home</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                <span>Quienes somos</span>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link active dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Nuestros productos
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Plantas de interior
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Plantas de exterior
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Otros productos
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <li className="nav-Cart">
            <a href="#" className="nav-cart">
              <span>
                <CartWidget />
              </span>
            </a>
          </li>
        </div>
      </div>
    </nav>
  );
};
