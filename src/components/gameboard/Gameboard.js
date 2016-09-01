import React, { PropTypes } from 'react';

import styles from './Gameboard.css';

const Gameboard = ({children}) => (<div className={styles.gameboard}>{children}</div>);

export default Gameboard;
