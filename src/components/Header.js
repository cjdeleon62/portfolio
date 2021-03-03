import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';

const Header = ({ toggleSidebarVisible }) => (
    <header className={styles.Header}>
        <div className={styles.NavIcon} onClick={toggleSidebarVisible}>
            <FontAwesomeIcon icon={faBars} />
        </div>
    </header>
);

export default Header;