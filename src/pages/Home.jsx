import React from 'react';
import Nav from '../components/Nav.jsx'
import Landing from '../components/Landing.jsx';
import CountrySearch from "../components/CountrySearch.jsx"
import Footer from '../components/Footer.jsx';

const Home = () => {
  
    return (
        <>
        <Nav />
        <Landing />
        <CountrySearch />
        <Footer />

        </>
        

    );
}

export default Home;
