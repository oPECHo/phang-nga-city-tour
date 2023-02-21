import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './register.css'

const Register = (props) => {
  return (
    <div className={`register-container ${props.rootClassName} `}>
      <div className="register-pop-up">
        <img
          alt={props.Imagelogin_alt}
          src={props.Imagelogin_src}
          loading="eager"
          className="register-imagelogin"
        />
        <div className="register-container1">
          <h1 className="register-text">
            <span className="">{props.text}</span>
            <br className=""></br>
            <span className="">{props.text1}</span>
          </h1>
        </div>
        <div className="register-container2">
          <h1 className="register-login">{props.login}</h1>
          <input
            type="text"
            placeholder={props.email_placeholder}
            className="register-email input"
          />
          <span className="register-email1">{props.email}</span>
          <input
            type="text"
            placeholder={props.pass_placeholder}
            className="register-pass input"
          />
          <span className="register-pass1">{props.pass}</span>
          <span className="register-pass2">{props.pass2}</span>
          <Link to="/login-page" className="register-navlink button">
            {props.button}
          </Link>
          <input
            type="text"
            placeholder={props.textinput_placeholder}
            className="register-pass2input input"
          />
        </div>
      </div>
    </div>
  )
}

Register.defaultProps = {
  login: 'ลงทะเบียน',
  pass: 'รหัสผ่าน',
  text1: 'Phang-Nga City Tour',
  rootClassName: '',
  pass_placeholder: 'รหัสผ่านของคุณ',
  pass2: 'ยืนยันรหัสผ่าน',
  Imagelogin_alt: 'image',
  button: 'ลงทะเบียน',
  Imagelogin_src: '/playground_assets/phangnga-700w.png',
  text: 'Welcome to ',
  email: 'อีเมลล์',
  textinput_placeholder: 'ยืนยันรหัสผ่านของคุณ',
  email_placeholder: 'อีเมลล์ของคุณ',
}

Register.propTypes = {
  login: PropTypes.string,
  pass: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  pass_placeholder: PropTypes.string,
  pass2: PropTypes.string,
  Imagelogin_alt: PropTypes.string,
  button: PropTypes.string,
  Imagelogin_src: PropTypes.string,
  text: PropTypes.string,
  email: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  email_placeholder: PropTypes.string,
}

export default Register
