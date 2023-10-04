import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "../components/Nav.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AllCountries from "../components/AllCountries.jsx";
import Footer from "../components/Footer.jsx"


const CountriesList = () => {
    return (
        <>
        <Nav />
        <AllCountries />
        <Footer />
        </>
    )
}
export default CountriesList;
