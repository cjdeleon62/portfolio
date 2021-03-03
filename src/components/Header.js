import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import './Header.scss';

const Header = ({ toggleSidebarVisible }) => (
    <header className="Header">
        <div className="NavIcon" onClick={toggleSidebarVisible}>
            <FontAwesomeIcon icon={faBars} />
        </div>
    </header>
);

export default Header;