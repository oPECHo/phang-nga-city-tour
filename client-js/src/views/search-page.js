import React from 'react'

import { Helmet } from 'react-helmet'

import TripCard from '../components/trip-card'
import NavBar from '../components/nav-bar'
import CategoryButton from '../components/category-button'
import Search from '../components/search'
import './search-page.css'

const SearchPage = (props) => {
  return (
    <div className="search-page-container">
      <Helmet>
        <title>SearchPage - Phang-Nga-City-Tour</title>
        <meta property="og:title" content="SearchPage - Phang-Nga-City-Tour" />
      </Helmet>
      <TripCard rootClassName="trip-card-root-class-name4"></TripCard>
      <TripCard rootClassName="trip-card-root-class-name3"></TripCard>
      <TripCard rootClassName="trip-card-root-class-name1"></TripCard>
      <TripCard rootClassName="trip-card-root-class-name2"></TripCard>
      <NavBar rootClassName="nav-bar-root-class-name1"></NavBar>
      <CategoryButton rootClassName="category-button-root-class-name"></CategoryButton>
      <Search rootClassName="search-root-class-name"></Search>
    </div>
  )
}

export default SearchPage
