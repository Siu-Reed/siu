import React, { memo, useState, useMemo, useCallback, MouseEvent } from 'react';
import Polygon from './polygon';
import Squares from './squares';
import contentsJson from '../json/contents.json';
import squareSpec from '../json/squareSpec.json';
import { BaseAngle, BaseLength, ContentsValues, PrsBase, Spec } from '../interface/interface';
import styles from '../css/prism.module.css';

interface Props {
    polygonClick: () => void;
}

const Prism : React.FC<Props> = memo(({polygonClick}) => {
    console.log('prism');
    
    const contentsKeys:Array<string | number> = useMemo(() => Object.keys(contentsJson), []);
    const contentsValues:Array<ContentsValues> = useMemo(() => Object.values(contentsJson), []);

    const side = useMemo(() => contentsKeys.length, [contentsKeys.length]);
    const spec:Spec = useMemo(() => Object({
        side: side,
        ...squareSpec
    }), [side]);

    const [angle, setAngle] = useState<number>(0);
    const angleValue = useMemo(() => 360/spec.side, [spec.side]);

    const rad = useMemo(() => Math.PI/180, []);

    const baseAngle:BaseAngle = useMemo(() => Object({
        x : 360/spec.side,
        y : 180/spec.side,
    }), [spec.side]);

    const baseLength:BaseLength = useMemo(() => Object({    
        b : spec.width / (Math.tan(rad*baseAngle.y) * 2),
        c : spec.width / (Math.sin(rad*baseAngle.y) * 2),    
        d : (spec.width / (Math.sin(rad*baseAngle.y) * 2)) * Math.sin(rad*baseAngle.x),
    }), [baseAngle.x, baseAngle.y, rad, spec.width])

    const prsBase:PrsBase = useMemo(() => Object({
        width: baseLength.b*2,
        height: baseLength.b*2
    }), [baseLength.b]);

    const prsHomeStyle = {
        width : `${prsBase.width}rem`,
        height : `${prsBase.height}rem`,
    }

    const plusAngle = useCallback((e:MouseEvent) => {
        e.preventDefault();
        setAngle((angle) => angle + angleValue);
    }, [angleValue]);

    const minusAngle = useCallback((e:MouseEvent) => {
        e.preventDefault();
        setAngle((angle) => angle - angleValue);
    }, [angleValue]);

    return (
        <div style={prsHomeStyle} className={styles.prsHome}>
            <button className={`${styles.btn} ${styles.left}`} onClick={plusAngle}>
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 100 100" xmlSpace="preserve">
                    <path d="M91.834,83.806L51.605,14.126c-0.333-0.577-0.949-0.932-1.615-0.932c-0.666,0-1.281,0.355-1.614,0.932L8.03,84.01  c-0.333,0.577-0.333,1.287,0,1.864c0.333,0.576,0.948,0.932,1.614,0.932h80.694c0.008,0.001,0.015,0,0.019,0  c1.029,0,1.863-0.835,1.863-1.863C92.22,84.515,92.076,84.12,91.834,83.806z" />
                </svg>
            </button>
            <button className={`${styles.btn} ${styles.right}`} onClick={minusAngle}>
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 100 100" xmlSpace="preserve">
                    <path d="M91.834,83.806L51.605,14.126c-0.333-0.577-0.949-0.932-1.615-0.932c-0.666,0-1.281,0.355-1.614,0.932L8.03,84.01  c-0.333,0.577-0.333,1.287,0,1.864c0.333,0.576,0.948,0.932,1.614,0.932h80.694c0.008,0.001,0.015,0,0.019,0  c1.029,0,1.863-0.835,1.863-1.863C92.22,84.515,92.076,84.12,91.834,83.806z" />
                </svg>
            </button>
            <div className={styles.prism} style={{transform : `rotateZ(${angle}deg)`}}>
                <Squares spec={spec} baseAngle={baseAngle} baseLength={baseLength} prsBase={prsBase} contentsKeys={contentsKeys} contentsValues={contentsValues}/>
                <Polygon spec={spec} baseAngle={baseAngle} baseLength={baseLength} polygonClick={polygonClick}/>
                <h3 className={styles.notice}>Click this ↑</h3>
            </div>
        </div>
    );
});

export default Prism;