import React, { memo } from 'react';
import Prism from './prism';
import AnotherPrism from './anotherPrism';
import styles from '../css/portfolio.module.css';

interface Props {
    polygonClick: () => void;
}

const Portfolio : React.FC<Props> = memo(({polygonClick}) => {
    console.log('portfolio');

    return (
        <div className={styles.portfolio}>
            <div className={`${styles.column} ${styles.column1}`}></div>
            
            <div className={`${styles.column} ${styles.column2}`}>
                
                <div className={`${styles.row} ${styles.row1}`}>
                
                    <div className={`${styles.row} ${styles.row3}`}>
                        <div className={styles.anoPrismCont}>
                            <AnotherPrism />
                        </div>
                    </div>
                
                    <div className={`${styles.row} ${styles.row4}`}>
                        <div className={styles.prismCont}>
                            <Prism polygonClick={polygonClick}/>
                        </div>
                    </div>
                
                </div>

                <div className={`${styles.row} ${styles.row2}`}></div>
            </div>
        </div>
    );
});

export default Portfolio;