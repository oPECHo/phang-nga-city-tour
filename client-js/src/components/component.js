import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className="component-container">
      <svg viewBox="0 0 1024 1024" className="component-icon">
        <path d="M426 726l384-384-60-62-324 324-152-152-60 60zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
      </svg>
      <span className="component-text">{props.text}</span>
      <Link to="/" className="component-navlink button">
        {props.button}
      </Link>
    </div>
  )
}

AppComponent.defaultProps = {
  text: 'ชำระเงินเสร็จสิ้น',
  button: 'กลับไปยังหน้าหลัก',
}

AppComponent.propTypes = {
  text: PropTypes.string,
  button: PropTypes.string,
}

export default AppComponent
