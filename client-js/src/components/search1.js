import React from 'react'

import PropTypes from 'prop-types'

import Search from './search'
import './search1.css'

const Search1 = (props) => {
  return (
    <div className={`search1-container ${props.rootClassName} `}>
      <Search className=""></Search>
    </div>
  )
}

Search1.defaultProps = {
  rootClassName: '',
}

Search1.propTypes = {
  rootClassName: PropTypes.string,
}

export default Search1
