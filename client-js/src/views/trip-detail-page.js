import React from 'react'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import TripDetailCard from '../components/trip-detail-card'
import './trip-detail-page.css'

const TripDetailPage = (props) => {
  return (
    <div className="trip-detail-page-container">
      <Helmet>
        <title>TripDetailPage - Phang-Nga-City-Tour</title>
        <meta
          property="og:title"
          content="TripDetailPage - Phang-Nga-City-Tour"
        />
      </Helmet>
      <NavBar rootClassName="nav-bar-root-class-name3"></NavBar>
      <TripDetailCard rootClassName="trip-detail-card-root-class-name"></TripDetailCard>
    </div>
  )
}

export default TripDetailPage
