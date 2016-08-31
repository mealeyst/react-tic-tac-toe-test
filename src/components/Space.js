import React, { PropTypes } from 'react'

const Space = ({ onClick, index, value, spaces }) => (
  <button onClick={onClick.bind(this, index)} disabled={!!spaces[index]}>{value}</button>
)

Space.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default Space;