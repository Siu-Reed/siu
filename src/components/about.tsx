import React, { useEffect, useRef, MouseEvent, useState } from 'react';
import styles from '../css/about.module.css';
import { WaveGroup } from '../visual/wave-group';
import Me from './me';
import Abilities from './abilities';
import Skills from './skills';

interface Props {
    aboutOpen: () => void;
    aboutClose: () => void;
    aboutSwitch: boolean;
}

const About:React.FC<Props> = ({aboutOpen, aboutClose, aboutSwitch}) => {
    const [page, setPage] = useState(1);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    
    const aboutChildren = [<Me key='me' />, <Abilities key='abilities' />,<Skills />];

    const cBoxTransform = { transform : `translateX(${(page-1)*-100}%)` }

    let aboutStyle;
    let hiddenStyle;
    if (aboutSwitch) {
        aboutStyle = styles.click;
        hiddenStyle = styles.appear;
    } else {
        aboutStyle = styles.default
        hiddenStyle = styles.disappear;
    };
    const ratio = window.devicePixelRatio;

    useEffect(() =>{
        const cvs = canvasRef.current;
        const ctx = cvs!.getContext('2d');
        const page3Wave = [14/100, 36/100, 58/100, 80/100];
        
        let stageWidth:number;
        let stageHeight:number;
        let waveHeight:number | Array<number>;

        if (aboutSwitch) {
            stageWidth = document.body.clientWidth;
            stageHeight = document.body.clientHeight;
            if (page === 3) {
                waveHeight = page3Wave;
            } else {
                waveHeight = 1/4;
            }
        } else {
            stageWidth = cvs!.clientWidth;
            stageHeight = cvs!.clientHeight;
        }
    
        const waveGroup = new WaveGroup(stageWidth, stageHeight);
        resize(waveHeight!);
        requestAnimationFrame(animate);
        function resize(waveHeight: number | Array<number> = 1/4) {
            cvs!.width = stageWidth * ratio;
            cvs!.height = stageHeight * ratio;
            ctx!.scale(ratio, ratio);
            console.log('resize');
            waveGroup.resize(waveHeight);
        }
        function animate() { 
            ctx!.clearRect(0, 0, stageWidth, stageHeight);
            waveGroup.draw(ctx!);
            requestAnimationFrame(animate);
        }
        console.log('isthis??');
    }, [ratio, aboutSwitch, page]);

    const waveClick = (e:MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        aboutOpen();
    }

    const closeClick = (e:MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        aboutClose();
    }

    const pageHandler = ( e: MouseEvent<HTMLButtonElement> ) => {
        e.preventDefault();
        e.stopPropagation();
        const value = page + parseInt(e.currentTarget.dataset.value!);
        !(value===0) && !(value===aboutChildren.length+1) && setPage(value);
    }

    return (
        <div className={`${styles.about} ${aboutStyle}`} >
            <canvas className={styles.wave} ref={canvasRef} onClick={waveClick}/>
            <div className={`${styles.contentsBox} ${hiddenStyle}`} style={cBoxTransform}>
                {aboutSwitch && aboutChildren}
            </div>
            <button className={`${styles.btn} ${styles.close} ${hiddenStyle}`} onClick={closeClick}>닫기</button>
            <button className={`${styles.btn} ${styles.left} ${hiddenStyle}`} onClick={pageHandler} data-value={-1}>왼</button>
            <button className={`${styles.btn} ${styles.right} ${hiddenStyle}`} onClick={pageHandler} data-value={1}>오른</button>
        </div>
    );
};

export default About;