import React, { useEffect, useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import { Collapse } from "bootstrap";

function Header() {
  const location = useLocation();
  const currentPage = location.pathname;
  const navbarRef = useRef(null);

  useEffect(() => {
    const navbar = navbarRef.current;
    const bsCollapse = new Collapse(navbar, { toggle: false });
    bsCollapse.hide();
  }, [location]);

  return (
    <header className="header border-bottom-line mx-5 pt-2 pb-3">
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand" to="/">
          Le Jardin d&#39;Or
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          ref={navbarRef}
          className="collapse navbar-collapse"
          id="navbarNav"
        >
          <div className="container-fluid">
            <ul className="navbar-nav ml-auto align-far-right">
              <li className="nav-item mr-3">
                <Link
                  className={`nav-link text-dark fs-6 underline-animation ${
                    currentPage === "/" ? "current-tab" : ""
                  }`}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item mr-3">
                <Link
                  className={`nav-link text-dark fs-6 underline-animation ${
                    currentPage === "/about" ? "current-tab" : ""
                  }`}
                  to="/about"
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item mr-3">
                <Link
                  className={`nav-link text-dark fs-6 underline-animation ${
                    currentPage === "/services" ? "current-tab" : ""
                  }`}
                  to="/services"
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link btn btn-dark fs-6 text-white px-3 py-2"
                  to="/booking"
                >
                  Reserve a table
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
