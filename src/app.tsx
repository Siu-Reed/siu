import './app.module.css';
import React, { memo } from 'react';
import ThreeD from './components/threeD';

interface Props {
    me : React.ReactNode;
    writeSurveyData : (resultId:number, tiger:number, retire:number, it:boolean, impression:string, why:string) => void;
}

const App: React.FC<Props> = memo(({me, writeSurveyData}) => {
    console.log('app');
    return (
        <>
            <ThreeD me={me} writeSurveyData={writeSurveyData}/>
        </>
    );
});

export default App;