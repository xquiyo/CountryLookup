import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CountryInfo = () => {
  const { name } = useParams();
  const [info, setInfo] = useState([]);

  useEffect(() => {
    async function fetchCountryInfo(countryName) {
      try {
        const { data } = await axios.get(
          `https://restcountries.com/v3.1/name/${countryName || name}`
        );
        setInfo(data);
      } catch (error) {
        console.error('Error fetching country info:', error);
      }
    }

    fetchCountryInfo();
  }, [name]);

  return (
    <>
      <Nav />
      
        {info.map((country, index) => (
          <div className="row info__row" key={index}>
          <Link to="/" className="country__arrow">
            <FontAwesomeIcon icon="arrow-left" />
            <h1 className="info__header--title">Back</h1>
          </Link>
          <div className="country__selected--container">
            <div className="country__selected">
              <figure className="country__selected--img--wrapper">
              <img className="country__selected--img" src={country.flags.png} alt="" />
              </figure>
              <div className="country__selected--description">
                <h2 className="country__selected--title">
                  {country.name?.common}
                </h2>

                <div className="country__deets">Official name:</div> 
                <span className="country__selected--details">
                  {country.name?.official}
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
                <div className="country__deets">Timezone: </div>
                <span className="country__selected--details">
                 {country.timezones}
                </span>
                <Link
                  to="https://goo.gl/maps/p9qC6vgiFRRXzvGi7"
                  target="_blank"
                  className="country__selected--details--link"
                >
                  Click this link to find it on your map!
                </Link>
              </div>
            </div>
          </div>
        </div>
        ))}

      <Footer />
    </>
  );
};

export default CountryInfo;