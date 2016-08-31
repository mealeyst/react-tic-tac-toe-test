import React, { PropTypes } from 'react'

const Cell = ({ onClick, row, col }) => (
  <button onClick={() => onClick(row, col)}>cell</button>
)

Cell.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default Cell;