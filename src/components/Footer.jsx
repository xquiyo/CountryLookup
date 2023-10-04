import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Footer = () => {

  return (
    
        <footer>
          <div className="row footer__row">
            <figure className="footer__logo">
              <img
                src={Logo}
                className="footer__logo--img"
                alt=""
                
              />
            </figure>
            <div className="footer__list">
              <Link to="/" className="footer__link">
                Home
              </Link>
              <Link to="/countrieslist" className="footer__link">
                Countries List
              </Link>
              <Link to="/" className="footer__link no-cursor">
                Contact Us
              </Link>
            </div>
            <div className="footer__copyright">
              Copyright &copy; 2023 Created by Quiyo Villanueva
            </div>
          </div>
          </footer>
      
  );
};

export default Footer;
