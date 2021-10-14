import './app.module.css';
import React from 'react';
import ThreeD from './components/threeD';

const App: React.FC = () => {
    console.log('app');
    return (
        <>
            <ThreeD />
        </>
    );
};

export default App;