import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Helmet } from 'react-helmet';
import NavBar from '../components/nav-bar';
import TripCard from '../components/trip-card';
import Search from '../components/search';
import CategoryButton from '../components/category-button';
import './search-page.css';

const SearchPage = (props) => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    async function fetchLocations() {
      try {
        const response = await axios.get('http://localhost:1337/locations');
        setLocations(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchLocations();
  }, []);

  return (
    <div className="search-page-container">
      <Helmet>
        <title>SearchPage - Phang-Nga-City-Tour</title>
        <meta property="og:title" content="SearchPage - Phang-Nga-City-Tour" />
      </Helmet>
      <NavBar rootClassName="nav-bar-root-class-name6"></NavBar>
      <TripCard rootClassName="trip-card-root-class-name4"></TripCard>
      <TripCard rootClassName="trip-card-root-class-name3"></TripCard>
      <TripCard rootClassName="trip-card-root-class-name1"></TripCard>
      <TripCard rootClassName="trip-card-root-class-name2"></TripCard>
      <Search rootClassName="search-root-class-name"></Search>
      <div className="search-page-container1">
        {locations.map((location) => (
          <TripCard key={location.id} location={location} />
        ))}
      </div>
      <CategoryButton rootClassName="category-button-root-class-name"></CategoryButton>
    </div>
  );
};

export default SearchPage;
