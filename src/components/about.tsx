import React, { useEffect, useRef, MouseEvent, useState } from 'react';
import styles from '../css/about.module.css';
import { WaveGroup } from '../visual/wave-group';
import Me from './me';
import Abilities from './abilities';
import Skills from './skills';

interface Props {
    aboutClick: () => void;
    aboutClose: ( e: MouseEvent<HTMLButtonElement> ) => void;
    aboutSwitch: boolean;
}

const About:React.FC<Props> = ({aboutClick, aboutClose, aboutSwitch}) => {
    const [page, setPage] = useState(1);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    
    const aboutChildren:Array<JSX.Element> = [<Me />, <Abilities />,<Skills />];

    const pageHandler = ( e: MouseEvent<HTMLButtonElement> ) => {
        e.preventDefault();
        e.stopPropagation();
        const value = page + parseInt(e.currentTarget.dataset.value!);
        !(value===0) && !(value===aboutChildren.length+1) && setPage(value);
    }

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
            <div className={styles.contents}>
                {aboutSwitch && aboutChildren}
            </div>
            <div className={styles.btnBox}>
                <button className={`${styles.btn} ${styles.close}`} onClick={aboutClose}>닫기</button>
                <button className={`${styles.btn} ${styles.right}`} onClick={pageHandler} data-value={-1}>오른</button>
                <button className={`${styles.btn} ${styles.left}`} onClick={pageHandler} data-value={1}>왼</button>
            </div>
        </div>
    );
};

export default About;