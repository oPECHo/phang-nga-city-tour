import React from 'react'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import Payment from '../components/payment'
import './payment-page.css'

const PaymentPage = (props) => {
  return (
    <div className="payment-page-container">
      <Helmet>
        <title>PaymentPage - Phang-Nga-City-Tour</title>
        <meta property="og:title" content="PaymentPage - Phang-Nga-City-Tour" />
      </Helmet>
      <NavBar rootClassName="nav-bar-root-class-name7"></NavBar>
      <Payment rootClassName="payment-root-class-name"></Payment>
    </div>
  )
}

export default PaymentPage
