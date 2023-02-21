import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className={`component-container ${props.rootClassName} `}>
      <svg viewBox="0 0 1024 1024" className="component-icon">
        <path
          d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
          className=""
        ></path>
      </svg>
      <svg viewBox="0 0 1024 1024" className="component-icon02">
        <path
          d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
          className=""
        ></path>
      </svg>
      <svg viewBox="0 0 1024 1024" className="component-icon04">
        <path
          d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
          className=""
        ></path>
      </svg>
      <svg viewBox="0 0 1024 1024" className="component-icon06">
        <path
          d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
          className=""
        ></path>
      </svg>
      <svg viewBox="0 0 1024 1024" className="component-icon08">
        <path
          d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
          className=""
        ></path>
      </svg>
    </div>
  )
}

AppComponent.defaultProps = {
  rootClassName: '',
}

AppComponent.propTypes = {
  rootClassName: PropTypes.string,
}

export default AppComponent
