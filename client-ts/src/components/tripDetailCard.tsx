import React from 'react'

import PropTypes from 'prop-types'

import './trip-detail-card.css'

const TripDetailCard = (props:any) => {
  return (
    <div className=''>
      <div className="trip-detail-card-container1">
        <img src="เขาหลัก2.jpg"/>
        <h1 className="trip-detail-card-text">{props.heading}</h1>
        <button className="trip-detail-card-button button">
          {props.button}
        </button>
        <div className="trip-detail-card-s-t-a-r">
          <svg viewBox="0 0 1024 1024" className="trip-detail-card-icon">
            <path
              d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="trip-detail-card-icon02">
            <path
              d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="trip-detail-card-icon04">
            <path
              d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="trip-detail-card-icon06">
            <path
              d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="trip-detail-card-icon08">
            <path
              d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
              className=""
            ></path>
          </svg>
        </div>
        <svg viewBox="0 0 1024 1024" className="trip-detail-card-pin">
          <path
            d="M214 854h596v84h-596v-84zM426 342q0 36 25 60t61 24 61-24 25-60q0-34-26-60t-60-26-60 26-26 60zM768 342q0 86-64 203t-128 191l-64 74q-28-30-71-82t-114-176-71-210q0-106 75-181t181-75 181 75 75 181z"
            className=""
          ></path>
        </svg>
        <span className="trip-detail-card-text01">{props.text}</span>
        <h1 className="trip-detail-card-text02">{props.heading1}</h1>
        <span className="trip-detail-card-text03">{props.text3}</span>
        <span className="trip-detail-card-text04">{props.text4}</span>
        <span className="trip-detail-card-text05">{props.text5}</span>
        <span className="trip-detail-card-text06">{props.text6}</span>
        <span className="trip-detail-card-text07">{props.text23}</span>
        <span className="trip-detail-card-text08">{props.text22}</span>
        <span className="trip-detail-card-text09">{props.text1}</span>
        <input
          type="text"
          placeholder={props.textinput_placeholder}
          className="trip-detail-card-textinput input"
        />
        <svg
          viewBox="0 0 731.4285714285713 1024"
          className="trip-detail-card-icon11"
        >
          <path
            d="M731.429 799.429c0 83.429-54.857 151.429-121.714 151.429h-488c-66.857 0-121.714-68-121.714-151.429 0-150.286 37.143-324 186.857-324 46.286 45.143 109.143 73.143 178.857 73.143s132.571-28 178.857-73.143c149.714 0 186.857 173.714 186.857 324zM585.143 292.571c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429z"
            className=""
          ></path>
        </svg>
        <span className="trip-detail-card-text10">{props.text2}</span>
        <span className="trip-detail-card-text11">{props.text21}</span>
        <h1 className="trip-detail-card-text12">{props.heading2}</h1>
        <svg viewBox="0 0 1024 1024" className="trip-detail-card-icon13">
          <path
            d="M768 342v-86h-512v86h512zM598 598v-86h-342v86h342zM256 384v86h512v-86h-512zM854 86q34 0 59 25t25 59v512q0 34-25 60t-59 26h-598l-170 170v-768q0-34 25-59t59-25h684z"
            className=""
          ></path>
        </svg>
        <span className="trip-detail-card-text13">{props.text8}</span>
        <span className="trip-detail-card-text14">{props.text7}</span>
        <span className="trip-detail-card-text15">{props.text9}</span>
        <span className="trip-detail-card-text16">{props.text10}</span>
        <span className="trip-detail-card-text17">{props.text11}</span>
        <span className="trip-detail-card-text18">{props.text13}</span>
        <span className="trip-detail-card-text19">{props.text14}</span>
        <span className="trip-detail-card-text20">{props.text12}</span>
      </div>
    </div>
  )
}

TripDetailCard.defaultProps = {
  text5: 'พักโรงแรม - xxxxx',
  text9: '- ค่าเข้าสถานที่ที่ระบุตามรายการ',
  text4: 'วันแรก - xxxxx',
  textinput_placeholder: 'แสดงความคิดเห็น',
  text13: 'https://play.teleporthq.io/projects/',
  text23: '10/20',
  text14: 'brisk-trim-lyrebird-aruwe9/editor/0ded533b-638f',
  text6: 'วันที่สอง - xxxxx',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text10:
    '- แถมฟรี!!! ประกันอุบัติเหตุในระหว่างการเดินทาง คุ้มครองในระหว่างการเดินทาง',
  text3: 'รายละเอียดโปรแกรม - เดินทางได้ทุกวัน ตั้งแต่ 2 ท่านขึ้นไป',
  heading1: 'รายละเอียดแพ็คเกจ',
  text21: '729 บาท/ท่าน',
  text12: 'วงเงินไม่เกินท่านละ 1,000,000 บาท ตามเงื่อนไขกรมธรรม์',
  text1: 'Direction Link',
  text2: '10/20',
  heading2: 'เงื่อนไขและข้อกำหนดของแพ็คเกจทัวร์',
  text22: '10/20',
  text8: '- ค่ารถรับส่งระหว่างสนามบิน-โรงแรมที่พัก',
  button: 'จองเลย!',
  image_alt: 'image',
  heading: 'ชื่อสถานที่',
  text7: '- ค่าอาหารตามที่ระบุไว้ในรายการ',
  rootClassName: '',
  text: 'ที่อยู่',
  text11:
    'วงเงินท่านละ 2,000,000 บาท, ค่ารักษาพยาบาลในกรณีที่เกิด จากอุบัติเหตุ',
}

TripDetailCard.propTypes = {
  text5: PropTypes.string,
  text9: PropTypes.string,
  text4: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  text13: PropTypes.string,
  text23: PropTypes.string,
  text14: PropTypes.string,
  text6: PropTypes.string,
  image_src: PropTypes.string,
  text10: PropTypes.string,
  text3: PropTypes.string,
  heading1: PropTypes.string,
  text21: PropTypes.string,
  text12: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  heading2: PropTypes.string,
  text22: PropTypes.string,
  text8: PropTypes.string,
  button: PropTypes.string,
  image_alt: PropTypes.string,
  heading: PropTypes.string,
  text7: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text11: PropTypes.string,
}

export default TripDetailCard
