import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import GoogleLoginButton from './google-login-button'
import './login.css'

const Login = (props) => {
  return (
    <div className={`login-container ${props.rootClassName} `}>
      <div className="login-pop-up">
        <img
          alt={props.Imagelogin_alt}
          src={props.Imagelogin_src}
          loading="eager"
          className="login-imagelogin"
        />
        <div className="login-container1">
          <h1 className="login-text">
            <span className="">{props.text}</span>
            <br className=""></br>
            <span className="">{props.text1}</span>
          </h1>
        </div>
        <div className="login-container2">
          <h1 className="login-login">{props.login}</h1>
          <input
            type="text"
            placeholder={props.email_placeholder}
            className="login-email input"
          />
          <Link to="/" className="login-navlink button">
            {props.button1}
          </Link>
          <span className="login-email1">{props.email}</span>
          <input
            type="text"
            placeholder={props.pass_placeholder}
            className="login-pass input"
          />
          <span className="login-pass1">{props.pass}</span>
          <GoogleLoginButton
            rootClassName="google-login-button-root-class-name1"
            className=""
          ></GoogleLoginButton>
        </div>
      </div>
    </div>
  )
}

Login.defaultProps = {
  login: 'เข้าสู่ระบบ',
  rootClassName: '',
  email_placeholder: 'อีเมลล์ของคุณ',
  text1: 'Phang-Nga City Tour',
  pass_placeholder: 'รหัสผ่านของคุณ',
  Imagelogin_alt: 'image',
  button1: 'เข้าสู่ระบบ',
  email: 'อีเมลล์',
  Imagelogin_src: '/playground_assets/phangnga-700w.png',
  text: 'Welcome to ',
  pass: 'รหัสผ่าน',
}

Login.propTypes = {
  login: PropTypes.string,
  rootClassName: PropTypes.string,
  email_placeholder: PropTypes.string,
  text1: PropTypes.string,
  pass_placeholder: PropTypes.string,
  Imagelogin_alt: PropTypes.string,
  button1: PropTypes.string,
  email: PropTypes.string,
  Imagelogin_src: PropTypes.string,
  text: PropTypes.string,
  pass: PropTypes.string,
}

export default Login
