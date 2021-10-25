import React, { memo } from 'react';
import styles from '../css/floatingNav.module.css';

interface Props {
    view: boolean;
    aboutSwitch: boolean;
}

const Header:React.FC<Props> = memo(({view, aboutSwitch}) => {
    console.log('header');
    return (
        <header className={styles.header}>
            <a href="www.eee">Siu Lee</a>
            <a href="www.eee">Contact</a>
        </header>
    );
});

export default Header;