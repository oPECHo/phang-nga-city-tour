import React from 'react'

import PropTypes from 'prop-types'

import './trip-card.css'

const TripCard = (props) => {
  return (
    <div className={`trip-card-container ${props.rootClassName} `}>
      <div className="trip-card-container1">
        <img
          src="https://play.teleporthq.io/static/svg/default-img.svg"
          className="trip-card-image"
        />
        <h1 className="trip-card-text">{props.heading}</h1>
        <button className="trip-card-button button">{props.button}</button>
        <div className="trip-card-s-t-a-r">
          <svg viewBox="0 0 1024 1024" className="trip-card-icon">
            <path
              d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="trip-card-icon02">
            <path
              d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="trip-card-icon04">
            <path
              d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="trip-card-icon06">
            <path
              d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="trip-card-icon08">
            <path
              d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
              className=""
            ></path>
          </svg>
        </div>
        <svg viewBox="0 0 1024 1024" className="trip-card-pin">
          <path
            d="M214 854h596v84h-596v-84zM426 342q0 36 25 60t61 24 61-24 25-60q0-34-26-60t-60-26-60 26-26 60zM768 342q0 86-64 203t-128 191l-64 74q-28-30-71-82t-114-176-71-210q0-106 75-181t181-75 181 75 75 181z"
            className=""
          ></path>
        </svg>
        <span className="trip-card-text1">{props.text}</span>
        <h1 className="trip-card-text2">{props.heading1}</h1>
        <span className="trip-card-text3">{props.text1}</span>
        <input
          type="text"
          placeholder={props.textinput_placeholder}
          className="trip-card-textinput input"
        />
      </div>
    </div>
  )
}

TripCard.defaultProps = {
  textinput_placeholder: 'placeholder',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  heading1: 'รายละเอียด',
  text1: 'Direction Link',
  button: 'จองเลย!',
  image_alt: 'image',
  heading: 'ชื่อสถานที่',
  rootClassName: '',
  text: 'ที่อยู่',
}

TripCard.propTypes = {
  textinput_placeholder: PropTypes.string,
  image_src: PropTypes.string,
  heading1: PropTypes.string,
  text1: PropTypes.string,
  button: PropTypes.string,
  image_alt: PropTypes.string,
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default TripCard
