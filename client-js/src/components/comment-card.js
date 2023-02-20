import React from 'react'

import PropTypes from 'prop-types'

import './comment-card.css'

const CommentCard = (props) => {
  return (
    <div className={`comment-card-container ${props.rootClassName} `}>
      <div className="comment-card-container1">
        <svg viewBox="0 0 1024 1024" className="comment-card-icon">
          <path
            d="M870.286 765.143c-14.857-106.857-58.286-201.714-155.429-214.857-50.286 54.857-122.857 89.714-202.857 89.714s-152.571-34.857-202.857-89.714c-97.143 13.143-140.571 108-155.429 214.857 79.429 112 210.286 185.714 358.286 185.714s278.857-73.714 358.286-185.714zM731.429 365.714c0-121.143-98.286-219.429-219.429-219.429s-219.429 98.286-219.429 219.429 98.286 219.429 219.429 219.429 219.429-98.286 219.429-219.429zM1024 512c0 281.714-228.571 512-512 512-282.857 0-512-229.714-512-512 0-282.857 229.143-512 512-512s512 229.143 512 512z"
            className=""
          ></path>
        </svg>
        <span className="comment-card-text">{props.text}</span>
        <span className="comment-card-text1">{props.text1}</span>
        <span className="comment-card-text2">{props.text11}</span>
        <div className="comment-card-container2">
          <svg viewBox="0 0 1024 1024" className="comment-card-icon02">
            <path
              d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="comment-card-icon04">
            <path
              d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="comment-card-icon06">
            <path
              d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="comment-card-icon08">
            <path
              d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="comment-card-icon10">
            <path
              d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
    </div>
  )
}

CommentCard.defaultProps = {
  text11: 'comment',
  text: 'ชื่อ user',
  rootClassName: '',
  text1: '08/02/2566',
}

CommentCard.propTypes = {
  text11: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
}

export default CommentCard
