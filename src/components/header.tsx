import React, { memo } from 'react';
import styles from '../css/header.module.css'

const Header:React.FC = memo(() => {
    console.log('header');
    return (
        <header className={styles.header}>
            
        </header>
    );
});

export default Header;