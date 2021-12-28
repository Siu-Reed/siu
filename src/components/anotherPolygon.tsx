import React, { memo, useEffect, useRef } from 'react';
import { BaseAngle, BaseLength, Spec } from '../interface/interface';
import styles from '../css/anotherPolygon.module.css';

interface Props {
    spec: Spec;
    baseAngle: BaseAngle;
    baseLength: BaseLength;
}

const AnotherPolygon: React.FC<Props> = memo(({spec, baseAngle, baseLength}) => {
    const cvsRef = useRef<HTMLCanvasElement>(null);
    const ratio = window.devicePixelRatio;

    useEffect(() => {
        const cvs = cvsRef.current
        if (!cvs) return;

        cvs.style.width = `${baseLength.c*2}em`;
        cvs.style.height = `${baseLength.c*2}em`;
        cvs.style.position = "absolute";
        cvs.style.top = `${baseLength.b - baseLength.c}em`;
        cvs.style.left = `${baseLength.b - baseLength.c}em`;

        const ctx = cvs.getContext('2d');
        cvs.width = baseLength.c*2 * 16 * ratio;
        cvs.height = baseLength.c*2 * 16 * ratio;
        ctx!.scale(ratio, ratio);
        if (!ctx) return;
        ctx.save();
        ctx.fillStyle = '#aa0004';
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
        translateZ(${spec.height}em)`
    };

    return (
        <div className={styles.cvsDiv} style={cvsDivStyle}>
            <canvas className={styles.cvs} ref={cvsRef}/>
        </div>
    );
});

export default AnotherPolygon;