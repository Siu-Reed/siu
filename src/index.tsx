import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import Me from './components/me';

console.log('index');

const me = <Me key='me'/>; 

ReactDOM.render(
    <React.StrictMode>
        {console.log('index')}
        <App me={me}/>
    </React.StrictMode>,
    document.getElementById('root')
);