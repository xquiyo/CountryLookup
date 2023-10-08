import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CountryCard from "./ui/CountryCard.jsx";
import CountrySort from "./ui/CountrySort.jsx";

const CountrySearch = () => {
  const [searchName, setSearchName] = useState("");
  const [countryData, setCountryData] = useState(null);
  const [error, setError] = useState(null);
  const [isSortSelectVisible, setIsSortSelectVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    if (countryData && searchName) {
      const filtered = countryData.filter((country) =>
        country.name.common.toLowerCase().startsWith(searchName)
      );
      setFilteredCountries(filtered);
      setIsSortSelectVisible(true);
    } else {
      setFilteredCountries(null);
      setIsSortSelectVisible(false);
    }
  }, [searchName, countryData]);

  async function fetchCountryData() {
    setIsLoading(true);
    try {
      const { data } = await axios.get(
        `https://restcountries.com/v3.1/name/${searchName}`
      );
      console.log(data);
      setCountryData(data);
      setError(null);
    } catch (error) {
      setCountryData([]);
      setError(`That country you searched does not exist`);
      setFilteredCountries(null);
      setIsSortSelectVisible(false);
    } finally {
      setIsLoading(false);
    }
  }

  function onSearch() {
    setIsLoading(true);
    setTimeout(() => {
      fetchCountryData();
    }, 500);
  }

  return (
    <>
      <div className="row search-sort__wrapper">
        <div className="search__wrapper">
          <div className="search">
            <input
              id="search-bar"
              className="search__input"
              type="search"
              placeholder="Search your favorite country"
              data-search
              required
              value={searchName}
              onChange={(event) => {
                console.log("Search term:", event.target.value);
                setSearchName(event.target.value);
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  onSearch();
                }
              }}
            />
            <button className="search__icon--wrapper" onClick={onSearch}>
              <FontAwesomeIcon icon="search" className="search__icon" />
            </button>
          </div>

          {isSortSelectVisible && (
            <CountrySort
              filteredCountries={filteredCountries}
              setFilteredCountries={setFilteredCountries}
            />
          )}
        </div>
      </div>
      <div id="countryList" className="row country__list">
        {isLoading ? (
          <FontAwesomeIcon
            icon="spinner"
            spin
            className="country__loading--spinner"
          />
        ) : filteredCountries && filteredCountries.length > 0 ? (
          filteredCountries.map((country) => (
            <div key={country.name.common}>
              <CountryCard country={country} />  
            </div>
          ))
        ) : (
          <p className="orange">{error}</p>
        )}
        
      </div>
    </>
  );
};

export default CountrySearch;
