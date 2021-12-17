import React, { memo, MouseEvent, useCallback, useRef, useState } from 'react';
import questions from '../json/questions.json';
import styles from '../css/survey.module.css';
import Question from './question';
import Textarea from './textarea';
import SurveySubmit from './surveySubmit';
import { SubmitObject, SurveyState } from '../interface/interface';
import LastQuestion from './lastQuestion';

interface Props {
    setSurveyState : React.Dispatch<React.SetStateAction<SurveyState>>;
    writeSurveyData : (submit: SubmitObject) => Promise<void>;
    surveyImgs : JSX.Element[];
}

const Survey:React.FC<Props> = memo(({setSurveyState, writeSurveyData, surveyImgs}) => {
    
    console.log('survey');

    const [qstNumber, setQstNumber] = useState<number>(0);
    const [qstResults, setQstResults] = useState<Object>({});
    const resultsRef = useRef<Object>();
    resultsRef.current = qstResults;

    const injectResult = useCallback((result:Object) => 
        setQstResults((preSt) => Object.assign(preSt, result))
    , []);

    const qstEntries = Object.entries(questions);
    const beforeBtnHndlr = useCallback((e:MouseEvent) => {
        setQstNumber((preSt) => preSt-1)
    },[]);
    
    const qstList = qstEntries
        .map(([key, value], index) => { return (
            <Question
                key={key}
                name={key}
                index={index}
                question={value.question}
                options={value.options}
                injectResult={injectResult}
                setQstNumber={setQstNumber}
            />
        )})
        .concat([
            <Textarea injectResult={injectResult} setQstNumber={setQstNumber}/>,
            <LastQuestion setQstNumber={setQstNumber}/>,
            <SurveySubmit setSurveyState={setSurveyState} qstResults={resultsRef.current} writeSurveyData={writeSurveyData}/>
        ]);

    return (
        <div className={styles.surveyBox}>
            {surveyImgs[qstNumber]}
            <div className={styles.leftoverPaper} />
            {qstList[qstNumber]}
            {!!qstNumber && <div className={styles.beforeBtn} onClick={beforeBtnHndlr}>
                ←&nbsp;&nbsp;&nbsp;이전 질문
            </div>}
        </div>
    );
});

export default Survey;