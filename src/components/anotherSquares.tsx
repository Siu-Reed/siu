import React, { memo } from 'react';
import { BaseAngle, BaseLength, PrsBase, Spec } from '../interface/interface';
import styles from '../css/anotherSquares.module.css';

interface Props {
    spec: Spec;
    baseAngle: BaseAngle;
    baseLength: BaseLength;
    prsBase: PrsBase;
}

const AnotherSquares:React.FC<Props> = memo(({spec, baseAngle, baseLength, prsBase}) => {
    console.log('another squares');
        
    const sqrs = [];

    for (let i:number = 0; i < spec.side; i++) {
        let sqrStyle = {
            width : `${spec.width}rem`,
            height : `${spec.height}rem`,
            left : `${(prsBase.width - spec.width)/2}rem`,
            top : `${(prsBase.height - spec.height)/2}rem`,
            background : spec.color[0],
            transform : `
                rotateZ(${baseAngle.x * i}deg)
                translateY(${spec.height/2 + baseLength.b}rem)
                rotateX(-90deg)
                translateZ(-${spec.height/2}rem)
                translateY(-${spec.height/2}rem)
            `,
        }

        sqrs[i] = (
            <div className={styles.sqr} style={sqrStyle} key={`${i}${Date.now()}`} />
        );
    }
    
    return (
        <>
            {sqrs}
        </>
    );
});

export default AnotherSquares;