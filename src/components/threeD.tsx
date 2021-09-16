import React, { useEffect, useRef } from 'react';
import Hidden from './hidden';
import Main from './main';
import styles from '../css/threeD.module.css';

const ThreeD : React.FC = () => {
    
    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const threeD = divRef.current;
        if (!threeD) return;
        threeD.style.transform = `rotateX(90deg) translateY(-${(cHeight/2)}px) translateZ(-${(cHeight/2)}px)`;
    })

    const polygonClick = () => {

    }

    return (
        <div className={styles.threeD} ref={divRef}>
            <Main polygonClick={polygonClick}/>
            <Hidden />
        </div>
    );
};

export default ThreeD;