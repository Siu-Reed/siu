import React, { useState } from 'react';
import Hidden from './hidden';
import styles from '../css/threeD.module.css';
import Main from './main';

const ThreeD : React.FC = () => {
    console.log('threeD');
    const [view, setView] = useState<boolean>(false);
    
    let styleThreeD;
    let styleScreen;
    if (!view) {
        styleThreeD = styles.threeDX;
        styleScreen = styles.screenX;
    } else {
        styleThreeD = styles.threeDY;
        styleScreen = styles.screenY;
    }

    const polygonClick = () => {
        setView(true);
    }

    const hiddenBtnClick = () => {
        setView(false);
    }
    return (
        <div className={`${styles.threeD} ${styleThreeD}`}>
            <div className={`${styles.screen} ${styleScreen}`}>
                <Main polygonClick={polygonClick} />
                <Hidden hiddenBtnClick={hiddenBtnClick} />
            </div>
        </div>
    );
};

export default ThreeD;