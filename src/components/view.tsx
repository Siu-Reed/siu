import React, { useState } from 'react';
import styles from '../css/view.module.css';
import ThreeD from './threeD';

interface Screen {
    screen : string;
}

const View : React.FC = () => {
    
    const [screen, setScreen] = useState<Screen>({
        screen: styles.x,
    });

    const rotateScreen = () => {
        setScreen({ screen: styles.y });
    }

    return (
        <div className={`${styles.view} ${screen.screen}`}>
            <ThreeD rotateScreen={rotateScreen}/>
        </div>
    );
};
export default View;