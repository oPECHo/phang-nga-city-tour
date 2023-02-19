import React from 'react'

import PropTypes from 'prop-types'

import './trip-card.css'

const TripCard = (props) => {
  return (
    <div className={`trip-card-container ${props.rootClassName} `}>
      <div className="trip-card-container1">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="trip-card-image"
        />
        <svg viewBox="0 0 1024 1024" className="trip-card-icon">
          <path
            d="M214 854h596v84h-596v-84zM426 342q0 36 25 60t61 24 61-24 25-60q0-34-26-60t-60-26-60 26-26 60zM768 342q0 86-64 203t-128 191l-64 74q-28-30-71-82t-114-176-71-210q0-106 75-181t181-75 181 75 75 181z"
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
        <svg viewBox="0 0 1024 1024" className="trip-card-icon10">
          <path
            d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
            className=""
          ></path>
        </svg>
        <svg viewBox="0 0 731.4285714285713 1024" className="trip-card-icon12">
          <path
            d="M731.429 799.429c0 83.429-54.857 151.429-121.714 151.429h-488c-66.857 0-121.714-68-121.714-151.429 0-150.286 37.143-324 186.857-324 46.286 45.143 109.143 73.143 178.857 73.143s132.571-28 178.857-73.143c149.714 0 186.857 173.714 186.857 324zM585.143 292.571c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429z"
            className=""
          ></path>
        </svg>
        <span className="trip-card-text">{props.text}</span>
        <span className="trip-card-text1">{props.text1}</span>
        <span className="trip-card-text2">{props.text2}</span>
        <span className="trip-card-text3">{props.text3}</span>
        <span className="trip-card-text4">{props.text4}</span>
      </div>
      <svg viewBox="0 0 1024 1024" className="trip-card-icon14">
        <path
          d="M214 854h596v84h-596v-84zM426 342q0 36 25 60t61 24 61-24 25-60q0-34-26-60t-60-26-60 26-26 60zM768 342q0 86-64 203t-128 191l-64 74q-28-30-71-82t-114-176-71-210q0-106 75-181t181-75 181 75 75 181z"
          className=""
        ></path>
      </svg>
      <svg viewBox="0 0 1024 1024" className="trip-card-icon16">
        <path
          d="M214 854h596v84h-596v-84zM426 342q0 36 25 60t61 24 61-24 25-60q0-34-26-60t-60-26-60 26-26 60zM768 342q0 86-64 203t-128 191l-64 74q-28-30-71-82t-114-176-71-210q0-106 75-181t181-75 181 75 75 181z"
          className=""
        ></path>
      </svg>
    </div>
  )
}

TripCard.defaultProps = {
  text: 'ชื่อสถานที่',
  image_alt: 'image',
  rootClassName: '',
  text4: '10/20',
  text1: 'แพ็คเกจ',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text2: '729.00 บาท/ท่าน',
  text3: 'ที่อยู่',
}

TripCard.propTypes = {
  text: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  text4: PropTypes.string,
  text1: PropTypes.string,
  image_src: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
}

export default TripCard
