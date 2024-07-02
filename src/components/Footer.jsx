import React from "react";
/*import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "react-bootstrap-icons";


<div className="icon-row">
              <Facebook
                color="black"
                size={20}
                style={{ opacity: 0.5, marginRight: "10px" }}
              />
              <Linkedin
                color="black"
                size={20}
                style={{ opacity: 0.5, marginRight: "10px" }}
              />
              <Twitter
                color="black"
                size={20}
                style={{ opacity: 0.5, marginRight: "10px" }}
              />
              <Instagram
                color="black"
                size={20}
                style={{ opacity: 0.5, marginRight: "10px" }}
              />
              <Youtube color="black" size={24} style={{ opacity: 0.5 }} />
            </div>
*/

function Footer() {
  return (
    <footer className="footer text-dark border-top-line mt-auto mx-5">
      <div className="pt-5 pb-3">
        <div className="row">
          <div className="col-md-4 d-flex flex-column justify-content-between mb-md-0 mb-4">
            <h6>Fine Threads co.</h6>
            icons be here or smth
            <p className="text-muted">
              © 2001-2024, Le Jardin d&#39;Or, Inc. or its affiliates
            </p>
          </div>
          <div className="col-md-8 mb-md-0 mb-4">
            <div className="row">      
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
                        href="mailto:support@finethreads.co"
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
        </div>
      </div>
    </footer>
  );
}

export default Footer;
