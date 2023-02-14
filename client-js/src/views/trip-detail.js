import React from 'react'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import TripCard from '../components/trip-card'
import './trip-detail.css'

const TripDetail = (props) => {
  return (
    <div className="trip-detail-container">
      <Helmet>
        <title>TripDetail - Phang-Nga-City-Tour</title>
        <meta property="og:title" content="TripDetail - Phang-Nga-City-Tour" />
      </Helmet>
      <NavBar rootClassName="nav-bar-root-class-name3"></NavBar>
      <TripCard rootClassName="trip-card-root-class-name"></TripCard>
    </div>
  )
}

export default TripDetail
