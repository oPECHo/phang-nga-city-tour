import React from 'react'

import { Helmet } from 'react-helmet'

import Login from '../components/login'
import TransparentNavBar1 from '../components/transparent-nav-bar1'
import './login-page.css'

const LoginPage = (props) => {
  return (
    <div className="login-page-container">
      <Helmet>
        <title>LoginPage - Phang-Nga-City-Tour</title>
        <meta property="og:title" content="LoginPage - Phang-Nga-City-Tour" />
      </Helmet>
      <Login rootClassName="login-root-class-name"></Login>
      <TransparentNavBar1 rootClassName="transparent-nav-bar1-root-class-name1"></TransparentNavBar1>
    </div>
  )
}

export default LoginPage
