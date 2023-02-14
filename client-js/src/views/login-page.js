import React from 'react'

import { Helmet } from 'react-helmet'

import Login from '../components/login'
import NavBar from '../components/nav-bar'
import './login-page.css'

const LoginPage = (props) => {
  return (
    <div className="login-page-container">
      <Helmet>
        <title>LoginPage - Phang-Nga-City-Tour</title>
        <meta property="og:title" content="LoginPage - Phang-Nga-City-Tour" />
      </Helmet>
      <Login rootClassName="login-root-class-name"></Login>
      <NavBar rootClassName="nav-bar-root-class-name"></NavBar>
    </div>
  )
}

export default LoginPage
