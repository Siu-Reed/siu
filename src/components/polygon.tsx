import React, { useEffect, useRef } from 'react';
import { BaseAngle, BaseLength, PrsBase, Spec } from '../interface/interface';
import styles from '../css/polygon.module.css';

interface Props {
    spec: Spec;
    baseAngle: BaseAngle;
    baseLength: BaseLength;
    prsBase: PrsBase;
}

const Polygon: React.FC<Props> = ({spec, baseAngle, baseLength, prsBase}) => {
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
    //     // 다각형 텍스트
    //     if (i == 1) {
    //         textArea = document.createElement("p");
    //         textArea.innerHTML = "The<br>Portfolio";
    //         textArea.style.position = "absolute";
    //         textArea.style.top = "50%";
    //         textArea.style.left = "50%";
    //         textArea.style.transform = `translate(-50%, -50%) rotateZ(${rttDeg*-1}deg)`;
    //         textArea.style.fontSize = "3em";
    //         textArea.style.color = "#3f4a34";
    //         textArea.style.fontFamily = "ColorsOfAutumn";
    //         textArea.style.textAlign = "center";
    //         canvasDiv.appendChild(textArea);
    //     }
    // }

    return (
        <div className={styles.cvsDiv} style={cvsDivStyle}>
            <canvas className={styles.cvs} ref={cvsRef}/>
        </div>
    );
};

export default Polygon;