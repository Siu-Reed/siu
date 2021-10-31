import React, { memo } from 'react';
import { BaseAngle, BaseLength, ContentsValues, PrsBase, Spec } from '../interface/interface';
import styles from '../css/squares.module.css';

interface Props {
    spec: Spec;
    baseAngle: BaseAngle;
    baseLength: BaseLength;
    prsBase: PrsBase;
    contentsKeys: Array<string | number>;
    contentsValues: Array<ContentsValues>;
}

const Squares:React.FC<Props> = memo(({spec, baseAngle, baseLength, prsBase, contentsKeys, contentsValues}) => {
    console.log('squares');
    
    const sqrs = [];

    for (let i:number = 0; i < spec.side; i++) {
        let sqrStyle = {
            width : `${spec.width}rem`,
            height : `${spec.height}rem`,
            left : `${(prsBase.width - spec.width)/2}rem`,
            top : `${(prsBase.height - spec.height)/2}rem`,
            background : spec.color[i%3],
            transform : `
                rotateZ(${baseAngle.x * i}deg)
                translateY(${spec.height/2 + baseLength.b}rem)
                rotateX(-90deg)
                translateZ(-${spec.height/2}rem)
                translateY(-${spec.height/2}rem)
            `,
        }

        const itemsKeys = Object.keys(contentsValues[i].items);
        const itemsValues = Object.values(contentsValues[i].items);

        const items = itemsKeys.map((key, index) =>
            <li key={key} className={styles.li}>
                <a href={itemsValues[index]} target="_new">{key}</a>
            </li>
        );

        sqrs[i] = (
        <div className={styles.sqr} style={sqrStyle} key={contentsKeys[i]}>
            <h3 className={styles.h3}>
                # 0{contentsKeys[i]}
            </h3>
            <h2 className={styles.h2}>
                {contentsValues[i].category}
            </h2>
            <ul className={styles.ul}>
                {items}
            </ul>
        </div>
        )
    }
    
    return (
        <>
            {sqrs}
        </>
    );
});

export default Squares;