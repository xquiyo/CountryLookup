import React from "react";

const CountrySort = ({ filteredCountries, setFilteredCountries }) => {
  const filterCountries = (filter) => {
    let sortedCountries = [];

     if (filter === "A_TO_Z") {
      sortedCountries = filteredCountries
        .slice()
        .sort((a, b) => a.name.common.toLowerCase().localeCompare(b.name.common));
    } else if (filter === "Z_TO_A") {
      sortedCountries = filteredCountries
        .slice()
        .sort((a, b) => b.name.common.toLowerCase().localeCompare(a.name.common));
    } else if (filter === "LOW_TO_HIGH") {
      sortedCountries = filteredCountries
        .slice()
        .sort((a, b) => a.population - b.population);
    } else if (filter === "HIGH_TO_LOW") {
      sortedCountries = filteredCountries
        .slice()
        .sort((a, b) => b.population - a.population);
    }

    setFilteredCountries(sortedCountries);
  };

  return (
    <div className="sort">
      <select
        id="filter"
        className="sort__wrapper"
        defaultValue="DEFAULT"
        onChange={(event) => filterCountries(event.target.value)}
      >
        <option value="DEFAULT" disabled>
          Sort
        </option>
        <option value="A_TO_Z">Alphabetical, A to Z</option>
        <option value="Z_TO_A">Alphabetical, Z to A</option>
        <option value="LOW_TO_HIGH">Population, Low to High</option>
        <option value="HIGH_TO_LOW">Population, High to Low</option>
      </select>
    </div>
  );
};

export default CountrySort;
