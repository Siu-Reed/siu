import React, { memo, useEffect, useRef, MouseEvent } from 'react';
import { BaseAngle, BaseLength, Spec } from '../interface/interface';
import styles from '../css/polygon.module.css';

interface Props {
    spec: Spec;
    baseAngle: BaseAngle;
    baseLength: BaseLength;
    polygonClick: () => void;
}

const Polygon: React.FC<Props> = memo(({spec, baseAngle, baseLength, polygonClick}) => {
    console.log('polygon');
    const cvsRef = useRef<HTMLCanvasElement>(null);
    const ratio = window.devicePixelRatio;

    useEffect(() => {
        const cvs = cvsRef.current
        if (!cvs) return;

        cvs.style.width = `${baseLength.c*2}rem`;
        cvs.style.height = `${baseLength.c*2}rem`;
        cvs.style.position = "absolute";
        cvs.style.top = `${baseLength.b - baseLength.c}rem`;
        cvs.style.left = `${baseLength.b - baseLength.c}rem`;

        const ctx = cvs.getContext('2d');
        cvs.width = baseLength.c*2 * 16 * ratio;
        cvs.height = baseLength.c*2 * 16 * ratio;
        ctx!.scale(ratio, ratio);
        if (!ctx) return;
        ctx.save();
        ctx.fillStyle = '#e8e1be';
        ctx.beginPath();
        
        ctx.translate(baseLength.c*16, baseLength.c*16);
        
        for (let j = 0; j < spec.side; j++) {
            const x = baseLength.c*16 * Math.cos((Math.PI/180) * baseAngle.x * j);
            const y = baseLength.c*16 * Math.sin((Math.PI/180) * baseAngle.x * j);

            (j === 0) ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.fill();
        ctx.closePath();
        ctx.restore();
    }, [baseAngle.x, baseLength.b, baseLength.c, spec.side, ratio]);

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
        translateZ(${spec.height}rem)`
    };

    const txtStyle = {
        transform :
        `translate(-50%, -50%)
        rotateZ(${rttDeg*-1}deg)`,
    };

    const plgClick = (e:MouseEvent) => {
        e.preventDefault();
        polygonClick();
    }

    return (
        <div className={styles.cvsDiv} style={cvsDivStyle} onClick={plgClick}>
            <canvas className={styles.cvs} ref={cvsRef}/>
            <h1 className={styles.txt} style={txtStyle}>works</h1>
        </div>
    );
});

export default Polygon;