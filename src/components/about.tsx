import React, { useEffect, useRef } from 'react';
import styles from '../css/about.module.css';
import { WaveGroup } from '../visual/wave-group';

interface Props {
    aboutClick: () => void;
    aboutSwitch: boolean;
}

const About:React.FC<Props> = ({aboutClick, aboutSwitch}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    let aboutStyle;
    aboutSwitch ? aboutStyle = styles.click : aboutStyle = styles.default;

    const ratio = window.devicePixelRatio;

    useEffect(() =>{
        const cvs = canvasRef.current;
        const ctx = cvs!.getContext('2d');
        
        let stageWidth:number;
        let stageHeight:number;
        if (aboutSwitch) {
            stageWidth = document.body.clientWidth;
            stageHeight = document.body.clientHeight;
        } else {
            stageWidth = cvs!.clientWidth;
            stageHeight = cvs!.clientHeight;
        }
    
        const waveGroup = new WaveGroup(stageWidth, stageHeight);
        
        resize();
        requestAnimationFrame(animate);
        
        function resize() {
            cvs!.width = stageWidth * ratio;
            cvs!.height = stageHeight * ratio;
            ctx!.scale(ratio, ratio);
            waveGroup.resize();
        }
        function animate() {
            ctx!.clearRect(0, 0, stageWidth, stageHeight);
            waveGroup.draw(ctx!);            
            requestAnimationFrame(animate);
        }
    }, [ratio, aboutSwitch]);
        
    return (
        <div className={`${styles.about} ${aboutStyle}`} onClick={aboutClick}>
            <canvas className={styles.wave} ref={canvasRef}/>
        </div>
    );
};

export default About;