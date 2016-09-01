import React, { PropTypes } from 'react';

import styles from './Header.css';

const Header = ({children}) => (<header className={styles.header}>{children}</header>);

export default Header;
