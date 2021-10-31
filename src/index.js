import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';

console.log('index');

ReactDOM.render(
    <React.StrictMode>
        {console.log('index')}
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);