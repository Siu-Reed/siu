import React, { useState, memo, useCallback } from 'react';
import Hidden from './hidden';
import styles from '../css/threeD.module.css';
import Main from './main';
import FloatingNav from './floatingNav';

const ThreeD : React.FC = memo(() => {
    console.log('threed');
    const [view, setView] = useState<boolean>(false);
    const [aboutSwitch, setAboutSwitch] = useState<boolean>(false);

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
    
    const aboutOpen = useCallback(() => setAboutSwitch(true), []);
    const aboutClose = useCallback(() => setAboutSwitch(false), []);

    return (
        <div className={`${styles.threeD} ${styleThreeD}`}>
            <div className={`${styles.screen} ${styleScreen}`}>
                <Main polygonClick={polygonClick} aboutSwitch={aboutSwitch} aboutOpen={aboutOpen} aboutClose={aboutClose}/>
                <Hidden hiddenBtnClick={hiddenBtnClick} />
            </div>
            <FloatingNav view={view} aboutSwitch={aboutSwitch}/>
        </div>
    );
});

export default ThreeD;