import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './cancel.css'

const Cancel = (props) => {
  return (
    <div className={`cancel-container ${props.rootClassName} `}>
      <div className="cancel-container1">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="cancel-image"
        />
        <h1 className="cancel-text">{props.heading}</h1>
        <span className="cancel-text1">{props.text}</span>
        <span className="cancel-text2">{props.text1}</span>
        <span className="cancel-text3">{props.text2}</span>
        <svg viewBox="0 0 1024 1024" className="cancel-icon">
          <path
            d="M214 854h596v84h-596v-84zM426 342q0 36 25 60t61 24 61-24 25-60q0-34-26-60t-60-26-60 26-26 60zM768 342q0 86-64 203t-128 191l-64 74q-28-30-71-82t-114-176-71-210q0-106 75-181t181-75 181 75 75 181z"
            className=""
          ></path>
        </svg>
        <Link to="/comment-page" className="cancel-navlink button">
          {props.button}
        </Link>
      </div>
    </div>
  )
}

Cancel.defaultProps = {
  button: 'ยกเลิกการจอง',
  text2: 'ที่อยู่',
  image_alt: 'image',
  text: 'แพ็คเกจ',
  heading: 'ชื่อสถานที่',
  rootClassName: '',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text1: '10/02/2566',
}

Cancel.propTypes = {
  button: PropTypes.string,
  text2: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  text1: PropTypes.string,
}

export default Cancel
