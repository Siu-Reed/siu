import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import Me from './components/me';
import { writeSurveyData } from './service/firebase';
import questionsImg from './json/questionsImg.json';
import HttpClient from './network/http';
import MailService from './service/mail';

const serverURL = process.env.REACT_APP_SERVER_URL!;
const httpClient = new HttpClient(serverURL);
const mailService = new MailService(httpClient);

const me = <Me key='me'/>;
const surveyImgs = Object.entries(questionsImg)
    .map(([key, value]) => <img src={value} alt={key} key={`${key}img`} className="qstImg" crossOrigin='anonymous' />
);

ReactDOM.render(
    <React.StrictMode>
        <App me={me} writeSurveyData={writeSurveyData} surveyImgs={surveyImgs} mailService={mailService}/>
    </React.StrictMode>
    ,
    document.getElementById('root')
);