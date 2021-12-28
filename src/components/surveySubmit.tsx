import React, {memo, MouseEvent} from 'react';
import { SubmitObject, SurveyState } from '../interface/interface';
import styles from '../css/survey.module.css';

interface Props {
    writeSurveyData : (submit: SubmitObject) => Promise<void>;
    qstResults : any;
    setSurveyState : React.Dispatch<React.SetStateAction<SurveyState>>;
}

const SurveySubmit:React.FC<Props> = memo(({writeSurveyData, qstResults, setSurveyState}) => {

    const submitHandle = (e:MouseEvent) => {
        e.preventDefault();
        writeSurveyData(qstResults).then(() => setSurveyState(SurveyState.Result));  
    }
    return (
        <>
        <h3 className={styles.submitTxt1}>결과가 나왔습니다!</h3>
        <p className={styles.submitTxt2}>※ 소리를 키거나 이어폰을 착용해주세요.</p>
        <h2 className={styles.submitBtn} onClick={submitHandle}>결과보기</h2>
        </>
    );
});

export default SurveySubmit;