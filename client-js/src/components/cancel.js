import React from 'react'

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
        <button className="cancel-button button">{props.button}</button>
        <svg viewBox="0 0 1024 1024" className="cancel-icon">
          <path
            d="M214 854h596v84h-596v-84zM426 342q0 36 25 60t61 24 61-24 25-60q0-34-26-60t-60-26-60 26-26 60zM768 342q0 86-64 203t-128 191l-64 74q-28-30-71-82t-114-176-71-210q0-106 75-181t181-75 181 75 75 181z"
            className=""
          ></path>
        </svg>
        <div className="cancel-s-t-a-r">
          <svg viewBox="0 0 1024 1024" className="cancel-icon02">
            <path
              d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="cancel-icon04">
            <path
              d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="cancel-icon06">
            <path
              d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="cancel-icon08">
            <path
              d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="cancel-icon10">
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

Cancel.defaultProps = {
  text2: 'ที่อยู่',
  text1: '10/02/2566',
  button: 'ยกเลิกการจอง',
  image_alt: 'image',
  rootClassName: '',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text: 'แพ็คเกจ',
  heading: 'ชื่อสถานที่',
}

Cancel.propTypes = {
  text2: PropTypes.string,
  text1: PropTypes.string,
  button: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  text: PropTypes.string,
  heading: PropTypes.string,
}

export default Cancel
