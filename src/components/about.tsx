import React, { useEffect, useRef } from 'react';
import styles from '../css/about.module.css';
import { WaveGroup } from '../visual/wave/waveGroup';

const About:React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const ratio = window.devicePixelRatio;
        
    useEffect(() =>{
        const cvs = canvasRef.current;
        if (!cvs) return;
        const ctx = cvs.getContext('2d');
        if (!ctx) return;
        const cvsWidth = cvs.clientWidth;
        const cvsHeight = cvs.clientHeight;

        const resize = () => {
            cvs.width = cvsWidth * ratio;
            cvs.height = cvsHeight * ratio;
            ctx.scale(ratio, ratio);
        }

        window.addEventListener('resize',resize);

        // const animate = (t) => {
        //     ctx.clearRect(0, 0, cvsWidth, cvsHeight);
        //     WaveGroup
        // }

    }, [])

    return (
        <div className={styles.about}>
            <canvas className={styles.wave} ref={canvasRef}/>
        </div>
    );
};

export default About;