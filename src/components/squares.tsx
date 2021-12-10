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
            width : `${spec.width}em`,
            height : `${spec.height}em`,
            left : `${(prsBase.width - spec.width)/2}em`,
            top : `${(prsBase.height - spec.height)/2}em`,
            border : `2px solid ${spec.color[i%4]}`,
            background : `linear-gradient(to bottom, ${spec.color[i%4]} 0%, #000000 30%, #000000 100%`,
            transform : `
                rotateZ(${baseAngle.x * i}deg)
                translateY(${spec.height/2 + baseLength.b}em)
                rotateX(-90deg)
                translateZ(-${spec.height/2}em)
                translateY(-${spec.height/2}em)
            `,
        }

        const items = contentsValues[i].items;

        sqrs[i] = (
        <div className={styles.sqr} style={sqrStyle} key={contentsKeys[i]}>
            <h3 className={styles.h3}>
                # 0{contentsKeys[i]}
            </h3>
            <a className={styles.browse} href={items.Browse} target="_new">
                {contentsValues[i].name}
            </a>
            <ul className={styles.ul}>
                <li className={styles.li}>
                    <h3>Description</h3>
                    <p>{items.Desc}</p>
                </li>
                <li className={styles.li}>
                    <h3>Stack</h3>
                    <p>{items.Stack}</p>
                </li>
                <li className={styles.li}>
                    <a href={items.Git} target="_new"><h3>Git</h3></a>
                </li>
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