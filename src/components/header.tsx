import React, { memo } from 'react';
import styles from '../css/header.module.css'

const Header:React.FC = memo(() => {
    console.log('header');
    return (
        <header className={styles.header}>
            <a href="">Siu Lee</a>
            <a href="">Contact</a>
        </header>
    );
});

export default Header;