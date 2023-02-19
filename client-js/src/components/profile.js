import React from 'react'

import PropTypes from 'prop-types'

import './profile.css'

const Profile = (props) => {
  return (
    <div className={`profile-container ${props.rootClassName} `}>
      <svg viewBox="0 0 1024 1024" className="profile-icon">
        <path
          d="M870.286 765.143c-14.857-106.857-58.286-201.714-155.429-214.857-50.286 54.857-122.857 89.714-202.857 89.714s-152.571-34.857-202.857-89.714c-97.143 13.143-140.571 108-155.429 214.857 79.429 112 210.286 185.714 358.286 185.714s278.857-73.714 358.286-185.714zM731.429 365.714c0-121.143-98.286-219.429-219.429-219.429s-219.429 98.286-219.429 219.429 98.286 219.429 219.429 219.429 219.429-98.286 219.429-219.429zM1024 512c0 281.714-228.571 512-512 512-282.857 0-512-229.714-512-512 0-282.857 229.143-512 512-512s512 229.143 512 512z"
          className=""
        ></path>
      </svg>
      <span className="profile-text">{props.text}</span>
      <span className="profile-text1">{props.text1}</span>
      <span className="profile-text2">{props.text2}</span>
      <span className="profile-text3">{props.text3}</span>
      <button className="profile-button button">{props.button1}</button>
      <button className="profile-button1 button">{props.button2}</button>
      <input
        type="text"
        placeholder={props.textinput_placeholder}
        className="profile-textinput input"
      />
      <h1 className="profile-text4">{props.heading}</h1>
      <input
        type="text"
        placeholder={props.textinput_placeholder1}
        className="profile-textinput1 input"
      />
      <input
        type="text"
        placeholder={props.textinput_placeholder2}
        className="profile-textinput2 input"
      />
      <input
        type="text"
        placeholder={props.textinput_placeholder3}
        className="profile-textinput3 input"
      />
    </div>
  )
}

Profile.defaultProps = {
  rootClassName: '',
  button2: 'ยกเลิก',
  heading: 'แก้ไขโปรไฟล์',
  button1: 'บันทึก',
  text1: 'นามสกุล',
  textinput_placeholder3: 'placeholder',
  textinput_placeholder1: 'placeholder',
  text3: 'อีเมล',
  text: 'ชื่อ',
  text2: 'เบอร์โทรศัพท์',
  textinput_placeholder2: 'placeholder',
  textinput_placeholder: 'placeholder',
}

Profile.propTypes = {
  rootClassName: PropTypes.string,
  button2: PropTypes.string,
  heading: PropTypes.string,
  button1: PropTypes.string,
  text1: PropTypes.string,
  textinput_placeholder3: PropTypes.string,
  textinput_placeholder1: PropTypes.string,
  text3: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
  textinput_placeholder2: PropTypes.string,
  textinput_placeholder: PropTypes.string,
}

export default Profile
