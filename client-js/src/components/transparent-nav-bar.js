import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './transparent-nav-bar.css'

const TransparentNavBar = (props) => {
  return (
    <div className={`transparent-nav-bar-container ${props.rootClassName} `}>
      <header
        data-thq="thq-navbar"
        className="transparent-nav-bar-navbar-interactive"
      >
        <div className="transparent-nav-bar-container1">
          <Link to="/" className="transparent-nav-bar-navlink">
            <img
              alt={props.Logo_alt}
              src={props.Logo_src}
              className="transparent-nav-bar-logo"
            />
          </Link>
        </div>
        <div
          data-thq="thq-navbar-nav"
          data-role="Nav"
          className="transparent-nav-bar-desktop-menu"
        >
          <nav
            data-thq="thq-navbar-nav-links"
            data-role="Nav"
            className="transparent-nav-bar-nav"
          >
            <Link to="/" className="transparent-nav-bar-navlink1">
              {props.text}
            </Link>
            <span className="transparent-nav-bar-text">{props.text1}</span>
            <Link
              to="/your-booking-page"
              className="transparent-nav-bar-navlink2"
            >
              {props.text2}
            </Link>
            <Link to="/history-page" className="transparent-nav-bar-navlink3">
              {props.text3}
            </Link>
            <Link to="/search-page" className="transparent-nav-bar-navlink4">
              {props.text4}
            </Link>
          </nav>
        </div>
        <div
          data-thq="thq-navbar-btn-group"
          className="transparent-nav-bar-btn-group"
        >
          <Link to="/login-page" className="transparent-nav-bar-login button">
            {props.Login}
          </Link>
          <Link
            to="/register-page"
            className="transparent-nav-bar-register button"
          >
            {props.Register}
          </Link>
        </div>
        <div
          data-thq="thq-burger-menu"
          className="transparent-nav-bar-burger-menu"
        >
          <svg viewBox="0 0 1024 1024" className="transparent-nav-bar-icon">
            <path
              d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
              className=""
            ></path>
          </svg>
        </div>
        <div
          data-thq="thq-mobile-menu"
          className="transparent-nav-bar-mobile-menu"
        >
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="transparent-nav-bar-nav1"
          >
            <div className="transparent-nav-bar-container2">
              <img
                alt={props.image_alt}
                src={props.image_src}
                className="transparent-nav-bar-image"
              />
              <div
                data-thq="thq-close-menu"
                className="transparent-nav-bar-menu-close"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="transparent-nav-bar-icon2"
                >
                  <path
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                    className=""
                  ></path>
                </svg>
              </div>
            </div>
            <nav
              data-thq="thq-mobile-menu-nav-links"
              data-role="Nav"
              className="transparent-nav-bar-nav2"
            >
              <Link to="/" className="transparent-nav-bar-navlink5">
                {props.text5}
              </Link>
              <span className="transparent-nav-bar-text1">{props.text6}</span>
              <Link
                to="/your-booking-page"
                className="transparent-nav-bar-navlink6"
              >
                {props.text7}
              </Link>
              <Link to="/history-page" className="transparent-nav-bar-navlink7">
                {props.text8}
              </Link>
              <Link to="/search-page" className="transparent-nav-bar-navlink8">
                {props.text9}
              </Link>
              <div className="transparent-nav-bar-container3">
                <Link
                  to="/login-page"
                  className="transparent-nav-bar-login1 button"
                >
                  {props.Login1}
                </Link>
                <Link
                  to="/register-page"
                  className="transparent-nav-bar-register1 button"
                >
                  {props.Register1}
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </div>
  )
}

TransparentNavBar.defaultProps = {
  Login1: 'เข้าสู่ระบบ',
  Login: 'เข้าสู่ระบบ',
  rootClassName: '',
  text3: 'ประวัติ',
  text: 'หน้าหลัก',
  image_alt: 'image',
  Logo_src: '/playground_assets/phang-nga%20city%20tour-w-200h.png',
  image_src: '/playground_assets/phang-nga%20city%20tour-1500h.png',
  Logo_alt: 'logo',
  text2: 'ทัวร์ของคุณ',
  text8: 'ประวัติ',
  text1: 'หมวดหมู่',
  text5: 'หน้าหลัก',
  Register1: 'ลงทะเบียน',
  text7: 'ทัวร์ของคุณ',
  text4: 'ค้นหา',
  Register: 'ลงทะเบียน',
  text6: 'หมวดหมู่',
  text9: 'ค้นหา',
}

TransparentNavBar.propTypes = {
  Login1: PropTypes.string,
  Login: PropTypes.string,
  rootClassName: PropTypes.string,
  text3: PropTypes.string,
  text: PropTypes.string,
  image_alt: PropTypes.string,
  Logo_src: PropTypes.string,
  image_src: PropTypes.string,
  Logo_alt: PropTypes.string,
  text2: PropTypes.string,
  text8: PropTypes.string,
  text1: PropTypes.string,
  text5: PropTypes.string,
  Register1: PropTypes.string,
  text7: PropTypes.string,
  text4: PropTypes.string,
  Register: PropTypes.string,
  text6: PropTypes.string,
  text9: PropTypes.string,
}

export default TransparentNavBar
