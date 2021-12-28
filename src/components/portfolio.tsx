import React, { memo } from 'react';
import Prism from './prism';
import AnotherPrism from './anotherPrism';
import styles from '../css/portfolio.module.css';

interface Props {
    polygonClick: () => void;
}

const Portfolio : React.FC<Props> = memo(({polygonClick}) => {
    return (
        <div className={styles.portfolio}>
            <div className={`${styles.grid} ${styles.scriptContainer}`}>
                <h3 className={styles.script}>｜이 시우</h3>
            </div>
            <div className={styles.grid}></div>
            <div className={styles.grid}></div>
            <div className={styles.grid}></div>
            
            <div className={`${styles.grid} ${styles.anoPrismCont}`}>
                <AnotherPrism />
            </div>
            
            <div className={`${styles.grid} ${styles.scriptContainer}`}>
                <h3 className={`${styles.script} ${styles.script_1}`}>。˚FRONT-END</h3>
                <h3 className={`${styles.script} ${styles.script_2}`}>DEVELOPER˚。</h3>
            </div>

            <div className={`${styles.grid} ${styles.prismCont}`}>
                <Prism polygonClick={polygonClick}/>
            </div>
            
            <div className={styles.grid}>
            </div>
            <div className={`${styles.grid} ${styles.duneImg}`}></div>
        </div>
    );
});

export default Portfolio;