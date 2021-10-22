import React, { memo, useState } from 'react';
import Prism from './prism';
import PrismBtn from './prismBtn';
import { Spec } from '../interface/interface';
// import styles from '../css/portfolio.module.css';
import contentsJson from '../json/contents.json';
import squareSpec from '../json/squareSpec.json';

interface Props {
    polygonClick: () => void;
}

const Portfolio : React.FC<Props> = memo(({polygonClick}) => {
    const contentsKeys = Object.keys(contentsJson);
    const contentsValues = Object.values(contentsJson);

    const side = contentsKeys.length;
    
    const spec:Spec ={
        side: side,
        ...squareSpec
    };
    
    const [angle, setAngle] = useState<number>(0);
    
    const angleValue = 360/spec.side;
    
    const plusAngle = (e:Event) => {
        e.preventDefault();
        setAngle((angle) => angle+angleValue);
    };
    
    const minusAngle = (e:Event) => {
        e.preventDefault();
        setAngle((angle) => angle-angleValue);
    };

    return (
        <>
            <PrismBtn plusAngle={plusAngle} minusAngle={minusAngle}/>
            <Prism spec={spec} polygonClick={polygonClick} angle={angle} contentsKeys={contentsKeys} contentsValues={contentsValues}/>
        </>
    );
});

export default Portfolio;