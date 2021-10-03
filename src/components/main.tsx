import React from 'react';
import styles from '../css/main.module.css'
import Header from './header';
import My from './my';
import Portfolio from './portfolio';

interface Props {
    polygonClick: () => void;
    aboutClick: () => void;
    aboutClose: () => void;
    aboutSwitch: boolean;
}

const Main:React.FC<Props> = ({polygonClick, aboutClick, aboutClose, aboutSwitch}) => {

    let con1Style;
    let con2Style;
    if (!aboutSwitch) {
        con1Style = styles.con1_x;
        con2Style =  styles.con2_x;
    } else {
        con1Style = styles.con1_y;
        con2Style =  styles.con2_y;    
    }

    return (
        <div className={styles.main}>
            <Header />

            <div className={`${styles.con1} ${con1Style}`}>
                <My aboutClick={aboutClick} aboutClose={aboutClose} aboutSwitch={aboutSwitch}/>
            </div>
            
            <div className={`${styles.con2} ${con2Style}`}>
                <Portfolio polygonClick={polygonClick}/>
            </div>
        </div>
    );
};

export default Main;