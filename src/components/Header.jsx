import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";

function Header() {
  const location = useLocation();
  const currentPage = location.pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const hamburgerMenuAnimation = {
    transition: 'height 0.5s ease-out, opacity 0.5s ease-out',
    height: isMenuOpen ? '150px' : '0',
    opacity: isMenuOpen ? 1 : 0,
    overflow: 'hidden',
  };

  return (
    <header className="bg-gradient px-5 py-3">
      <nav className="flex items-center justify-between flex-wrap p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link className="text-white no-underline" to="/">
            <h2>Le Jardin d&#39;Or</h2>
          </Link>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center px-4 py-3"
            aria-controls="navbarNav"
            aria-expanded={isMenuOpen ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto" id="navbarNav" style={hamburgerMenuAnimation}>
          <div className="text-sm lg:flex-grow">
            <ul className="list-reset lg:flex justify-end flex-1 items-center">
              <li className="mr-3">
                <Link
                  className={`inline-block py-2 px-4 no-underline ${currentPage === "/menu" ? "font-bold text-dark" : "text-grey-200"}`}
                  to="/menu"
                >
                  Menu
                </Link>
              </li>
              <li className="mr-3">
                <Link
                  className={`inline-block py-2 px-4 no-underline ${currentPage === "/about" ? "font-bold text-dark" : "text-grey-200"}`}
                  to="/about"
                >
                  About Us
                </Link>
              </li>
              <li className="mr-3">
                <Link
                  className={`inline-block py-2 px-4 no-underline ${currentPage === "/contact" ? "font-bold text-dark" : "text-grey-200"}`}
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  className="inline-block text-white bg-black py-2 px-4 no-underline rounded-lg"
                  to="/reserve"
                >
                  Reservations
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