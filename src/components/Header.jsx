import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";

function Header() {
  const location = useLocation();
  const currentPage = location.pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header border-b mx-5 pt-2 pb-3">
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link className="text-white no-underline hover:text-white hover:no-underline" to="/">
            Le Jardin d&#39;Or
          </Link>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
            aria-controls="navbarNav"
            aria-expanded={isMenuOpen ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div className={`${isMenuOpen ? "block" : "hidden"} w-full block flex-grow lg:flex lg:items-center lg:w-auto`} id="navbarNav">
          <div className="text-sm lg:flex-grow">
            <ul className="list-reset lg:flex justify-end flex-1 items-center">
              <li className="mr-3">
                <Link
                  className={`inline-block text-dark py-2 px-4 no-underline ${currentPage === "/" ? "font-bold" : "text-teal-200"}`}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="mr-3">
                <Link
                  className={`inline-block text-dark py-2 px-4 no-underline ${currentPage === "/about" ? "font-bold" : "text-teal-200"}`}
                  to="/about"
                >
                  About Us
                </Link>
              </li>
              <li className="mr-3">
                <Link
                  className={`inline-block text-dark py-2 px-4 no-underline ${currentPage === "/services" ? "font-bold" : "text-teal-200"}`}
                  to="/services"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className="inline-block text-white bg-black py-2 px-4 no-underline"
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