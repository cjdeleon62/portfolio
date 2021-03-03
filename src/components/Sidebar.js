import React from 'react';

import styles from './Sidebar.module.scss';

const navItems = [
    { name: 'link 1', url: '#' },
    { name: 'link 2', url: '#' },
    { name: 'link 3', url: '#' },
];

const Sidebar = ({ isSidebarVisible }) => (
    <nav className={isSidebarVisible ? styles.SidebarVisible : styles.Sidebar}>
        <ul>
            {navItems.forEach((item) => {
                <li><a href={item.url}>{item.name}</a></li>
            })}
        </ul>
    </nav>
);

export default Sidebar;