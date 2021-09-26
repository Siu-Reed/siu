import React from 'react';
import Polygon from './polygon';
import Squares from './squares';
import { BaseAngle, BaseLength, ContentsValues, PrsBase, Spec } from '../interface/interface';
import styles from '../css/prism.module.css';

interface Props {
    spec: Spec;
    polygonClick: () => void;
    angle: number;
    contentsKeys: Array<string | number>;
    contentsValues: Array<ContentsValues>;
}

const Prism : React.FC<Props> = ({spec, polygonClick, angle, contentsKeys, contentsValues}) => {

    const rad = Math.PI/180;

    const baseAngle:BaseAngle = {
        x : 360/spec.side,
        y : 180/spec.side,
    }

    const baseLength:BaseLength = {    
        b : spec.width / (Math.tan(rad*baseAngle.y) * 2),
        c : spec.width / (Math.sin(rad*baseAngle.y) * 2),    
        d : (spec.width / (Math.sin(rad*baseAngle.y) * 2)) * Math.sin(rad*baseAngle.x),
    }

    const prsBase:PrsBase = {
        width: baseLength.b*2,
        height: baseLength.b*2
    }

    const prsStyle = {
        ...prsBase,
        transform : `rotateZ(${angle}deg)`
    }

    return (
        <div className={styles.prism} style={prsStyle}>
            <Squares spec={spec} baseAngle={baseAngle} baseLength={baseLength} prsBase={prsBase} contentsKeys={contentsKeys} contentsValues={contentsValues}/>
            <Polygon spec={spec} baseAngle={baseAngle} baseLength={baseLength} polygonClick={polygonClick}/>
        </div>
    );
};

export default Prism;