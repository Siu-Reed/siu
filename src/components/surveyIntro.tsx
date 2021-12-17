import React, { memo, MouseEvent } from 'react';
import styles from '../css/surveyIntro.module.css';
import { SurveyState } from '../interface/interface';

interface Props {
    setSurveyState : React.Dispatch<React.SetStateAction<SurveyState>>
}

const SurveyIntro:React.FC<Props> = memo(({setSurveyState}) => {
    
    console.log('survey intro');
    
    const surveyStartHandle = (e:MouseEvent) => {
        setSurveyState(SurveyState.Start);
    }

    return (
        <div className={styles.surveyIntro}>
            <div className={styles.surveyText}>
                <h1>※  간단하고 정교한 심리분석 체험</h1>
                <h3>1분도 안 걸려요.</h3>
                <p>사실 2분 정도 걸리는 거 같긴해요.</p>
            </div>
            <div className={styles.surveyCont}>
                <div className={styles.underLine}></div>
                <div className={styles.surveyBtn} onClick={surveyStartHandle}>
                    <h3>시작하기.</h3>
                    <h2>Start Now.</h2>
                </div>
            </div>
        </div>
    );
});

export default SurveyIntro;