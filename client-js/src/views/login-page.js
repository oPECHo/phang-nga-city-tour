import React from 'react'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import Login from '../components/login'
import './login-page.css'

const LoginPage = (props) => {
  return (
    <div className="login-page-container">
      <Helmet>
        <title>LoginPage - Phang-Nga-City-Tour</title>
        <meta property="og:title" content="LoginPage - Phang-Nga-City-Tour" />
      </Helmet>
      <NavBar rootClassName="nav-bar-root-class-name6"></NavBar>
      <Login rootClassName="login-root-class-name"></Login>
    </div>
  )
}

export default LoginPage
