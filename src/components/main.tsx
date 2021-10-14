import React, { useState } from 'react';
import styles from '../css/main.module.css'
import Header from './header';
import My from './my';
import Portfolio from './portfolio';

interface Props {
    polygonClick: () => void;
}

const Main:React.FC<Props> = ({polygonClick}) => {
    console.log('main');
    const [aboutSwitch, setAboutSwitch] = useState<boolean>(false);
    let con1Style;
    let con2Style;
    if (!aboutSwitch) {
        con1Style = styles.con1_x;
        con2Style =  styles.con2_x;
    } else {
        con1Style = styles.con1_y;
        con2Style =  styles.con2_y;    
    }
    
    const aboutOpen = () => {
        setAboutSwitch(true);
    }
    
    const aboutClose = () => {
        setAboutSwitch(false);
    }
    return (
        <div className={styles.main}>
            <Header />

            <div className={`${styles.con1} ${con1Style}`}>
                <My aboutOpen={aboutOpen} aboutClose={aboutClose} aboutSwitch={aboutSwitch} />
            </div>
            
            <div className={`${styles.con2} ${con2Style}`}>
                <Portfolio polygonClick={polygonClick}/>
            </div>
        </div>
    );
};

export default Main;