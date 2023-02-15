import React from 'react'

import PropTypes from 'prop-types'

import './google-login-button.css'

const GoogleLoginButton = (props) => {
  return (
    <div className={`google-login-button-container ${props.rootClassName} `}>
      <a
        href="http://localhost:1337/api/connect/facebook"
        target="_blank"
        rel="noreferrer noopener"
        className="google-login-button-button button"
      >
        <img
          src={props.image_src}
          alt={props.image_alt}
          className="google-login-button-image"
        />
        <span className="google-login-button-text">{props.text2}</span>
      </a>
    </div>
  )
}

GoogleLoginButton.defaultProps = {
  image_src: '/playground_assets/google-200h.png',
  image_alt: 'image',
  text2: 'เข้าสู่ระบบด้วย Google',
  rootClassName: '',
}

GoogleLoginButton.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default GoogleLoginButton
