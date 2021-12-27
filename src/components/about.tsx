import React, { useRef, MouseEvent, useState, useCallback, memo, useEffect, useMemo } from 'react';
import styles from '../css/about.module.css';
import Abilities from './abilities';
import Skills from './skills';
import Wave from './wave';

interface Props {
    aboutOpen: () => void;
    aboutClose: () => void;
    aboutSwitch: boolean;
    me : React.ReactNode;
}

const About:React.FC<Props> = memo(({aboutOpen, aboutClose, aboutSwitch, me}) => {
    console.log('about');

    const heights1 = useMemo(() => [1/4, 1/4, 1/4, 1/4, 1/4, 1/4, 1/4, 1/4], []);
    const heights2 = useMemo(() => [15/100, 15/100, 25/100, 25/100, 55/100, 55/100, 95/100, 95/100], []);
    const heights3 = useMemo(() => [12/100, 12/100, 34/100, 34/100, 56/100, 56/100, 78/100, 78/100], []);
    
    const [page, setPage] = useState(1);
    const [maxPage, setMaxPage] = useState<number>();
    const heights = useRef<Array<number>>(heights1);
    const abilitiesAni = useRef<boolean>(false);

    const resizeHandle = useCallback(() => {
        if(document.body.clientWidth > 768 ) {
            if(maxPage !== 3) setMaxPage(3);
        } else {
            if(maxPage !== 5) setMaxPage(5);
        }
    },[maxPage]);

    useEffect(() => {
        window.addEventListener('resize', resizeHandle);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    resizeHandle();

    if(maxPage === 3) {
        switch (page) {
            case 1: {
                heights.current = heights1;
                abilitiesAni.current = false;
                break;
            }
            case 2: {
                heights.current = heights2;
                abilitiesAni.current = true;
                break;
            }
            case 3: {
                heights.current = heights3;
                abilitiesAni.current = false;
                break;
            }
            default: {
                setPage(3);
                break;
            }
        }
    } else {
        switch (page) {
            case 1:
            case 2: {
                heights.current = heights1;
                abilitiesAni.current = false;
                break;
            }
            case 3:
            case 4: {
                heights.current = heights2;
                abilitiesAni.current = true;
                break;
            }
            case 5: {
                heights.current = heights3;
                abilitiesAni.current = false;
                break;
            }
        }
    }

    const containerRef = useRef<HTMLDivElement>(null);


    const cBoxTransform = { transform : `translateX(${(page-1)*-100}vw)` };

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
        (value!==0) && (value < maxPage!+1) && setPage(value);
    }

    return (
        <>
        <div className={`${styles.about} ${aboutStyle}`} onClick={waveClick}>
            <Wave heights={heights.current}/>
            <img src="./img/cloud.png" alt="cloud" className={`${styles.cloud} ${startStyle}`}/>
            <h1 className={`${styles.aboutMe} ${startStyle}`}>Click This</h1>
            <div className={`${styles.contentsBox} ${hiddenStyle}`} style={cBoxTransform} ref={containerRef}>
                {me}
                <Abilities abilitiesAni={abilitiesAni.current} />
                <Skills />
            </div>
            <button className={`${styles.btn} ${styles.close} ${hiddenStyle}`} onClick={closeClick}>
                x
            </button>
            <button className={`${styles.btn} ${styles.arrow} ${styles.left} ${hiddenStyle}`} onClick={pageHandler} data-value={-1}>
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" xmlSpace="preserve">
                    <path d="M91.834,83.806L51.605,14.126c-0.333-0.577-0.949-0.932-1.615-0.932c-0.666,0-1.281,0.355-1.614,0.932L8.03,84.01  c-0.333,0.577-0.333,1.287,0,1.864c0.333,0.576,0.948,0.932,1.614,0.932h80.694c0.008,0.001,0.015,0,0.019,0  c1.029,0,1.863-0.835,1.863-1.863C92.22,84.515,92.076,84.12,91.834,83.806z" />
                </svg>
            </button>
            {(page!==maxPage) && (<button className={`${styles.btn} ${styles.arrow} ${styles.right} ${hiddenStyle}`} onClick={pageHandler} data-value={1}>
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" xmlSpace="preserve">
                    <path d="M91.834,83.806L51.605,14.126c-0.333-0.577-0.949-0.932-1.615-0.932c-0.666,0-1.281,0.355-1.614,0.932L8.03,84.01  c-0.333,0.577-0.333,1.287,0,1.864c0.333,0.576,0.948,0.932,1.614,0.932h80.694c0.008,0.001,0.015,0,0.019,0  c1.029,0,1.863-0.835,1.863-1.863C92.22,84.515,92.076,84.12,91.834,83.806z" />
                </svg>
            </button>)}
        </div>
        </>
    );
});

export default About;