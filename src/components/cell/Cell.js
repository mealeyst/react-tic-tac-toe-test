import React, { PropTypes } from 'react';
import IconX from 'babel!svg-react!../../svg/player-1.svg?name=IconX';
import IconO from 'babel!svg-react!../../svg/player-2.svg?name=IconO';

import styles from './Cell.css';

const Cell = ({ onClick, value, index, move, freeze }) => {
  let icon;
  if(move === 'X') {
    icon = <IconX />;
  } else if(move === 'O') {
    icon = <IconO />;
  } else {
    icon = null;
  }

  let disabled = !!move || freeze;

  return (
    <button className={styles.cell} onClick={() => onClick(value, index)} disabled={disabled}>
      {icon}
    </button>
  );
}

Cell.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default Cell;
