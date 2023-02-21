import React from 'react'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import Cancel from '../components/cancel'
import './your-booking-page.css'

const YourBookingPage = (props) => {
  return (
    <div className="your-booking-page-container">
      <Helmet>
        <title>YourBookingPage - Phang-Nga-City-Tour</title>
        <meta
          property="og:title"
          content="YourBookingPage - Phang-Nga-City-Tour"
        />
      </Helmet>
      <NavBar rootClassName="nav-bar-root-class-name9"></NavBar>
      <div className="your-booking-page-container1">
        <Cancel rootClassName="cancel-root-class-name"></Cancel>
      </div>
    </div>
  )
}

export default YourBookingPage
