import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './user-profile.css'

const UserProfile = (props) => {
  return (
    <div className={`user-profile-container ${props.rootClassName} `}>
      <svg viewBox="0 0 1024 1024" className="user-profile-icon">
        <path
          d="M870.286 765.143c-14.857-106.857-58.286-201.714-155.429-214.857-50.286 54.857-122.857 89.714-202.857 89.714s-152.571-34.857-202.857-89.714c-97.143 13.143-140.571 108-155.429 214.857 79.429 112 210.286 185.714 358.286 185.714s278.857-73.714 358.286-185.714zM731.429 365.714c0-121.143-98.286-219.429-219.429-219.429s-219.429 98.286-219.429 219.429 98.286 219.429 219.429 219.429 219.429-98.286 219.429-219.429zM1024 512c0 281.714-228.571 512-512 512-282.857 0-512-229.714-512-512 0-282.857 229.143-512 512-512s512 229.143 512 512z"
          className=""
        ></path>
      </svg>
      <span className="user-profile-text">{props.text}</span>
      <span className="user-profile-text1">{props.text1}</span>
      <span className="user-profile-text2">{props.text2}</span>
      <span className="user-profile-text3">{props.text3}</span>
      <span className="user-profile-text4">{props.text31}</span>
      <Link to="/" className="user-profile-navlink button">
        {props.button1}
      </Link>
      <button className="user-profile-button button">{props.button2}</button>
      <h1 className="user-profile-text5">{props.heading}</h1>
      <input
        type="text"
        placeholder={props.textinput_placeholder1}
        className="user-profile-textinput input"
      />
      <input
        type="text"
        placeholder={props.textinput_placeholder2}
        className="user-profile-textinput1 input"
      />
      <input
        type="text"
        placeholder={props.textinput_placeholder3}
        className="user-profile-textinput2 input"
      />
      <input
        type="text"
        placeholder={props.textinput_placeholder}
        className="user-profile-textinput3 input"
      />
    </div>
  )
}

UserProfile.defaultProps = {
  rootClassName: '',
  button2: 'ยกเลิก',
  heading: 'แก้ไขโปรไฟล์',
  textinput_placeholder2: 'นามสกุล',
  button1: 'บันทึก',
  text1: 'นามสกุล',
  textinput_placeholder3: 'เบอร์โทรศัพท์',
  text3: 'อีเมลล์',
  text31: 'เบอร์โทรศัพท์',
  text: 'ชื่อ',
  text2: 'เบอร์โทรศัพท์',
  textinput_placeholder1: 'ชื่อจริง',
  textinput_placeholder: 'อีเมลล์',
}

UserProfile.propTypes = {
  rootClassName: PropTypes.string,
  button2: PropTypes.string,
  heading: PropTypes.string,
  textinput_placeholder2: PropTypes.string,
  button1: PropTypes.string,
  text1: PropTypes.string,
  textinput_placeholder3: PropTypes.string,
  text3: PropTypes.string,
  text31: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
  textinput_placeholder1: PropTypes.string,
  textinput_placeholder: PropTypes.string,
}

export default UserProfile
