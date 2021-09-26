import React from 'react';
import styles from '../css/main.module.css'
import Header from './header';
import My from './my';
import Portfolio from './portfolio';

interface Props {
    polygonClick: () => void;
}

const Main:React.FC<Props> = ({polygonClick}) => {
    return (
        <div className={styles.main}>
            <Header />
            <My />
            <Portfolio polygonClick={polygonClick}/>
        </div>
    );
};

export default Main;