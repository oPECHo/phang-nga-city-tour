import React from 'react'

import { Helmet } from 'react-helmet'

import BlueNavBar1 from '../components/blue-nav-bar1'
import Payment from '../components/payment'
import './payment-page.css'

const PaymentPage = (props) => {
  return (
    <div className="payment-page-container">
      <Helmet>
        <title>PaymentPage - Phang-Nga-City-Tour</title>
        <meta property="og:title" content="PaymentPage - Phang-Nga-City-Tour" />
      </Helmet>
      <BlueNavBar1 rootClassName="blue-nav-bar1-root-class-name3"></BlueNavBar1>
      <Payment rootClassName="payment-root-class-name"></Payment>
    </div>
  )
}

export default PaymentPage
