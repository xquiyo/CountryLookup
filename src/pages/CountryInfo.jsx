import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CountryInfo = () => {
  const { name } = useParams();
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchCountryInfo(countryName) {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `https://restcountries.com/v3.1/name/${countryName || name}`
        );
        setTimeout(() => {
          setInfo(data);
          setLoading(false);
        }, 500);
      } catch (error) {
        console.error("Error fetching country info:", error);
      }
    }

    fetchCountryInfo();
  }, [name]);

  return (
    <>
      <Nav />
      <div className="row">
        <Link to="/countries" className="country__arrow">
          <FontAwesomeIcon icon="arrow-left" />
          <h1 className="info__header--title">Countries</h1>
        </Link>
      
      {loading
        ?  (<FontAwesomeIcon
        icon="spinner"
        spin
        className="country__loading--spinner--info"
      />
          )
        : info.map((country, index) => (
            <div className="row info__row" key={index}>
              <div className="country__selected--container">
                <div className="country__selected">
                  <figure className="country__selected--img--wrapper">
                    <img
                      className="country__selected--img"
                      src={country.flags.png}
                      alt=""
                    />
                  </figure>
                  <div className="country__selected--description">
                    <h2 className="country__selected--title">
                      {country.name.common}
                    </h2>

                    <div className="country__deets">Official Country Name:</div>
                    <span className="country__selected--details">
                      {country.name.official}
                    </span>

                    <div className="country__deets">Capital City:</div>
                    <span className="country__selected--details">
                      {country.capital}
                    </span>
                    <div className="country__deets"> Region </div>
                    <span className="country__selected--details">
                      {country.region}
                    </span>
                    <div className="country__deets">Population: </div>
                    <span className="country__selected--details">
                      {country.population}
                    </span>
                    <div className="country__deets">Timezones: </div>
                    <span className="country__selected--details">
                      {country.timezones}
                    </span>
                    <Link
                      to={country.maps.googleMaps}
                      target="_blank"
                      className="country__selected--details--link"
                    >
                      Click this link to find it on your map!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}</div>
      <Footer />
    </>
  );
};

export default CountryInfo;
