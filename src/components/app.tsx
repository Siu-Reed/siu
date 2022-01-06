import '../css/app.module.css';
import React, { memo, useState } from 'react';
import ThreeD from './threeD';
import { SubmitObject } from '../interface/interface';
import Mailer from '../service/mail';
import Intro from './intro';

interface Props {
    me : React.ReactNode;
    writeSurveyData : (submit: SubmitObject) => Promise<void>;
    surveyImgs : JSX.Element[];
    mailService : Mailer;
}

const App: React.FC<Props> = memo(({me, writeSurveyData, surveyImgs, mailService}) => {

    const [intro, setIntro] = useState<boolean>(true);

    return (
        <>
            <ThreeD me={me} writeSurveyData={writeSurveyData} surveyImgs={surveyImgs} mailService={mailService}/>
            {intro && <Intro setIntro={setIntro}/>}
        </>
    );
});

export default App;