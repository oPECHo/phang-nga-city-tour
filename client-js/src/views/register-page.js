import React from 'react'

import { Helmet } from 'react-helmet'

import Register from '../components/register'
import NavBar from '../components/nav-bar'
import './register-page.css'

const RegisterPage = (props) => {
  return (
    <div className="register-page-container">
      <Helmet>
        <title>RegisterPage - Phang-Nga-City-Tour</title>
        <meta
          property="og:title"
          content="RegisterPage - Phang-Nga-City-Tour"
        />
      </Helmet>
      <Register rootClassName="register-root-class-name1"></Register>
      <NavBar rootClassName="nav-bar-root-class-name2"></NavBar>
    </div>
  )
}

export default RegisterPage
