import React, {memo, MouseEvent, useCallback} from 'react';
import styles from '../css/survey.module.css';
import { SurveyState } from '../interface/interface';

interface Props {
    setSurveyState : React.Dispatch<React.SetStateAction<SurveyState>>;
}

const SurveyResult:React.FC<Props> = memo(({setSurveyState}) => {

    const resultBtnHndlr = useCallback((e:MouseEvent) => {
        e.preventDefault();
        setSurveyState(SurveyState.End);
    }, [setSurveyState]);

    return (
        <div className={styles.surveyResult}>
            <button className={styles.resultBtn} onClick={resultBtnHndlr}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92.89 92.89">
                    <line x1="12.5" y1="12.5" x2="80.39" y2="80.39" strokeLinecap="round" strokeWidth="25px"/>
                    <line x1="80.39" y1="12.5" x2="12.5" y2="80.39" strokeLinecap="round" strokeWidth="25px"/>
                </svg>
            </button>
            <h3 className={styles.thanks}>
                소중한 응답과 피드백 감사드립니다.
            </h3>
            <div className={styles.iframeHolder}>
                <div className={styles.loader}></div>
                <iframe
                    className={styles.iframe}
                    src="https://www.youtube.com/embed/ImXhbFPCO1c?autoplay=1&amp;mute=0&amp;autohide=1&amp;controls=0&amp;start=82&amp;end=90" 
                    title="YouTube video player"
                    frameBorder="0"
                    allow="autoplay;"
                    allowFullScreen
                />
            </div>
        </div>
    );
});

export default SurveyResult;