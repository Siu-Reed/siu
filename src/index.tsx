import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import Me from './components/me';
import { writeSurveyData } from './service/firebase';

console.log('index');

const me = <Me key='me'/>; 

ReactDOM.render(
    <React.StrictMode>
        {console.log('index')}
        <App me={me} writeSurveyData={writeSurveyData} />
    </React.StrictMode>,
    document.getElementById('root')
);