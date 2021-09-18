import React, { useEffect, useRef } from 'react';
import { BaseAngle, BaseLength, Spec } from '../interface/interface';
import styles from '../css/polygon.module.css';

interface Props {
    spec: Spec;
    baseAngle: BaseAngle;
    baseLength: BaseLength;
    polygonClick: () => void;
}

const Polygon: React.FC<Props> = ({spec, baseAngle, baseLength, polygonClick}) => {
    const cvsRef = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        const cvs = cvsRef.current
        if (!cvs) return;
        cvs.width = baseLength.c*2;
        cvs.height = baseLength.c*2;
        cvs.style.position = "absolute";
        cvs.style.top = `${baseLength.b - baseLength.c}px`;
        cvs.style.left = `${baseLength.b - baseLength.c}px`;
        
        const ctx = cvs.getContext('2d');
        if (!ctx) return;
        ctx.save();
        ctx.fillStyle = 'rgba(128, 144, 113, 1)';
        ctx.beginPath();
        
        ctx.translate(baseLength.c, baseLength.c);
        
        for (let j = 0; j < spec.side; j++) {
            const x = baseLength.c * Math.cos((Math.PI/180) * baseAngle.x * j);
            const y = baseLength.c * Math.sin((Math.PI/180) * baseAngle.x * j);

            (j === 0) ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.fill();
        ctx.closePath();
        ctx.restore();
    });

    let rttDeg : number;
        
    if (spec.side % 2 === 0) {
        if (spec.side % 4 === 0) {
            rttDeg = baseAngle.y;
        } else {
            rttDeg = 0;
        }
    } else {
        rttDeg = -90;
    }
    
    const cvsDivStyle = {
        transform : 
        `rotateZ(${rttDeg}deg)
        translateZ(${spec.height}px)`
    };

    const txtStyle = {
        transform :
        `translate(-50%, -50%)
        rotateZ(${rttDeg*-1}deg)`,
    };

    return (
        <div className={styles.cvsDiv} style={cvsDivStyle} onClick={polygonClick}>
            <canvas className={styles.cvs} ref={cvsRef}/>
            <p className={styles.txt} style={txtStyle}>ㅇㅅㅇ</p>
        </div>
    );
};

export default Polygon;