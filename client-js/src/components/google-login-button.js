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
          alt={props.image_alt}
          src={props.image_src}
          className="google-login-button-image"
        />
        <span className="google-login-button-text">{props.text2}</span>
      </a>
    </div>
  )
}

GoogleLoginButton.defaultProps = {
  rootClassName: '',
  image_alt: 'image',
  image_src: '/playground_assets/google-200h.png',
  text2: 'เข้าสู่ระบบด้วย Google',
}

GoogleLoginButton.propTypes = {
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  text2: PropTypes.string,
}

export default GoogleLoginButton
