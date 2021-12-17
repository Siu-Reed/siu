import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import Me from './components/me';
import { writeSurveyData } from './service/firebase';
import questionsImg from './json/questionsImg.json';

console.log('index');

const me = <Me key='me'/>;
const surveyImgs = Object.entries(questionsImg)
    .map(([key, value]) => <img src={value} alt={key} key={`${key}img`} className="qstImg" />
);

ReactDOM.render(
    <React.StrictMode>
        {console.log('index')}
        <App me={me} writeSurveyData={writeSurveyData} surveyImgs={surveyImgs}/>
    </React.StrictMode>,
    document.getElementById('root')
);