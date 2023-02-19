import React from 'react'

import { Helmet } from 'react-helmet'

import Cancel from '../components/cancel'
import BlueNavBar1 from '../components/blue-nav-bar1'
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
      <Cancel rootClassName="cancel-root-class-name"></Cancel>
      <BlueNavBar1 rootClassName="blue-nav-bar1-root-class-name"></BlueNavBar1>
    </div>
  )
}

export default YourBookingPage
