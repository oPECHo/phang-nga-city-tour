import React from 'react'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import UserProfile from '../components/user-profile'
import './profile-page.css'

const ProfilePage = (props) => {
  return (
    <div className="profile-page-container">
      <Helmet>
        <title>ProfilePage - Phang-Nga-City-Tour</title>
        <meta property="og:title" content="ProfilePage - Phang-Nga-City-Tour" />
      </Helmet>
      <NavBar rootClassName="nav-bar-root-class-name8"></NavBar>
      <UserProfile rootClassName="user-profile-root-class-name"></UserProfile>
    </div>
  )
}

export default ProfilePage
