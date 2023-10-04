import React from "react";
import Header from "../assets/header.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      
        <div className="row header__row">
          <figure className="header__img--wrapper">
            <img className="header__img" src={Header} alt="" />
          </figure>
          <h1 className="header__title">Country Lookup</h1>
          <h3 className="header__subtitle">
            Learn about your country and other countries around the globe.
            Browse countries by regions <Link to="/countrieslist" className="orange" >here.</Link>
          </h3>
        </div>
      
    </>
  );
};

export default Landing;
