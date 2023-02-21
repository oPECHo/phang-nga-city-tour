import React from 'react'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import PaymentComplete from '../components/payment-complete'
import './payment-success.css'

const PaymentSuccess = (props) => {
  return (
    <div className="payment-success-container">
      <Helmet>
        <title>PaymentSuccess - Phang-Nga-City-Tour</title>
        <meta
          property="og:title"
          content="PaymentSuccess - Phang-Nga-City-Tour"
        />
      </Helmet>
      <NavBar rootClassName="nav-bar-root-class-name11"></NavBar>
      <PaymentComplete rootClassName="payment-complete-root-class-name"></PaymentComplete>
    </div>
  )
}

export default PaymentSuccess
