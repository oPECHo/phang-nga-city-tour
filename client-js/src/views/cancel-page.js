import React from 'react'

import { Helmet } from 'react-helmet'

import Cancel from '../components/cancel'
import BlueNavBar1 from '../components/blue-nav-bar1'
import './cancel-page.css'

const CancelPage = (props) => {
  return (
    <div className="cancel-page-container">
      <Helmet>
        <title>CancelPage - Phang-Nga-City-Tour</title>
        <meta property="og:title" content="CancelPage - Phang-Nga-City-Tour" />
      </Helmet>
      <Cancel rootClassName="cancel-root-class-name"></Cancel>
      <BlueNavBar1 rootClassName="blue-nav-bar1-root-class-name"></BlueNavBar1>
    </div>
  )
}

export default CancelPage
