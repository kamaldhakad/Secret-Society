import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row footer-inner">
          <div className="col-md-4 order-2 order-md-1 text-center mt-3 mb-4 mt-md-0 mb-md-0 text-md-start">
            <div>
              <Link to="/">Terms & Conditions</Link>
            </div>
            <div>
              <Link to="/">Provenance</Link>
            </div>
          </div>
          <div className="col-md-3 order-1 text-center order-md-2">
            <img src="./assets/images/logo.png" alt="logo" />
          </div>
          <div className="col-md-5 order-3 text-center text-md-end">
            <p>Verified smart contract address:</p>
            <Link className="adr">
              0xb121db250735c639421592e428a0aef420d40a73
            </Link>
            <ul>
              <li>
                <img src="./assets/images/discord.svg" alt="discord" />
              </li>
              <li>
                <img src="./assets/images/twitter.svg" alt="twitter" />
              </li>
              <li>
                <img src="./assets/images/instagram.svg" alt="instagram" />
              </li>
              <li>
                <img src="./assets/images/google.svg" alt="google" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
