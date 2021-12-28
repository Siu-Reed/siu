import React, { memo } from 'react';
import styles from '../css/main.module.css'
import About from './about';
import Portfolio from './portfolio';

interface Props {
    polygonClick: () => void;
    aboutSwitch: boolean;
    aboutOpen: () => void;
    aboutClose: () => void;
    me : React.ReactNode;
}

const Main:React.FC<Props> = memo(({polygonClick, aboutSwitch, aboutOpen, aboutClose, me}) => {
    let con1Style;
    let con2Style;
    let visiblity;
    if (!aboutSwitch) {
        con1Style = styles.con1_aboutFalse;
        con2Style =  styles.con2_aboutFalse;
        visiblity = styles.visible;
    } else {
        con1Style = styles.con1_aboutTrue;
        con2Style =  styles.con2_aboutTrue;
        visiblity = styles.hidden;    
    }

    return (
        <div className={styles.main}>
            <div className={`${styles.con} ${styles.con1} ${con1Style}`}>
                <About aboutOpen={aboutOpen} aboutClose={aboutClose} aboutSwitch={aboutSwitch} me={me}/>
            </div>
            <div className={`${styles.con} ${styles.con2} ${con2Style}`}>
                <Portfolio polygonClick={polygonClick}/>
            </div>
            <footer className={`${styles.footer} ${visiblity}`}>
                Copyright ⓒ 2021 by Siu Lee. All page contents are properties of Siu Lee.
            </footer>
        </div>
    );
});

export default Main;