import '../css/app.module.css';
import React, { memo } from 'react';
import ThreeD from './threeD';
import { SubmitObject } from '../interface/interface';

interface Props {
    me : React.ReactNode;
    writeSurveyData : (submit: SubmitObject) => Promise<void>;
    surveyImgs : JSX.Element[];
}

const App: React.FC<Props> = memo(({me, writeSurveyData, surveyImgs}) => {
    console.log('app');
    return (
        <>
            <ThreeD me={me} writeSurveyData={writeSurveyData} surveyImgs={surveyImgs}/>
        </>
    );
});

export default App;