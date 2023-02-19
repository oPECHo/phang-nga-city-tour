import React from 'react'

import PropTypes from 'prop-types'

import './category-button.css'

const CategoryButton = (props) => {
  return (
    <div className={`category-button-container ${props.rootClassName} `}>
      <div className="category-button-container1">
        <button className="category-button-button button">
          {props.button}
        </button>
        <button className="category-button-button1 button">
          {props.button1}
        </button>
      </div>
    </div>
  )
}

CategoryButton.defaultProps = {
  rootClassName: '',
  button1: 'แพ็คเกจ',
  button: 'ทริปวันเดียว',
}

CategoryButton.propTypes = {
  rootClassName: PropTypes.string,
  button1: PropTypes.string,
  button: PropTypes.string,
}

export default CategoryButton
