import './app.module.css';
import React, { memo } from 'react';
import ThreeD from './components/threeD';

const App: React.FC = memo(() => {
    console.log('app');
    return (
        <>
            <ThreeD />
        </>
    );
});

export default App;