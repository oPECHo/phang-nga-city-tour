import React from 'react'

import PropTypes from 'prop-types'

import './payment.css'

const Payment = (props) => {
  return (
    <div className={`payment-container ${props.rootClassName} `}>
      <span className="payment-text">{props.text}</span>
      <h1 className="payment-text1">{props.heading}</h1>
      <span className="payment-text2">{props.text1}</span>
      <span className="payment-text3">{props.text2}</span>
      <button className="payment-button button">{props.button}</button>
      <span className="payment-text4">{props.text3}</span>
      <span className="payment-text5">{props.text6}</span>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="payment-image"
      />
      <img
        alt={props.image_alt1}
        src={props.image_src1}
        className="payment-image1"
      />
      <img
        alt={props.image_alt2}
        src={props.image_src2}
        className="payment-image2"
      />
      <div className="payment-container1">
        <span className="payment-text6">{props.text4}</span>
        <input
          type="text"
          placeholder={props.textinput_placeholder}
          className="payment-textinput input"
        />
        <svg viewBox="0 0 1024 1024" className="payment-icon">
          <path
            d="M854 896v-554h-684v554h684zM854 128q34 0 59 26t25 60v682q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-682q0-34 25-60t59-26h44v-86h84v86h428v-86h84v86h44z"
            className=""
          ></path>
        </svg>
      </div>
      <div className="payment-container2">
        <span className="payment-text7">{props.text5}</span>
        <input
          type="text"
          placeholder={props.textinput_placeholder1}
          className="payment-textinput1 input"
        />
        <svg viewBox="0 0 731.4285714285713 1024" className="payment-icon2">
          <path
            d="M731.429 799.429c0 83.429-54.857 151.429-121.714 151.429h-488c-66.857 0-121.714-68-121.714-151.429 0-150.286 37.143-324 186.857-324 46.286 45.143 109.143 73.143 178.857 73.143s132.571-28 178.857-73.143c149.714 0 186.857 173.714 186.857 324zM585.143 292.571c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429z"
            className=""
          ></path>
        </svg>
      </div>
      <input type="radio" name="radio" className="payment-radiobutton" />
      <input type="radio" name="radio" className="payment-radiobutton1" />
    </div>
  )
}

Payment.defaultProps = {
  image_alt1: 'image',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  rootClassName: '',
  button: 'ชำระเงิน',
  image_src2: '/playground_assets/scb-900h.jpg',
  text4: 'วันที่',
  text: '729.00 บาท/ท่าน',
  text1: 'เลือกวิธีการชำระเงิน',
  image_alt2: 'image',
  text3: 'หมายเหตุ: คุณที่มีเวลา 1 วันในการชำระค่า',
  text2: 'รวมทั้งหมด 729.00 บาท',
  text5: 'จำนวนคน',
  image_alt: 'image',
  image_src1: '/playground_assets/promptpay-900h.jpg',
  textinput_placeholder1: 'placeholder',
  textinput_placeholder: 'placeholder',
  text6: 'จองหลังจากนั้นจะถูกยกเลิกการจอง',
  heading: 'ชื่อสถานที่',
}

Payment.propTypes = {
  image_alt1: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  button: PropTypes.string,
  image_src2: PropTypes.string,
  text4: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  image_alt2: PropTypes.string,
  text3: PropTypes.string,
  text2: PropTypes.string,
  text5: PropTypes.string,
  image_alt: PropTypes.string,
  image_src1: PropTypes.string,
  textinput_placeholder1: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  text6: PropTypes.string,
  heading: PropTypes.string,
}

export default Payment
