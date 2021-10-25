import React, { useEffect, useLayoutEffect, useRef, MouseEvent, useState, useMemo, useCallback } from 'react';
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
    console.log('about');
    const [page, setPage] = useState(1);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const ctxRef = useRef<CanvasRenderingContext2D>();
    const animationRef = useRef<Function>();

    const heights1 = useMemo(() => [1/4, 1/4, 1/4, 1/4, 1/4, 1/4, 1/4, 1/4], []);
    const heights2 = useMemo(() => [15/100, 15/100, 25/100, 25/100, 55/100, 55/100, 95/100, 95/100], []);
    const heights3 = useMemo(() => [12/100, 12/100, 34/100, 34/100, 56/100, 56/100, 78/100, 78/100], []);

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

    const aboutChildren = useMemo(() => [<Me key='me' />, <Abilities key='abilities' page={page} />,<Skills key='skills' />], [page]);

    const cBoxTransform = { transform : `translateX(${(page-1)*-100}%)` };

    let aboutStyle;
    let hiddenStyle;
    let startStyle;
    if (aboutSwitch) {
        aboutStyle = styles.click;
        hiddenStyle = styles.appear;
        startStyle = styles.disappear;
    } else {
        aboutStyle = styles.default
        hiddenStyle = styles.disappear;
        startStyle = styles.appear;
    };

    const timeLimit = 1100;
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

    const waveClick = useCallback((e:MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        aboutOpen();
    }, [aboutOpen]);

    const closeClick = useCallback((e:MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        aboutClose();
    }, [aboutClose])

    const pageHandler = ( e: MouseEvent<HTMLButtonElement> ) => {
        e.preventDefault();
        e.stopPropagation();
        const value = page + parseInt(e.currentTarget.dataset.value!);
        (value!==0) && (value!==aboutChildren.length+1) && setPage(value);
    }

    return (
        <div className={`${styles.about} ${aboutStyle}`} >
            <h2 className={`${styles.aboutMe} ${startStyle}`}>About Me</h2>
            <canvas className={styles.wave} ref={canvasRef} onClick={waveClick}/>
            <div className={`${styles.contentsBox} ${hiddenStyle}`} style={cBoxTransform}>
                {aboutChildren}
            </div>
            <button className={`${styles.btn} ${styles.close} ${hiddenStyle}`} onClick={closeClick}>
                x
            </button>
            <button className={`${styles.btn} ${styles.arrow} ${styles.left} ${hiddenStyle}`} onClick={pageHandler} data-value={-1}>
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 100 100" xmlSpace="preserve">
                    <path d="M91.834,83.806L51.605,14.126c-0.333-0.577-0.949-0.932-1.615-0.932c-0.666,0-1.281,0.355-1.614,0.932L8.03,84.01  c-0.333,0.577-0.333,1.287,0,1.864c0.333,0.576,0.948,0.932,1.614,0.932h80.694c0.008,0.001,0.015,0,0.019,0  c1.029,0,1.863-0.835,1.863-1.863C92.22,84.515,92.076,84.12,91.834,83.806z" />
                </svg>
            </button>
            <button className={`${styles.btn} ${styles.arrow} ${styles.right} ${hiddenStyle}`} onClick={pageHandler} data-value={1}>
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 100 100" xmlSpace="preserve">
                    <path d="M91.834,83.806L51.605,14.126c-0.333-0.577-0.949-0.932-1.615-0.932c-0.666,0-1.281,0.355-1.614,0.932L8.03,84.01  c-0.333,0.577-0.333,1.287,0,1.864c0.333,0.576,0.948,0.932,1.614,0.932h80.694c0.008,0.001,0.015,0,0.019,0  c1.029,0,1.863-0.835,1.863-1.863C92.22,84.515,92.076,84.12,91.834,83.806z" />
                </svg>
            </button>
            <h3 className={styles.notice}>Click this ↑</h3>
        </div>
    );
};

export default About;