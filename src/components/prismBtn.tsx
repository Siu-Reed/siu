import React, { useRef, useEffect } from 'react';
import styles from '../css/prismBtn.module.css';

const PrismBtn : React.FC = () => {
    const btnRef = useRef<HTMLCanvasElement>(null);
    const bw = 100;
    const bh = 100;
    
    useEffect(() => {
        const cvs = btnRef.current;
        if (!cvs) return;
        cvs.width = bw;
        cvs.height = bh;

        const ctx = cvs.getContext('2d');
        if (!ctx) return;
        ctx.save();
        ctx.fillStyle = 'rgba(128, 144, 113, 1)';
        ctx.beginPath();
        ctx.translate(bw/2, bh/2);
        const btnAngle = Math.PI*2 / 3;

        for (let j = 0; j < 3; j++) {
            const x = (bw/2) * Math.cos(btnAngle * j);
            const y = (bh/2) * Math.sin(btnAngle * j);
            (j === 0) ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }

        ctx.fill();
        ctx.closePath();
        ctx.restore();
    });

    return (
        <div className={styles.btns}>
            <canvas className={styles.btn} ref={btnRef}/>
            <canvas className={styles.btn} ref={btnRef}/>
        </div>
    );
};

export default PrismBtn;