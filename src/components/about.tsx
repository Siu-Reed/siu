import React, { useEffect, useLayoutEffect, useRef, MouseEvent, useState, memo, useMemo } from 'react';
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
    console.log('ㅇㅅㅇ');
    const [page, setPage] = useState(1);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const ctxRef = useRef<CanvasRenderingContext2D>();
    const animationRef = useRef<Function>();

    const heights1 = useMemo(() => [1/4, 1/4, 1/4, 1/4], []);
    const heights2 = useMemo(() => [15/100, 25/100, 55/100, 95/100], []);
    const heights3 = useMemo(() => [12/100, 34/100, 56/100, 78/100], []);
        
    const newWavesRef = useRef<Array<number>>();
    const previousWavesRef = useRef<Array<number>>();
    const requestRef = useRef<number>();

    const [waveHeights, setWaveHeights] = useState<Array<number>>();

    const ratio = window.devicePixelRatio;

    const stageWidth:number = document.body.clientWidth;
    const stageHeight:number = document.body.clientHeight;
    
    const waveGroup = useMemo(() =>
        (new WaveGroup(stageWidth, stageHeight, heights1)), [stageWidth, stageHeight, heights1]
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

    const timeLimit = 1000;
    let timeStart:number;
    function transition (timestamp:DOMHighResTimeStamp) {
        if (!waveHeights) setWaveHeights(newWavesRef.current);
        if (!previousWavesRef.current) {previousWavesRef.current = newWavesRef.current} else {
            if (!timeStart) timeStart = timestamp;
            const progress = timestamp - timeStart;
            setWaveHeights(previousWavesRef.current.map((preWave, i) => (
                preWave + (newWavesRef.current![i] - preWave)*progress/timeLimit
            )));
            if (progress < timeLimit) {
                requestRef.current = requestAnimationFrame(transition);
            } else {
                previousWavesRef.current = newWavesRef.current;
                return () => cancelAnimationFrame(requestRef.current!);
            }
        }
    }

    useLayoutEffect(() => {
        const cvs = canvasRef.current;
        const ctx = cvs!.getContext('2d');

        ctxRef.current = ctx!;
        animationRef.current = animate;
        
        resize();
        requestAnimationFrame(animate);
        
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

    useLayoutEffect(() => {
        switch (page) {
            case 1:
                newWavesRef.current = heights1;
                requestRef.current = requestAnimationFrame(transition);
                break;
            case 2:
                newWavesRef.current = heights2;
                requestRef.current = requestAnimationFrame(transition);
                break;
            case 3:
                newWavesRef.current = heights3;
                requestRef.current = requestAnimationFrame(transition);
                break;
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    useEffect(() => {
        waveGroup.resize(waveHeights);
        waveGroup.draw(ctxRef.current!);
    }, [waveGroup, waveHeights]);

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
        (value!==0) && (value!==aboutChildren.length+1) && setPage(value);
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