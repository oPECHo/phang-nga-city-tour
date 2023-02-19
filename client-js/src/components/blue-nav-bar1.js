import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './blue-nav-bar1.css'

const BlueNavBar1 = (props) => {
  return (
    <div className={`blue-nav-bar1-container ${props.rootClassName} `}>
      <header
        data-thq="thq-navbar"
        className="blue-nav-bar1-navbar-interactive"
      >
        <div className="blue-nav-bar1-container1">
          <Link to="/" className="blue-nav-bar1-navlink">
            <img
              alt={props.Logo_alt}
              src={props.Logo_src}
              className="blue-nav-bar1-logo"
            />
          </Link>
        </div>
        <div
          data-thq="thq-navbar-nav"
          data-role="Nav"
          className="blue-nav-bar1-desktop-menu"
        >
          <nav
            data-thq="thq-navbar-nav-links"
            data-role="Nav"
            className="blue-nav-bar1-nav"
          >
            <Link to="/" className="blue-nav-bar1-navlink1">
              {props.text}
            </Link>
            <span className="blue-nav-bar1-text">{props.text1}</span>
            <Link to="/your-booking-page" className="blue-nav-bar1-navlink2">
              {props.text2}
            </Link>
            <Link to="/history-page" className="blue-nav-bar1-navlink3">
              {props.text3}
            </Link>
            <Link to="/search-page" className="blue-nav-bar1-navlink4">
              {props.text4}
            </Link>
          </nav>
        </div>
        <div
          data-thq="thq-navbar-btn-group"
          className="blue-nav-bar1-btn-group"
        >
          <Link to="/login-page" className="blue-nav-bar1-login button">
            {props.Login}
          </Link>
          <Link to="/register-page" className="blue-nav-bar1-register button">
            {props.Register}
          </Link>
        </div>
        <div data-thq="thq-burger-menu" className="blue-nav-bar1-burger-menu">
          <svg viewBox="0 0 1024 1024" className="blue-nav-bar1-icon">
            <path
              d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
              className=""
            ></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="blue-nav-bar1-mobile-menu">
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="blue-nav-bar1-nav1"
          >
            <div className="blue-nav-bar1-container2">
              <img
                alt={props.image_alt}
                src={props.image_src}
                className="blue-nav-bar1-image"
              />
              <div
                data-thq="thq-close-menu"
                className="blue-nav-bar1-menu-close"
              >
                <svg viewBox="0 0 1024 1024" className="blue-nav-bar1-icon2">
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
              className="blue-nav-bar1-nav2"
            >
              <Link to="/" className="blue-nav-bar1-navlink5">
                {props.text5}
              </Link>
              <span className="blue-nav-bar1-text1">{props.text6}</span>
              <Link to="/your-booking-page" className="blue-nav-bar1-navlink6">
                {props.text7}
              </Link>
              <Link to="/history-page" className="blue-nav-bar1-navlink7">
                {props.text8}
              </Link>
              <Link to="/search-page" className="blue-nav-bar1-navlink8">
                {props.text9}
              </Link>
            </nav>
            <div className="blue-nav-bar1-container3">
              <Link to="/login-page" className="blue-nav-bar1-login1 button">
                {props.Login1}
              </Link>
              <Link
                to="/register-page"
                className="blue-nav-bar1-register1 button"
              >
                {props.Register1}
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

BlueNavBar1.defaultProps = {
  Register: 'ลงทะเบียน',
  image_src: '/playground_assets/phang-nga%20city%20tour-1500h.png',
  Login: 'เข้าสู่ระบบ',
  rootClassName: '',
  Logo_alt: 'logo',
  text3: 'ประวัติ',
  text4: 'ค้นหา',
  text5: 'หน้าหลัก',
  image_alt: 'image',
  Login1: 'เข้าสู่ระบบ',
  text6: 'หมวดหมู่',
  text7: 'ทัวร์ของคุณ',
  text1: 'หมวดหมู่',
  text: 'หน้าหลัก',
  text8: 'ประวัติ',
  Register1: 'ลงทะเบียน',
  text9: 'ค้นหา',
  Logo_src: '/playground_assets/phang-nga%20city%20tour-w-200h.png',
  text2: 'ทัวร์ของคุณ',
}

BlueNavBar1.propTypes = {
  Register: PropTypes.string,
  image_src: PropTypes.string,
  Login: PropTypes.string,
  rootClassName: PropTypes.string,
  Logo_alt: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
  image_alt: PropTypes.string,
  Login1: PropTypes.string,
  text6: PropTypes.string,
  text7: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  text8: PropTypes.string,
  Register1: PropTypes.string,
  text9: PropTypes.string,
  Logo_src: PropTypes.string,
  text2: PropTypes.string,
}

export default BlueNavBar1
