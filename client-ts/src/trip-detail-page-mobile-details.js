import React from 'react'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import PageMobileDetails from '../components/page-mobile-details'
import './trip-detail-page-mobile-details.css'

const TripDetailPageMobileDetails = (props) => {
  return (
    <div className="trip-detail-page-mobile-details-container">
      <Helmet>
        <title>TripDetailPageMobileDetails - Phang-Nga-City-Tour</title>
        <meta
          property="og:title"
          content="TripDetailPageMobileDetails - Phang-Nga-City-Tour"
        />
      </Helmet>
      <NavBar rootClassName="nav-bar-root-class-name10"></NavBar>
      <PageMobileDetails rootClassName="page-mobile-details-root-class-name"></PageMobileDetails>
    </div>
  )
}

export default TripDetailPageMobileDetails
