import React, { useState, memo, useCallback, MouseEvent } from 'react';
import Hidden from './hidden';
import styles from '../css/threeD.module.css';
import Main from './main';
import { Action, SubmitObject, View } from '../interface/interface';
import Mailer from '../service/mail';
import Mail from './mail';
import Contact from './contact';

interface Props {
    me : React.ReactNode;
    writeSurveyData : (submit: SubmitObject) => Promise<void>;
    surveyImgs : JSX.Element[];
    mailService : Mailer;
}

const ThreeD : React.FC<Props> = memo(({me, writeSurveyData, surveyImgs, mailService}) => {

    const [view, setView] = useState<View>(View.F);
    const [aboutSwitch, setAboutSwitch] = useState<boolean>(false);
    const [action, setAction] = useState<Action>(Action.Default);

    let dimension:string;
    let zBtnVisible:boolean;
    let styleScreen:string;
    let styleHeader:string;
    let positionAbout:string;

    switch (view) {
        case View.F : {
            dimension = styles.flat;
            styleScreen = styles.screenX;
            styleHeader = styles.headerX;
            zBtnVisible = true;
            aboutSwitch ?
            (positionAbout = styles.aboutTrue) :
            (positionAbout = styles.aboutFalse);
            break;
        }
        case View.X : {
            dimension = styles.solid;
            styleScreen = styles.screenX;
            styleHeader = styles.headerX;
            zBtnVisible = true;
            aboutSwitch ?
            (positionAbout = styles.aboutTrue) :
            (positionAbout = styles.aboutFalse);
            break;
        }
        case View.Y : {
            dimension = styles.solid;
            styleScreen = styles.screenY;
            styleHeader = styles.headerY;
            zBtnVisible = true;
            (positionAbout = styles.aboutFalse);
            break;
        }
        case View.Z : {
            dimension = styles.solid;
            styleScreen = styles.screenZ;
            styleHeader = styles.headerZ;
            zBtnVisible = false;
            (positionAbout = styles.aboutFalse);
            break;
        }
    }

    const xViewClick = useCallback(() => setView(View.X), []);
    const polygonClick = useCallback(() => setView(View.Y), []);
    const zViewClick = useCallback(() => setView(View.Z), []);
    const aboutOpen = useCallback(() => setAboutSwitch(true), []);
    const aboutClose = useCallback(() => setAboutSwitch(false), []);

    const fViewClick = useCallback((e:MouseEvent) => {
        setView(View.F);
        setAboutSwitch(false);
    }, []);
    
    const mailAction = useCallback((e:MouseEvent) => {
        setAction(Action.Mail);
    }, []);
    const contactAction = useCallback((e:MouseEvent) => {
        setAction(Action.Contact);
    }, []);
    const closeAction = useCallback((e:MouseEvent) => {
        e.preventDefault();
        setAction(Action.Default);
    }, []);

    return (
        <div className={`${styles.threeD} ${dimension}`}>
            <div className={`${styles.screen} ${styleScreen}`}>
                <Main polygonClick={polygonClick} aboutSwitch={aboutSwitch} aboutOpen={aboutOpen} aboutClose={aboutClose} me={me}/>
                <Hidden xViewClick={xViewClick} zViewClick={zViewClick} aboutOpen={aboutOpen} aboutClose={aboutClose} zBtnVisible={zBtnVisible} writeSurveyData={writeSurveyData} surveyImgs={surveyImgs}/>
            </div>
            <header className={`${styles.header} ${styleHeader} ${positionAbout}`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92.33 81.93">
                    <line x1="8.5" y1="8.5" x2="83.83" y2="8.5" />
                    <line x1="8.5" y1="40.97" x2="83.83" y2="40.97" />
                    <line x1="8.5" y1="73.43" x2="83.83" y2="73.43" />
                </svg>
                <div className={styles.headerBtn} onClick={fViewClick}>
                    SIU
                </div>
                <div className={styles.headerBtn} onClick={mailAction}>
                    MAIL
                </div>
                <div className={styles.headerBtn} onClick={contactAction}>
                    CONTACT
                </div>
            </header>
            
            {(action !== Action.Default) && (<div className={styles.actionContainer}>
                <button className={styles.actionClose} onClick={closeAction}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92.89 92.89">
                        <line x1="12.5" y1="12.5" x2="80.39" y2="80.39" strokeLinecap="round" strokeWidth="25px"/>
                        <line x1="80.39" y1="12.5" x2="12.5" y2="80.39" strokeLinecap="round" strokeWidth="25px"/>
                    </svg>
                </button>
                {(action === Action.Mail) && <Mail mailService={mailService}/>}
                {(action === Action.Contact) && <Contact />}
            </div>)}
        </div>
    );
});

export default ThreeD;