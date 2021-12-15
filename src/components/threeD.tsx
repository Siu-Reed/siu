import React, { useState, memo, useCallback } from 'react';
import Hidden from './hidden';
import styles from '../css/threeD.module.css';
import Main from './main';
import FloatingNav from './floatingNav';

interface Props {
    me : React.ReactNode;
    writeSurveyData : (resultId:number, tiger:number, retire:number, it:boolean, impression:string, why:string) => void;
}

const ThreeD : React.FC<Props> = memo(({me, writeSurveyData}) => {
    console.log('threeD');
    const [view, setView] = useState<'x'|'y'|'z'|'f'>('f');
    const [aboutSwitch, setAboutSwitch] = useState<boolean>(false);

    let styleThreeD:string;
    let styleScreen:string;
    let zBtnVisible:boolean;
    switch (view) {
        case 'f' : {
            styleThreeD = styles.flat;
            styleScreen = styles.screenX;
            zBtnVisible = true;
            break;
        }
        case 'x' : {
            styleThreeD = styles.live;
            styleScreen = styles.screenX;
            zBtnVisible = true;
            break;
        }
        case 'y' : {
            styleThreeD = styles.live;
            styleScreen = styles.screenY;
            zBtnVisible = true;
            break;
        }
        case 'z' : {
            styleThreeD = styles.live;
            styleScreen = styles.screenZ;
            zBtnVisible = false;
            break;
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
                <Hidden xViewClick={xViewClick} zViewClick={zViewClick} aboutOpen={aboutOpen} aboutClose={aboutClose} zBtnVisible={zBtnVisible} writeSurveyData={writeSurveyData}/>
            </div>
            <FloatingNav view={view} aboutSwitch={aboutSwitch}/>
        </div>
    );
});

export default ThreeD;