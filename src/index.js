import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';

ReactDOM.render(
    <React.StrictMode>
        {console.log('index')}
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);