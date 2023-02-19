import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './payment-complete.css'

const PaymentComplete = (props) => {
  return (
    <div className="payment-complete-container">
      <svg viewBox="0 0 1024 1024" className="payment-complete-icon">
        <path d="M426 726l384-384-60-62-324 324-152-152-60 60zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
      </svg>
      <span className="payment-complete-text">{props.text}</span>
      <Link to="/" className="payment-complete-navlink button">
        {props.button}
      </Link>
    </div>
  )
}

PaymentComplete.defaultProps = {
  text: 'ชำระเงินเสร็จสิ้น',
  button: 'กลับไปยังหน้าหลัก',
}

PaymentComplete.propTypes = {
  text: PropTypes.string,
  button: PropTypes.string,
}

export default PaymentComplete
