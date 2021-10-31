import React, { memo, useState, useMemo, useCallback } from 'react';
import { BaseAngle, BaseLength, PrsBase, Spec } from '../interface/interface';
import AnotherSquares from './anotherSquares';
import AnotherPolygon from './anotherPolygon';
import styles from '../css/anotherPrism.module.css';

const AnotherPrism : React.FC = memo(() => {
    console.log('another prism');

    const [side, setSide] = useState<number>(3);
    const spec:Spec = useMemo(() => Object({
        side: side,
        height: 20,
        width: 13*3/side,
        color : ['linear-gradient(to right, #d6d1b1, #cec9aa)'],
    }), [side]);

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

    const controllerStyle = {
        transform: `translateX(-50%) rotateX(-90deg) translateY(-${spec.height+5}rem)`
    }

    const sidePlus = useCallback(() => {
        setSide((side) => side+1);
    }, []);

    const sideMinus = useCallback(() => {
        setSide((side) => (side>3)?(side-1):(side));
    }, []);

    return (
        <div style={prsHomeStyle} className={styles.prsHome}>
            <div className={styles.prism}>
                <AnotherSquares spec={spec} baseAngle={baseAngle} baseLength={baseLength} prsBase={prsBase}/>
                <AnotherPolygon spec={spec} baseAngle={baseAngle} baseLength={baseLength}/>
                <div className={styles.controller} style={controllerStyle}>
                    <div className={styles.heights}>
                        <h3>It's nothing</h3>
                        <h4>just ignore it</h4>
                    </div>
                    <div className={styles.btns}>
                        <h3 className={styles.minus} onClick={sideMinus}>-</h3>
                        <h3 className={styles.plus} onClick={sidePlus}>+</h3>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default AnotherPrism;