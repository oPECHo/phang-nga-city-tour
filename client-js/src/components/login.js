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
          <div className="login-container3">
            <h1 className="login-login">{props.login}</h1>
            <input
              type="text"
              placeholder={props.email_placeholder}
              className="login-email input"
            />
            <span className="login-email1">{props.email}</span>
            <input
              type="text"
              placeholder={props.pass_placeholder}
              className="login-pass input"
            />
            <span className="login-pass1">{props.pass}</span>
            <Link to="/register-page" className="login-pass2">
              {props.pass1}
            </Link>
            <Link to="/" className="login-navlink button">
              {props.button}
            </Link>
            <GoogleLoginButton
              rootClassName="google-login-button-root-class-name"
              className=""
            ></GoogleLoginButton>
          </div>
        </div>
      </div>
    </div>
  )
}

Login.defaultProps = {
  email_placeholder: 'อีเมลล์ของคุณ',
  rootClassName: '',
  email: 'อีเมลล์',
  pass: 'รหัสผ่าน',
  pass_placeholder: 'รหัสผ่านของคุณ',
  pass1: 'ยังไม่มีบัญชี',
  Imagelogin_src: '/playground_assets/phangnga-700w.png',
  text: 'Welcome to ',
  login: 'เข้าสู่ระบบ',
  text1: 'Phang-Nga City Tour',
  button: 'เข้าสู่ระบบ',
  Imagelogin_alt: 'image',
}

Login.propTypes = {
  email_placeholder: PropTypes.string,
  rootClassName: PropTypes.string,
  email: PropTypes.string,
  pass: PropTypes.string,
  pass_placeholder: PropTypes.string,
  pass1: PropTypes.string,
  Imagelogin_src: PropTypes.string,
  text: PropTypes.string,
  login: PropTypes.string,
  text1: PropTypes.string,
  button: PropTypes.string,
  Imagelogin_alt: PropTypes.string,
}

export default Login
