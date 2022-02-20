import React, { memo, useCallback, useState } from 'react';
import styles from '../css/hidden.module.css';
import { SubmitObject, SurveyState } from '../interface/interface';
import Survey from './survey';
import SurveyIntro from './surveyIntro';
import SurveyResult from './surveyResult';

interface Props {
    xViewClick: () => void;
    zViewClick: () => void;
    aboutOpen: () => void;
    aboutClose: () => void;
    writeSurveyData : (submit: SubmitObject) => Promise<void>;
    zBtnVisible: boolean;
    surveyImgs : JSX.Element[];
};

const Hidden : React.FC<Props> = memo(({xViewClick, zViewClick, aboutOpen, aboutClose, zBtnVisible, writeSurveyData, surveyImgs}) => {

    const [surveyState, setSurveyState] = useState<SurveyState>(SurveyState.Ready);
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

    let surveyCont;
    let surveyStyle;

    switch(surveyState) {
        case SurveyState.Ready :
            surveyCont = <SurveyIntro setSurveyState={setSurveyState} />;
            surveyStyle = styles.defaultStyle;
            break;
        case SurveyState.Start :
            surveyCont = <Survey setSurveyState={setSurveyState} writeSurveyData={writeSurveyData} surveyImgs={surveyImgs}/>;
            surveyStyle = styles.defaultStyle;
            break;
        case SurveyState.Result :
            surveyCont = <SurveyResult setSurveyState={setSurveyState} />;
            surveyStyle = styles.resultStyle;
            break;
        case SurveyState.End :
            surveyCont = null;
            surveyStyle = styles.endStyle;
            break;
        default : break;
    }
    return (
        <div className={`${styles.hidden} ${opacity}`}>
            <h2 className={styles.sorry}>
                죄송해요...
                <br />
                그냥은 피드백 안 해줄 거 같아서
                심리테스트인 척 했어요
            </h2>
            <div className={styles.resetBtn} onClick={xViewHandle}>
                <h2>Back to 2D</h2>
                <h3>이전 상태</h3>
                <h1>←</h1>
            </div>
            { zBtnVisible ?
                (<div className={`${styles.zBtnCont}`}>
                    <h3>이쪽 면을 크게 보고 싶으시다면,</h3>
                    <div className={styles.zBtn} onClick={zViewHandle}>여기를 클릭하세요.</div>
                </div>) : 
                (<h1 className={styles.title}>Welcome to brand-new 3D web.</h1>)
            }
            <div className={`${styles.survey} ${surveyStyle}`}>
                {!zBtnVisible && <img src="https://drive.google.com/uc?export=view&amp;id=1amemP3jebLqbe2qXa3EBW91CujI9w5u9" alt="pen" className={styles.pen} crossOrigin={undefined} />}
                <img src="https://drive.google.com/uc?export=view&amp;id=1onnjQUmh77T2Jpcww12SsCniVGkbBRhs" alt="pin" className={styles.pin} crossOrigin={undefined} />
                {!zBtnVisible && surveyCont}
            </div>
        </div>
    );
});

export default Hidden