import React from 'react'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import TripCard from '../components/trip-card'
import Search from '../components/search'
import CategoryButton from '../components/category-button'
import './search-page.css'

const SearchPage = (props) => {
  return (
    <div className="search-page-container">
      <Helmet>
        <title>SearchPage - Phang-Nga-City-Tour</title>
        <meta property="og:title" content="SearchPage - Phang-Nga-City-Tour" />
      </Helmet>
      <NavBar rootClassName="nav-bar-root-class-name6"></NavBar>
  


      <Search rootClassName="search-root-class-name"></Search>
      <div className="search-page-container1"></div>
      <CategoryButton rootClassName="category-button-root-class-name"></CategoryButton>
    </div>
  )
}

export default SearchPage
