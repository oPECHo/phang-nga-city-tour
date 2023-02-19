import React from 'react'

import { Helmet } from 'react-helmet'

import CommentCard from '../components/comment-card'
import BlueNavBar1 from '../components/blue-nav-bar1'
import './comment-page.css'

const CommentPage = (props) => {
  return (
    <div className="comment-page-container">
      <Helmet>
        <title>CommentPage - Phang-Nga-City-Tour</title>
        <meta property="og:title" content="CommentPage - Phang-Nga-City-Tour" />
      </Helmet>
      <CommentCard rootClassName="comment-card-root-class-name"></CommentCard>
      <BlueNavBar1 rootClassName="blue-nav-bar1-root-class-name1"></BlueNavBar1>
      <CommentCard rootClassName="comment-card-root-class-name1"></CommentCard>
    </div>
  )
}

export default CommentPage
