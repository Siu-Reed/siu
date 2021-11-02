import React, { useState, memo, useCallback } from 'react';
import Hidden from './hidden';
import styles from '../css/threeD.module.css';
import Main from './main';
import FloatingNav from './floatingNav';

interface Props {
    me : React.ReactNode;
}

const ThreeD : React.FC<Props> = memo(({me}) => {
    console.log('threeD');
    const [view, setView] = useState<'x'|'y'|'z'|'f'>('f');
    const [aboutSwitch, setAboutSwitch] = useState<boolean>(false);

    let styleThreeD;
    let styleScreen;
    switch (view) {
        case 'f' : {
            styleThreeD = styles.flat;
            styleScreen = styles.screenX;
            break
        }
        case 'x' : {
            styleThreeD = styles.live;
            styleScreen = styles.screenX;
            break
        }
        case 'y' : {
            styleThreeD = styles.live;
            styleScreen = styles.screenY;
            break
        }
        case 'z' : {
            styleThreeD = styles.live;
            styleScreen = styles.screenZ;
            break
        }
    }

    const xViewClick = useCallback(() => setView('x'), []);
    const polygonClick = useCallback(() => setView('y'), []);
    const zViewClick = useCallback(() => setView('z'), []);
    
    const aboutOpen = useCallback(() => setAboutSwitch(true), []);
    const aboutClose = useCallback(() => setAboutSwitch(false), []);

    return (
        <div className={`${styles.threeD} ${styleThreeD}`}>
            <div className={`${styles.screen} ${styleScreen}`}>
                <Main polygonClick={polygonClick} aboutSwitch={aboutSwitch} aboutOpen={aboutOpen} aboutClose={aboutClose} me={me}/>
                <Hidden xViewClick={xViewClick} zViewClick={zViewClick} aboutOpen={aboutOpen} aboutClose={aboutClose}/>
            </div>
            <FloatingNav view={view} aboutSwitch={aboutSwitch}/>
        </div>
    );
});

export default ThreeD;