import React from 'react'

import { Helmet } from 'react-helmet'

import Search from '../components/search'
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
        <h1 className="home-text">ค้นหาทัวร์ท่องเที่ยวที่ดีที่สุดในพังงา</h1>
      </div>
      <div className="home-container2">
        <Search rootClassName="search-root-class-name1"></Search>
      </div>
      <TransparentNavBar rootClassName="transparent-nav-bar-root-class-name"></TransparentNavBar>
    </div>
  )
}

export default Home
