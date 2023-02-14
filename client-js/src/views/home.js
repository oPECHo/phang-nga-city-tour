import React from 'react'

import { Helmet } from 'react-helmet'

import Search1 from '../components/search1'
import TransparentNavBar from '../components/transparent-nav-bar'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Phang-Nga-City-Tour</title>
        <meta property="og:title" content="Phang-Nga-City-Tour" />
      </Helmet>
      <div className="home-container1">
        <Search1 rootClassName="search1-root-class-name1"></Search1>
        <h1 className="home-text">ค้นหาทัวร์ท่องเที่ยวที่ดีที่สุดในพังงา</h1>
      </div>
      <TransparentNavBar rootClassName="transparent-nav-bar-root-class-name"></TransparentNavBar>
    </div>
  )
}

export default Home
