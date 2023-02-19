import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './history.css'

const History = (props) => {
  return (
    <div className={`history-container ${props.rootClassName} `}>
      <div className="history-container1">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="history-image"
        />
        <h1 className="history-text">{props.heading}</h1>
        <span className="history-text1">{props.text}</span>
        <span className="history-text2">{props.text1}</span>
        <span className="history-text3">{props.text2}</span>
        <svg viewBox="0 0 1024 1024" className="history-icon">
          <path
            d="M214 854h596v84h-596v-84zM426 342q0 36 25 60t61 24 61-24 25-60q0-34-26-60t-60-26-60 26-26 60zM768 342q0 86-64 203t-128 191l-64 74q-28-30-71-82t-114-176-71-210q0-106 75-181t181-75 181 75 75 181z"
            className=""
          ></path>
        </svg>
        <Link to="/comment-page" className="history-navlink button">
          {props.button}
        </Link>
        <div className="history-s-t-a-r">
          <svg viewBox="0 0 1024 1024" className="history-icon02">
            <path
              d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="history-icon04">
            <path
              d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="history-icon06">
            <path
              d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="history-icon08">
            <path
              d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="history-icon10">
            <path
              d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
    </div>
  )
}

History.defaultProps = {
  heading: 'ชื่อสถานที่',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text: 'แพ็คเกจ',
  rootClassName: '',
  text1: '10/02/2566',
  button: 'แสดงความคิดเห็น',
  text2: 'ที่อยู่',
  image_alt: 'image',
}

History.propTypes = {
  heading: PropTypes.string,
  image_src: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  button: PropTypes.string,
  text2: PropTypes.string,
  image_alt: PropTypes.string,
}

export default History
