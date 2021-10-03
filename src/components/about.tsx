import React, { useEffect, useRef } from 'react';
import styles from '../css/about.module.css';
import { WaveGroup } from '../visual/wave-group';

interface Props {
    aboutClick: () => void;
    aboutClose: () => void;
    aboutSwitch: boolean;
}

const About:React.FC<Props> = ({aboutClick, aboutClose, aboutSwitch}) => {
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
    
    const closeHandler = () => {
        aboutClose();
    }

    return (
        <div className={`${styles.about} ${aboutStyle}`} onClick={aboutClick}>
            <canvas className={styles.wave} ref={canvasRef}/>
            <div className={styles.contents}>

            </div>
            <div className={styles.btnBox}>
                <button className={`${styles.btn} ${styles.close}`} onClick={closeHandler}>닫기</button>
                <button className={`${styles.btn} ${styles.right}`}>오른</button>
                <button className={`${styles.btn} ${styles.left}`}>왼</button>
            </div>
        </div>
    );
};

export default About;