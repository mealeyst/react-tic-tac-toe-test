import React, { PropTypes } from 'react'

const Space = ({ onClick }) => (
  <button
    onClick={onClick}
  >
  </button>
)

Space.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default Space;