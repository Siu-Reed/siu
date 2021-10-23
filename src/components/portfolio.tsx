import React, { memo } from 'react';
import Prism from './prism';
import { Spec } from '../interface/interface';
import styles from '../css/portfolio.module.css';
import contentsJson from '../json/contents.json';
import squareSpec from '../json/squareSpec.json';

interface Props {
    polygonClick: () => void;
}

const Portfolio : React.FC<Props> = memo(({polygonClick}) => {
    console.log('portfolio');
    const contentsKeys = Object.keys(contentsJson);
    const contentsValues = Object.values(contentsJson);

    const side = contentsKeys.length;
    const spec:Spec ={
        side: side,
        ...squareSpec
    };

    return (
        <div className={styles.portfolio}>
            <Prism spec={spec} polygonClick={polygonClick} contentsKeys={contentsKeys} contentsValues={contentsValues}/>
        </div>
    );
});

export default Portfolio;