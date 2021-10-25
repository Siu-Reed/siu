import React, { memo } from 'react';
import Prism from './prism';
import styles from '../css/portfolio.module.css';

interface Props {
    polygonClick: () => void;
}

const Portfolio : React.FC<Props> = memo(({polygonClick}) => {
    console.log('portfolio');

    return (
        <div className={styles.portfolio}>
            <Prism polygonClick={polygonClick}/>
        </div>
    );
});

export default Portfolio;