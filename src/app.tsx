import './app.module.css';
import React, { memo } from 'react';
import ThreeD from './components/threeD';

interface Props {
    me : React.ReactNode;
}

const App: React.FC<Props> = memo(({me}) => {
    console.log('app');
    return (
        <>
            <ThreeD me={me}/>
        </>
    );
});

export default App;