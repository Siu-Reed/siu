import React from 'react';
import { BaseAngle, BaseLength, PrsBase, Spec } from '../interface/interface';
import styles from '../css/squares.module.css';

interface Props {
    spec: Spec;
    baseAngle: BaseAngle;
    baseLength: BaseLength;
    prsBase: PrsBase;
}

const Squares:React.FC<Props> = ({spec, baseAngle, baseLength, prsBase}) => {
    
    const sqrs = [];

    for (let i:number = 0; i < spec.side; i++) {
        let sqrStyle = {
            width : spec.width,
            height : spec.height,
            background : spec.color[i%3],
            left : (prsBase.width - spec.width)/2,
            top : (prsBase.height - spec.height)/2,
            transform : `
                rotateZ(${baseAngle.x * i}deg)
                translateY(${spec.height/2 + baseLength.b}px)
                rotateX(-90deg)
                translateZ(-${spec.height/2}px)
                translateY(-${spec.height/2}px)
            `,
        }
        sqrs[i] = <div className={styles.sqr} style={sqrStyle}></div>
    }
    
    return (
        <>
            {sqrs}
        </>
    );
};

export default Squares;