import React from "react";
import mainLogo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Nav = () => {
  function openMenu() {
    document.body.classList += " menu--open";
  }

  function closeMenu() {
    document.body.classList.remove("menu--open");
  }
  return (
    <>
      <div id="nav" className="row nav__row">
        
          <Link to="/">
            <img src={mainLogo} alt="" className="logo" />
          </Link> 
          <ul className="nav__link--list">
            <li>
              <Link to="/" className="nav__link click">
                Home
              </Link> 
            </li>
            <li>
              <Link to="/countries" className="nav__link click nav__link--countries">
                Countries List
              </Link> 
            </li>
            <li className="nav__icon">
              <Link to="/" className="nav__link nav__message">
                <FontAwesomeIcon icon="message" />
              </Link>
            </li>
          </ul>
          <button className="btn__menu">
            <FontAwesomeIcon icon="bars" onClick={openMenu} />
          </button>

          <div className="menu__backdrop">
            <button className="btn__menu btn__menu--close">
              <FontAwesomeIcon icon="times" onClick={closeMenu} />
            </button>
            <ul className="menu__links">
              <li className="menu__list">
                <Link to="/" className="menu__link" onClick={closeMenu}>
                  Home
                </Link> 
              </li>
              <li className="menu__list">
                <Link to="/countries" className="menu__link" onClick={closeMenu}>
                  Countries List
                </Link> 
              </li>
              <li className="menu__list">
                <Link to="/" className="menu__link no-cursor">
                  Contact Us
                </Link> 
              </li>
            </ul>
          </div>
        
      </div>
    </>
  );
};

export default Nav;
