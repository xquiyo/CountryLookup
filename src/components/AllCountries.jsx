import React, { useState, useEffect } from "react";
import axios from "axios";
import CountryCard from "./ui/CountryCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CountrySort from "./ui/CountrySort";

const AllCountries = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sortFilter, setSortFilter] = useState("DEFAULT");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get("https://restcountries.com/v3.1/all");

        const filteredCountries = data.filter((country) => country.name.common);
        filteredCountries.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );

        setCountries(filteredCountries);
        setError(null);
      } catch (error) {
        setError("Error fetching");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCountries();
  }, []);


  return (
    <div className="row">
      <div className="region__header--wrapper">
        <h1 className="region__header">All Countries</h1>
        <CountrySort
          filteredCountries={countries}
          setFilteredCountries={setCountries} 
          currentFilter={sortFilter}
        />
      </div>
      <div className="region">
        {isLoading ? (
          <FontAwesomeIcon
            icon="spinner"
            spin
            className="country__loading--spinner"
          />
        ) : (
          <div className="country__list">
            {countries.map((country) => (
              <CountryCard key={country.name.common} country={country} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllCountries;
