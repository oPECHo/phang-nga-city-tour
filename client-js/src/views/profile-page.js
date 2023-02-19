import React from 'react'

import { Helmet } from 'react-helmet'

import Profile from '../components/profile'
import BlueNavBar1 from '../components/blue-nav-bar1'
import './profile-page.css'

const ProfilePage = (props) => {
  return (
    <div className="profile-page-container">
      <Helmet>
        <title>ProfilePage - Phang-Nga-City-Tour</title>
        <meta property="og:title" content="ProfilePage - Phang-Nga-City-Tour" />
      </Helmet>
      <Profile rootClassName="profile-root-class-name"></Profile>
      <BlueNavBar1 rootClassName="blue-nav-bar1-root-class-name4"></BlueNavBar1>
    </div>
  )
}

export default ProfilePage
