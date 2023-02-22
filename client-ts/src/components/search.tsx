import React from 'react'

import PropTypes from 'prop-types'

import '../design/search.css'

const Search = (props:any) => {
  return (
    <div className='search-container'>
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
