import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import './Header.css';

const Header = () => (
    <header className="Header">
        <div className="NavIcon">
            <FontAwesomeIcon icon={faBars} />
        </div>
    </header>
);

export default Header;