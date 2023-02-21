import React from 'react'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import History from '../components/history'
import './history-page.css'

const HistoryPage = (props) => {
  return (
    <div className="history-page-container">
      <Helmet>
        <title>HistoryPage - Phang-Nga-City-Tour</title>
        <meta property="og:title" content="HistoryPage - Phang-Nga-City-Tour" />
      </Helmet>
      <NavBar rootClassName="nav-bar-root-class-name4"></NavBar>
      <div className="history-page-container1">
        <History rootClassName="history-root-class-name"></History>
      </div>
    </div>
  )
}

export default HistoryPage
