import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './page-mobile-details.css'

const PageMobileDetails = (props) => {
  return (
    <div className={`page-mobile-details-container ${props.rootClassName} `}>
      <div className="page-mobile-details-container1">
        <img
          src="https://play.teleporthq.io/static/svg/default-img.svg"
          className="page-mobile-details-image"
        />
        <h1 className="page-mobile-details-text">{props.heading}</h1>
        <Link to="/payment-page" className="page-mobile-details-navlink button">
          {props.button}
        </Link>
        <div className="page-mobile-details-s-t-a-r">
          <svg viewBox="0 0 1024 1024" className="page-mobile-details-icon">
            <path
              d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="page-mobile-details-icon02">
            <path
              d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="page-mobile-details-icon04">
            <path
              d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="page-mobile-details-icon06">
            <path
              d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="page-mobile-details-icon08">
            <path
              d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
              className=""
            ></path>
          </svg>
        </div>
        <svg viewBox="0 0 1024 1024" className="page-mobile-details-pin">
          <path
            d="M214 854h596v84h-596v-84zM426 342q0 36 25 60t61 24 61-24 25-60q0-34-26-60t-60-26-60 26-26 60zM768 342q0 86-64 203t-128 191l-64 74q-28-30-71-82t-114-176-71-210q0-106 75-181t181-75 181 75 75 181z"
            className=""
          ></path>
        </svg>
        <span className="page-mobile-details-text01">{props.text}</span>
        <div className="page-mobile-details-container2">
          <h1 className="page-mobile-details-text02">{props.heading1}</h1>
        </div>
        <span className="page-mobile-details-text03">{props.text3}</span>
        <span className="page-mobile-details-text04">{props.text4}</span>
        <span className="page-mobile-details-text05">{props.text5}</span>
        <span className="page-mobile-details-text06">{props.text6}</span>
        <span className="page-mobile-details-text07">{props.text23}</span>
        <span className="page-mobile-details-text08">{props.text22}</span>
        <input
          type="text"
          placeholder={props.textinput_placeholder}
          className="page-mobile-details-textinput input"
        />
        <svg
          viewBox="0 0 731.4285714285713 1024"
          className="page-mobile-details-icon11"
        >
          <path
            d="M731.429 799.429c0 83.429-54.857 151.429-121.714 151.429h-488c-66.857 0-121.714-68-121.714-151.429 0-150.286 37.143-324 186.857-324 46.286 45.143 109.143 73.143 178.857 73.143s132.571-28 178.857-73.143c149.714 0 186.857 173.714 186.857 324zM585.143 292.571c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429z"
            className=""
          ></path>
        </svg>
        <span className="page-mobile-details-text09">{props.text8}</span>
        <span className="page-mobile-details-text10">{props.text2}</span>
        <span className="page-mobile-details-text11">{props.text21}</span>
        <h1 className="page-mobile-details-text12">{props.heading2}</h1>
        <svg viewBox="0 0 1024 1024" className="page-mobile-details-icon13">
          <path
            d="M768 342v-86h-512v86h512zM598 598v-86h-342v86h342zM256 384v86h512v-86h-512zM854 86q34 0 59 25t25 59v512q0 34-25 60t-59 26h-598l-170 170v-768q0-34 25-59t59-25h684z"
            className=""
          ></path>
        </svg>
        <span className="page-mobile-details-text13">{props.text7}</span>
        <span className="page-mobile-details-text14">{props.text9}</span>
        <span className="page-mobile-details-text15">{props.text10}</span>
        <span className="page-mobile-details-text16">{props.text11}</span>
        <span className="page-mobile-details-text17">{props.text13}</span>
        <span className="page-mobile-details-text18">{props.text12}</span>
        <span className="page-mobile-details-text19">{props.text1}</span>
        <span className="page-mobile-details-text20">{props.text14}</span>
      </div>
    </div>
  )
}

PageMobileDetails.defaultProps = {
  text1: 'Direction Link',
  image_alt: 'image',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text22: '10/20',
  text9: '- ค่าเข้าสถานที่ที่ระบุตามรายการ',
  text12: 'วงเงินไม่เกินท่านละ 1,000,000 บาท ตามเงื่อนไขกรมธรรม์',
  text5: 'พักโรงแรม - xxxxx',
  text8: '- ค่ารถรับส่งระหว่างสนามบิน-โรงแรมที่พัก',
  text11:
    'วงเงินท่านละ 2,000,000 บาท, ค่ารักษาพยาบาลในกรณีที่เกิดจากอุบัติเหตุ',
  text2: '10/20',
  text: 'ที่อยู่',
  text4: 'วันแรก - xxxxx',
  text6: 'วันที่สอง - xxxxx',
  heading: 'ชื่อสถานที่',
  rootClassName: '',
  heading2: 'เงื่อนไขและข้อกำหนดของแพ็คเกจทัวร์',
  text10: '- แถมฟรี!! ประกันอุบัติเหตุ และคุ้มครองในระหว่างการเดินทาง',
  text3: 'รายละเอียดโปรแกรม - เดินทางได้ทุกวัน ตั้งแต่ 2 ท่านขึ้นไป',
  text7: '- ค่าอาหารตามที่ระบุไว้ในรายการ',
  text13: 'https://play.teleporthq.io/projects/',
  text21: '729 บาท/ท่าน',
  text23: '10/20',
  button: 'จองเลย!',
  textinput_placeholder: 'แสดงความคิดเห็น',
  text14: 'brisk-trim-lyrebird-aruwe9/editor/0ded533b-638f',
  heading1: 'รายละเอียดแพ็คเกจ',
}

PageMobileDetails.propTypes = {
  text1: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  text22: PropTypes.string,
  text9: PropTypes.string,
  text12: PropTypes.string,
  text5: PropTypes.string,
  text8: PropTypes.string,
  text11: PropTypes.string,
  text2: PropTypes.string,
  text: PropTypes.string,
  text4: PropTypes.string,
  text6: PropTypes.string,
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
  heading2: PropTypes.string,
  text10: PropTypes.string,
  text3: PropTypes.string,
  text7: PropTypes.string,
  text13: PropTypes.string,
  text21: PropTypes.string,
  text23: PropTypes.string,
  button: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  text14: PropTypes.string,
  heading1: PropTypes.string,
}

export default PageMobileDetails
