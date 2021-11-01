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
            <div className={styles.anotherCircle}>
                <div className={styles.intro}>
                    <h2>Front-End Engineer</h2>
                    <br />
                    <h2>With Design</h2>
                </div>
                <AnotherPrism />
            </div>
            <div className={styles.circle}>
                <Prism polygonClick={polygonClick}/>
            </div>
        </div>
    );
});

export default Portfolio;