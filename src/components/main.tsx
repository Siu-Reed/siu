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
            <svg className={styles.lineBG} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1920 1080" xmlSpace="preserve">
                <path fill="#87967880" d="M1104.8,979.8c26,7.4,99.6,81.4,123.7,101.1l60-0.9c-27-1.2-83.6-83.1-132.4-93.6  c-48.7-10.5-138.9-74.9-138.9-74.9C1047.2,949.8,1080.5,972.9,1104.8,979.8z"/>
                <path fill="#87967880" d="M882.2,824.4c-29-22.4-132.6-1.9-132.6-1.9v0c24.1,16.1,51.7,30.9,89.1,36.2c9.8,1.4,19,2.3,27.6,3  c0,0,0,0,0,0c1.9,0.1,3.8,0.3,5.7,0.4c0.1,0,0.3,0,0.4,0c3.7,0.2,7.4,0.4,10.9,0.5c0.1,0,0.2,0,0.3,0c7.5,0.3,14.5,0.4,21.1,0.4  c0,0,0,0,0.1,0c0,0,0,0,0,0c6.6,0,12.9-0.1,18.8-0.1c0.8,0,1.6,0,2.4,0c0.4,0,0.9,0,1.3,0c1.2,0,2.3,0,3.4,0c0.3,0,0.6,0,0.8,0  c1,0,2.1,0,3.1,0c0.2,0,0.4,0,0.6,0c1.2,0,2.3,0,3.4,0.1c0.3,0,0.5,0,0.8,0c1.2,0,2.3,0.1,3.4,0.1  C924.4,861.2,911.1,846.8,882.2,824.4z"/>
                <path fill="none" stroke="#879678" strokeMiterlimit="10" d="M1228.5,1080.9c-24.1-19.7-97.7-93.7-123.7-101.1  c-24.2-6.9-57.5-30-87.5-68.3c-4.3-5.5-8.5-11.2-12.6-17.3c-16.8-24.9-35.4-30.2-61.9-31.2c-20-0.7-44.6,1-76.4-1.4  c-8.6-0.6-17.8-1.6-27.6-3c-37.5-5.3-65-20.1-89.1-36.2c-36.1-24.1-64.5-51-107.1-53.4c-71.1-4-92.2-56.6-121.2-75.1  c-29-18.4-102.7,4-173.9-19.8c-71.1-23.7-104-55.3-173.9-84.3S0,564.9,0,564.9V1084h771.5l458.4-2  C1229.5,1081.7,1229,1081.3,1228.5,1080.9z"/>
                <path fill="#87967880" d="M1809.4,976.6c78.9-40.9,90.9-58.5,110.6-92.9v-45.2C1914.7,902.1,1809.6,976.4,1809.4,976.6z"/>
                <path fill="none" stroke="#879678" strokeMiterlimit="10" d="M1809.4,976.6c-5.5,2.9-11.4,5.8-17.6,8.9   c-94.8,47.4-121.2,95.4-121.2,95.4H1920V931v-47.4C1900.3,918.1,1888.3,935.7,1809.4,976.6z"/>        
            </svg>
            <div className={`${styles.con1} ${con1Style}`}>
                <About aboutOpen={aboutOpen} aboutClose={aboutClose} aboutSwitch={aboutSwitch} me={me}/>
            </div>
            <div className={`${styles.con2} ${con2Style}`}>
                {/* <img className={styles.lineBG} src="./img/line_bg.svg" alt="mountain" /> */}
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