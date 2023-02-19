import React from 'react'

import PropTypes from 'prop-types'

import './search.css'

const Search = (props) => {
  return (
    <div className={`search-container ${props.rootClassName} `}>
      <input
        type="text"
        placeholder="    ค้นหาทัวร์ที่คุณต้องการ"
        className="search-textinput input"
      />
    </div>
  )
}

Search.defaultProps = {
  rootClassName: '',
}

Search.propTypes = {
  rootClassName: PropTypes.string,
}

export default Search
