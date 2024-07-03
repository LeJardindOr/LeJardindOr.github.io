import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer text-dark border-top-line mt-auto mx-5">
      <div className="pt-5 pb-3">
        <div className="row justify-content-between">
          <div className="col-md-4 d-flex flex-column mb-md-0 mb-4">
            <h6>Le Jardin d&#39;Or</h6>
            <p className="text-muted">
              © 2001-2024, Le Jardin d&#39;Or, Inc. or its affiliates
            </p>
          </div>
          <div className="col-md-4 d-flex justify-content-center align-items-center mb-md-0 mb-4">
            <div className="icon-row" style={{ display: 'flex', alignItems: 'center' }}>
              <FaFacebookF color="black" size={20} style={{ opacity: 0.5, marginRight: "10px" }} />
              <FaLinkedinIn color="black" size={20} style={{ opacity: 0.5, marginRight: "10px" }} />
              <FaTwitter color="black" size={20} style={{ opacity: 0.5, marginRight: "10px" }} />
              <FaInstagram color="black" size={20} style={{ opacity: 0.5, marginRight: "10px" }} />
              <FaYoutube color="black" size={24} style={{ opacity: 0.5 }} />
            </div>
          </div>
          <div className="col-md-4 mb-md-0 mb-4">
            <h6>Contacts</h6>
            <ul className="list-unstyled text-small">
              <li>
                <p className="text-muted">1-800-JARDIN</p>
              </li>
              <li>
                <p className="text-muted">123 Road Dr, A1A 1A1</p>
              </li>
              <li>
                <p>
                  <a
                    href="mailto:support@lejardindor.com"
                    className="text-muted"
                    style={{ textDecoration: "none" }}
                  >
                    support@lejardindor.com
                  </a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;