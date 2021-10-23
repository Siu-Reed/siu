import React, { useState, memo, useCallback } from 'react';
import Hidden from './hidden';
import styles from '../css/threeD.module.css';
import Main from './main';

const ThreeD : React.FC = memo(() => {
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

    const polygonClick = useCallback(() => setView(true), []);
    const hiddenBtnClick = useCallback(() => setView(false), []);

    return (
        <div className={`${styles.threeD} ${styleThreeD}`}>
            <div className={`${styles.screen} ${styleScreen}`}>
                <Main polygonClick={polygonClick} />
                <Hidden hiddenBtnClick={hiddenBtnClick} />
            </div>
        </div>
    );
});

export default ThreeD;