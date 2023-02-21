import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './nav-bar.css'

const NavBar = (props) => {
  return (
    <div className={`nav-bar-container ${props.rootClassName} `}>
      <header data-thq="thq-navbar" className="nav-bar-navbar-interactive">
        <div className="nav-bar-container1">
          <Link to="/" className="nav-bar-navlink">
            <img
              alt={props.Logo_alt}
              src={props.Logo_src}
              className="nav-bar-logo"
            />
          </Link>
        </div>
        <div
          data-thq="thq-navbar-nav"
          data-role="Nav"
          className="nav-bar-desktop-menu"
        >
          <nav
            data-thq="thq-navbar-nav-links"
            data-role="Nav"
            className="nav-bar-nav"
          >
            <Link to="/" className="nav-bar-navlink1">
              {props.text}
            </Link>
            <span className="nav-bar-text">{props.text1}</span>
            <Link to="/your-booking-page" className="nav-bar-navlink2">
              {props.text2}
            </Link>
            <Link to="/history-page" className="nav-bar-navlink3">
              {props.text3}
            </Link>
            <Link to="/search-page" className="nav-bar-navlink4">
              {props.text4}
            </Link>
          </nav>
        </div>
        <div data-thq="thq-navbar-btn-group" className="nav-bar-btn-group">
          <Link to="/login-page" className="nav-bar-login button">
            {props.Login}
          </Link>
          <Link to="/register-page" className="nav-bar-register button">
            {props.Register}
          </Link>
        </div>
        <div data-thq="thq-burger-menu" className="nav-bar-burger-menu">
          <svg viewBox="0 0 1024 1024" className="nav-bar-icon">
            <path
              d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
              className=""
            ></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="nav-bar-mobile-menu">
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="nav-bar-nav1"
          >
            <div className="nav-bar-container2">
              <img
                alt={props.image_alt}
                src={props.image_src}
                className="nav-bar-image"
              />
              <div data-thq="thq-close-menu" className="nav-bar-menu-close">
                <svg viewBox="0 0 1024 1024" className="nav-bar-icon2">
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
              className="nav-bar-nav2"
            >
              <Link to="/" className="nav-bar-navlink5">
                {props.text5}
              </Link>
              <span className="nav-bar-text1">{props.text6}</span>
              <Link to="/your-booking-page" className="nav-bar-navlink6">
                {props.text7}
              </Link>
              <Link to="/history-page" className="nav-bar-navlink7">
                {props.text8}
              </Link>
              <Link to="/search-page" className="nav-bar-navlink8">
                {props.text9}
              </Link>
            </nav>
            <div className="nav-bar-container3">
              <Link to="/login-page" className="nav-bar-login1 button">
                {props.Login1}
              </Link>
              <Link to="/register-page" className="nav-bar-register1 button">
                {props.Register1}
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

NavBar.defaultProps = {
  Logo_src: '/playground_assets/phang-nga%20city%20tour-1500h.png',
  text3: 'ประวัติ',
  text8: 'ประวัติ',
  image_src: '/playground_assets/phang-nga%20city%20tour-1500h.png',
  rootClassName: '',
  text5: 'หน้าหลัก',
  image_alt: 'image',
  text6: 'หมวดหมู่',
  text7: 'ทัวร์ของคุณ',
  Login: 'เข้าสู่ระบบ',
  Register1: 'ลงทะเบียน',
  text9: 'ค้นหา',
  text2: 'ทัวร์ของคุณ',
  text: 'หน้าหลัก',
  Logo_alt: 'logo',
  text1: 'หมวดหมู่',
  Login1: 'เข้าสู่ระบบ',
  text4: 'ค้นหา',
  Register: 'ลงทะเบียน',
}

NavBar.propTypes = {
  Logo_src: PropTypes.string,
  text3: PropTypes.string,
  text8: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  text5: PropTypes.string,
  image_alt: PropTypes.string,
  text6: PropTypes.string,
  text7: PropTypes.string,
  Login: PropTypes.string,
  Register1: PropTypes.string,
  text9: PropTypes.string,
  text2: PropTypes.string,
  text: PropTypes.string,
  Logo_alt: PropTypes.string,
  text1: PropTypes.string,
  Login1: PropTypes.string,
  text4: PropTypes.string,
  Register: PropTypes.string,
}

export default NavBar
