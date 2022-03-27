import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import Logo from "../../assets/img/GreenHome-logos_white.png";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top mb-5">
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          <img
            alt="Logo green home"
            src={Logo}
            width="230"
            height="40"
            className="d-inline align-top"
          />
        </NavLink>
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
              <NavLink to="/" className="nav-link active" aria-current="page">
                <span>Home</span>
              </NavLink>
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
                  <NavLink to="/category/indoor" className="dropdown-item">
                    Plantas de interior
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/category/outdoor" className="dropdown-item">
                    Plantas de exterior
                  </NavLink>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/category/other">
                    Otros productos
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
          <li className="nav-Cart">
            <a href="#" className="nav-cart">
              <span>
                <NavLink to="/cart">
                  <CartWidget />
                </NavLink>
              </span>
            </a>
          </li>
        </div>
      </div>
    </nav>
  );
};
