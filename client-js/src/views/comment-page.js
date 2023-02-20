import React from 'react'

import { Helmet } from 'react-helmet'

import BlueNavBar1 from '../components/blue-nav-bar1'
import CommentCard from '../components/comment-card'
import './comment-page.css'

const CommentPage = (props) => {
  return (
    <div className="comment-page-container">
      <Helmet>
        <title>CommentPage - Phang-Nga-City-Tour</title>
        <meta property="og:title" content="CommentPage - Phang-Nga-City-Tour" />
      </Helmet>
      <BlueNavBar1 rootClassName="blue-nav-bar1-root-class-name1"></BlueNavBar1>
      <div className="comment-page-container1">
        <CommentCard rootClassName="comment-card-root-class-name"></CommentCard>
        <CommentCard rootClassName="comment-card-root-class-name1"></CommentCard>
      </div>
    </div>
  )
}

export default CommentPage
