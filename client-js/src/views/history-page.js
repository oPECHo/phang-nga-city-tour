import React from 'react'

import { Helmet } from 'react-helmet'

import History from '../components/history'
import BlueNavBar1 from '../components/blue-nav-bar1'
import './history-page.css'

const HistoryPage = (props) => {
  return (
    <div className="history-page-container">
      <Helmet>
        <title>HistoryPage - Phang-Nga-City-Tour</title>
        <meta property="og:title" content="HistoryPage - Phang-Nga-City-Tour" />
      </Helmet>
      <History rootClassName="history-root-class-name"></History>
      <BlueNavBar1 rootClassName="blue-nav-bar1-root-class-name2"></BlueNavBar1>
    </div>
  )
}

export default HistoryPage
