import React, { memo, useCallback } from 'react';
import styles from '../css/hidden.module.css';
import Survey from './survey';

interface Props {
    xViewClick: () => void;
    zViewClick: () => void;
    aboutOpen: () => void;
    aboutClose: () => void;
    zBtnVisible: boolean;
    writeSurveyData : (resultId:number, tiger:number, retire:number, it:boolean, impression:string, why:string) => void;
};

const Hidden : React.FC<Props> = memo(({xViewClick, zViewClick, aboutOpen, aboutClose, zBtnVisible, writeSurveyData}) => {
    console.log('hidden');

    const opacity = zBtnVisible ? styles.opaque : styles.clear;

    const xViewHandle = useCallback(() => {
        xViewClick();
        aboutClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const zViewHandle = useCallback(() => {
        zViewClick();
        aboutOpen();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className={`${styles.hidden} ${opacity}`}>
            <div className={styles.resetBtn} onClick={xViewHandle}>
                <h2>Back to 2D</h2>
                <h3>이전 상태</h3>
                <h1>←</h1>
            </div>
            <div className={`${styles.meta}`}>
                <h1 className={styles.title}>Welcome to cosy 3D web.</h1>
                {zBtnVisible && <h3>이쪽 면을 크게 보고 싶으시다면,</h3>}
                {zBtnVisible && <div className={styles.zBtn} onClick={zViewHandle}>여기를 클릭하세요.</div>}
            </div>
            <div className={`${styles.survey}`}>
                <img src="./img/pin.png" alt="pin" className={styles.pin}/>
                <img src="./img/pen.png" alt="pen" className={styles.pen}/>
                <div className={styles.surveyText}>
                    <h1>※  간단하고 정교한 심리분석 체험</h1>
                    <h3>1분도 안 걸려요.</h3>
                    <p>사실 2분 정도 걸리는 거 같긴해요.</p>
                </div>
                <div className={styles.surveyCont}>
                    <div className={styles.underLine}></div>
                    <div className={styles.surveyBtn}>
                        <h2>Start Now</h2>
                        <h3>시작하기 →</h3>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Hidden