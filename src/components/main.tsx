import React, { memo } from 'react';
import styles from '../css/main.module.css'
import About from './about';
import Portfolio from './portfolio';

interface Props {
    polygonClick: () => void;
    aboutSwitch: boolean;
    aboutOpen: () => void;
    aboutClose: () => void;
}

const Main:React.FC<Props> = memo(({polygonClick, aboutSwitch, aboutOpen, aboutClose}) => {
    console.log('main');
    let con1Style;
    let con2Style;
    let visiblity;
    if (!aboutSwitch) {
        con1Style = styles.con1_x;
        con2Style =  styles.con2_x;
        visiblity = styles.visible;
    } else {
        con1Style = styles.con1_y;
        con2Style =  styles.con2_y;
        visiblity = styles.hidden;    
    }

    return (
        <div className={styles.main}>
            <div className={`${styles.con1} ${con1Style}`}>
                <About aboutOpen={aboutOpen} aboutClose={aboutClose} aboutSwitch={aboutSwitch} />
            </div>
            <div className={`${styles.con2} ${con2Style}`}>
                <Portfolio polygonClick={polygonClick}/>
            </div>
            <img className={`${styles.plant} ${visiblity}`} src="./img/plant.gif" alt="plant" />
            <div className={`${styles.desc} ${visiblity}`}>
                Copyright ⓒ 2021 by Siu Lee. All page contents are properties of Siu Lee.
            </div>
        </div>
    );
});

export default Main;