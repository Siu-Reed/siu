import React, { useState } from 'react';
import Polygon from './polygon';
import Squares from './squares';
import { BaseAngle, BaseLength, PrsBase, Spec } from '../interface/interface';
import styles from '../css/prism.module.css';
import contentsJson from '../service/contents.json';

const Prism:React.FC = () => {
    const [contents] = useState(contentsJson);
    
    const [spec] = useState<Spec>({
        side: 5,
        width: 300,
        height: 600,
        color: [
            "#809071",
            "#798a6d",
            "#758569"
        ]
    });

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
        height: baseLength.b*2,
    }

    return (
        <div className={styles.prism} style={prsBase}>
            <Squares spec={spec} baseAngle={baseAngle} baseLength={baseLength} prsBase={prsBase}/>
            <Polygon spec={spec} baseAngle={baseAngle} baseLength={baseLength} prsBase={prsBase}/>
        </div>
    );
};

export default Prism;