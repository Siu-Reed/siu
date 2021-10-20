import React, { useLayoutEffect, useRef, MouseEvent, useState, memo, useMemo } from 'react';
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

const About:React.FC<Props> = memo(({aboutOpen, aboutClose, aboutSwitch}) => {
    const newHeights1 = [1/4, 1/4, 1/4, 1/4];
    const newHeights2 = [15/100, 25/100, 55/100, 95/100];
    const newHeights3 = [12/100, 34/100, 56/100, 78/100];
    
    const [page, setPage] = useState(1);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const requestRef = useRef<number>();
    const previousWavesRef = useRef<Array<number>>();
    const [waveHeights, setWaveHeights] = useState<Array<number>>();

    const ratio = window.devicePixelRatio;

    const stageWidth:number = document.body.clientWidth;
    const stageHeight:number = document.body.clientHeight;
    
    const waveGroup = useMemo(() =>
        (new WaveGroup(stageWidth, stageHeight)), [stageWidth, stageHeight]
    );

    const aboutChildren = [<Me key='me' />, <Abilities key='abilities' page={page} />,<Skills key='skills' />];

    const cBoxTransform = { transform : `translateX(${(page-1)*-100}%)` };

    let aboutStyle;
    let hiddenStyle;
    if (aboutSwitch) {
        aboutStyle = styles.click;
        hiddenStyle = styles.appear;
    } else {
        aboutStyle = styles.default
        hiddenStyle = styles.disappear;
    };
    
    let newWaveHeights:Array<number>;
    switch (page) {
        case 1:
            newWaveHeights = newHeights1;
            break;
        case 2:
            newWaveHeights = newHeights2;
            break;
        case 3:
            newWaveHeights = newHeights3;
            break;
    }

    const timeLimit = 1000;
    let timeStart:number;
    function transition (timestamp:DOMHighResTimeStamp) {
        if (!waveHeights) setWaveHeights(newWaveHeights);
        if (!previousWavesRef.current) previousWavesRef.current = newWaveHeights;
        if (!timeStart) timeStart = timestamp;
        const progress = timestamp - timeStart;
        setWaveHeights(previousWavesRef.current!.map((preWave, i) => (
            preWave + (newWaveHeights[i] - preWave)*progress/timeLimit
        )));
        if (progress < timeLimit) {
            requestRef.current = requestAnimationFrame(transition);
        } else {
            previousWavesRef.current = newWaveHeights;
            console.log(`after previous.current - ${previousWavesRef.current}`)
            return () => cancelAnimationFrame(requestRef.current!)
        }
    }


    useLayoutEffect(() => {
        const cvs = canvasRef.current;
        const ctx = cvs!.getContext('2d');
        
        resize();
        requestAnimationFrame(animate);
        requestRef.current = requestAnimationFrame(transition);
        
        function resize() {
            cvs!.width = waveGroup.stageWidth * ratio;
            cvs!.height = waveGroup.stageHeight * ratio;
            ctx!.scale(ratio, ratio);
            waveGroup.resize();
        }
        function animate() {
            waveGroup.draw(ctx!);
            requestAnimationFrame(animate);
        }
        
    }, [ratio, waveGroup]);

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
        requestRef.current = requestAnimationFrame(transition);
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
});

export default About;