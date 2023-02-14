import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

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
            <Link to="/" className="login-navlink1 button">
              {props.button1}
            </Link>
            <img
              alt={props.image_alt}
              src={props.image_src}
              className="login-image"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

Login.defaultProps = {
  email_placeholder: 'อีเมลล์ของคุณนะจ๊ะ',
  button1: '        เข้าสู่ระบบด้วย Google',
  rootClassName: '',
  image_alt: 'image',
  email: 'อีเมลล์',
  pass: 'รหัสผ่าน',
  pass_placeholder: 'รหัสผ่านของคุณ',
  pass1: 'ยังไม่มีบัญชี',
  Imagelogin_src: '/playground_assets/phangnga-700w.png',
  text: 'Welcome to ',
  login: 'เข้าสู่ระบบ',
  text1: 'Phang-Nga City Tour',
  button: 'เข้าสู่ระบบ',
  image_src: '/playground_assets/google-200h.png',
  Imagelogin_alt: 'image',
}

Login.propTypes = {
  email_placeholder: PropTypes.string,
  button1: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  email: PropTypes.string,
  pass: PropTypes.string,
  pass_placeholder: PropTypes.string,
  pass1: PropTypes.string,
  Imagelogin_src: PropTypes.string,
  text: PropTypes.string,
  login: PropTypes.string,
  text1: PropTypes.string,
  button: PropTypes.string,
  image_src: PropTypes.string,
  Imagelogin_alt: PropTypes.string,
}

export default Login
