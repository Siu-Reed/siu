import '../css/app.module.css';
import React, { memo } from 'react';
import ThreeD from './threeD';
import { SubmitObject } from '../interface/interface';
import Mailer from '../service/mail';

interface Props {
    me : React.ReactNode;
    writeSurveyData : (submit: SubmitObject) => Promise<void>;
    surveyImgs : JSX.Element[];
    mailService : Mailer;
}

const App: React.FC<Props> = memo(({me, writeSurveyData, surveyImgs, mailService}) => {
    console.log('app');
    return (
        <>
            <ThreeD me={me} writeSurveyData={writeSurveyData} surveyImgs={surveyImgs} mailService={mailService}/>
        </>
    );
});

export default App;