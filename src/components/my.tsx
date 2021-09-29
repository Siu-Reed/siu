import React from 'react';
import styles from '../css/my.module.css'
import About from './about';

const My : React.FC = () => {
    return (
        <div className={styles.my}>
            <About />
        </div>
    );
};

export default My;