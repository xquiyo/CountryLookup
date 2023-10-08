import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const CountryCard = ({ country }) => {
  const [modal, setModal] = useState(false);

  function toggleModal() {
    setModal(!modal);

    if (!modal) {
      const searchBar = document.getElementById("nav");
      if (searchBar) {
        searchBar.scrollIntoView({ behavior: "smooth" });
      }

      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }
  }

  return (
    <>
    
      <div className="country__list">
        <div className="country__wrapper" key={country.name.common}>
          <div id="flag-info-section" className="country">
            <figure className="country__img--wrapper">
              <Link
                to={{
                  pathname: `/countries/${country.name.common}`,
                  state: { countryData: country },
                }}
              >
                <img className="country__img" src={country.flags.png} alt="" />
              </Link>
            </figure>

            <h4 className="country__name">{country.name.common}</h4>
            <p className="country__desc">Capital: {country.capital}</p>
            <Link
              to={country.maps.googleMaps}
              target="_blank"
              className="link country__desc"
            >
              Click here to find exact location!
            </Link>
            <button className="card__btn" onClick={toggleModal}>
              Flag info
            </button>
            <Link
              to={{
                pathname: `/countries/${country.name.common}`,
                state: { countryData: country },
              }}
              className="card__btn"
            >
              More Info about this country
            </Link>
          </div>
        </div>
      </div>

      {modal && (
        <div className="modal">
          <div className="modal__content" onClick={toggleModal}>
            <FontAwesomeIcon
              icon="times"
              className="close-modal"
              onClick={toggleModal}
            />
            <div className="flag-info__container">
              <figure className="modal-country__img--wrapper">
                <img
                  className="modal-country__img"
                  src={country.flags.png}
                  alt=""
                />
              </figure>

              <h4 className="modal-country__name">{country.name.common}</h4>
              <p className="modal-flag__desc">
                {country.flags.alt
                  ? country.flags.alt
                  : "No information about this flag"}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CountryCard;
