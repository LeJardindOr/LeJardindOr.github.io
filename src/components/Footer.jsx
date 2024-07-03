import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient from-dark-green to-light-green text-dark border-t mt-auto px-5 pt-5 pb-3">
      <div className="flex justify-between">
        <div className="flex flex-col mb-4 w-full md:w-1/3">
          <h2>Le Jardin d'Or</h2>
          <p className="text-muted text-sm">
            <i>© 2001-2024, Le Jardin d'Or, Inc. or its affiliates</i>
          </p>
        </div>
        <div className="flex justify-center items-center mb-4 w-full md:w-1/3">
          <div className="flex items-center">
            <FaFacebookF className="text-black mr-2.5" size={30} />
            <FaLinkedinIn className="text-black mr-2.5" size={30} />
            <FaTwitter className="text-black mr-2.5" size={30} />
            <FaInstagram className="text-black mr-2.5" size={30} />
            <FaYoutube className="text-black" size={34} />
          </div>
        </div>
        <div className="flex flex-col mb-4 w-full md:w-1/3">
          <ul className="list-unstyled text-small">
            <li>
              <p className="text-muted text-sm">
                <a
                  href="mailto:support@lejardindor.com"
                  className="text-muted no-underline"
                >
                  Email: <i><b>support@lejardindor.com</b></i>
                </a>
              </p>
            </li>
            <li>
              <p className="text-muted text-sm">Phone: <i><b>1-800-JARDIN</b></i></p>
            </li>
            <li>
              <p className="text-muted text-sm">Address: <i><b>123 Road Dr, A1A 1A1</b></i></p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;