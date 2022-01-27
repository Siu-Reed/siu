import React, { memo, useState, useMemo, useCallback, MouseEvent, useEffect, useRef } from 'react';
import styles from '../css/prism.module.css';
import { PrismSpec } from '../visual/prismspec';
import {PolygonContents, Spec} from '../interface/interface'

interface Props {
    prismVar: Spec;
    rotatable: boolean;
    addable: boolean;
    polygonContents?: PolygonContents;
    squaresContents?: Array<JSX.Element>;
    polygonClick?: () => void;
}

const Prism : React.FC<Props> = memo(({prismVar, rotatable, addable, polygonContents, squaresContents, polygonClick}) => {
    const fixWidth = useMemo<number>(() => prismVar.width, [prismVar.width]);
    const [angle, setAngle] = useState<number>(0);
    const [side, setSide] = useState<number>(prismVar.side);
    const [width, setWidth] = useState<number>(fixWidth/side);
    const cvsRef = useRef<HTMLCanvasElement>(null);
    const prismHandle = (e:MouseEvent) => {
        e.preventDefault();
        if (polygonClick)
        polygonClick();
    }

    const spec = useMemo(() => {
        if (addable) { return new PrismSpec(
            width,
            prismVar.height,
            side,
            prismVar.colors,
            prismVar.color
        )} else {  return new PrismSpec(
            fixWidth,
            prismVar.height,
            side,
            prismVar.colors,
            prismVar.color
        )}
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    , [side]);

    const rotateBtnsGenerator = useCallback(() => {
        if (!rotatable) return;
        const plusAngle = (e:MouseEvent) => {
            e.preventDefault();
            setAngle((angle) => angle + spec.angle);
        };
        const minusAngle = (e:MouseEvent) => {
            e.preventDefault();
            setAngle((angle) => angle - spec.angle);
        };
        return (
            <>
                <button className={`${styles.btn} ${styles.left}`} onClick={plusAngle}>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" xmlSpace="preserve">
                        <path d="M91.834,83.806L51.605,14.126c-0.333-0.577-0.949-0.932-1.615-0.932c-0.666,0-1.281,0.355-1.614,0.932L8.03,84.01  c-0.333,0.577-0.333,1.287,0,1.864c0.333,0.576,0.948,0.932,1.614,0.932h80.694c0.008,0.001,0.015,0,0.019,0  c1.029,0,1.863-0.835,1.863-1.863C92.22,84.515,92.076,84.12,91.834,83.806z" />
                    </svg>
                </button>
                <button className={`${styles.btn} ${styles.right}`} onClick={minusAngle}>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" xmlSpace="preserve">
                        <path d="M91.834,83.806L51.605,14.126c-0.333-0.577-0.949-0.932-1.615-0.932c-0.666,0-1.281,0.355-1.614,0.932L8.03,84.01  c-0.333,0.577-0.333,1.287,0,1.864c0.333,0.576,0.948,0.932,1.614,0.932h80.694c0.008,0.001,0.015,0,0.019,0  c1.029,0,1.863-0.835,1.863-1.863C92.22,84.515,92.076,84.12,91.834,83.806z" />
                    </svg>
                </button>
            </>
        );
    }, [rotatable, spec.angle]);

    const addControllerGenerator = useCallback(() => {
        if (!addable) return;
        const sidePlus = (e:MouseEvent) => {
            e.preventDefault();
            setSide((side) => side+1);
            setWidth(fixWidth/side);
        };
        const sideMinus = (e:MouseEvent) => {
            e.preventDefault();
            setSide((side) => (side>3)?(side-1):(side));
            setWidth(fixWidth/side);
        };
        return(
            <div className={styles.addController} style={spec.controllerStyle()}>
                <div className={styles.addControllerText}>
                    <h3>It's HTML</h3>
                    <h4>Elements</h4>
                </div>
                <div className={styles.addControllerBtns}>
                    <button onClick={sideMinus}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
                            <line x1="0" y1="40" x2="80" y2="40" />
                        </svg>
                        </button>
                    <button onClick={sidePlus}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
                            <line x1="0" y1="40" x2="80" y2="40" />
                            <line x1="40" y1="0" x2="40" y2="80" />
                        </svg>
                    </button>
                </div>
            </div>
        );
    }, [addable, fixWidth, side, spec]);

    const squaresGenerator = useCallback(() => {
        let squares:Array<JSX.Element> = [];
        for(let i:number = 0; i < spec.side; i++) {
            squares[i] = (
                <div style={spec.squaresStyles(i)} className={styles.sqr} key={`squares${Math.random()}${i}`}>
                    {(!!squaresContents) && squaresContents[i]}
                </div>
            );
        }
        return squares;
    }, [spec, squaresContents]);

    const polygonContentsGenerator = () => {
        if (!polygonContents) return;
        return (
            <>
                { (!!polygonContents.img) && <img src={polygonContents.img.src} alt={polygonContents.img.alt} style={spec.polygonContentsStyle()} className={styles.robot}/>}
                { (!!polygonContents.text) && <h1 className={styles.txt} style={spec.polygonContentsStyle()}>{polygonContents.text}</h1>}
            </>
        )
    }

    useEffect(() => {
        const cvs = cvsRef.current;
        if (!cvs) return;

        spec.polygonMaker(cvs);
    }, [spec]);

    return (
        <div className={styles.prsHome} style={spec.prismContainerStyle()}>
            {rotatable && rotateBtnsGenerator()}
            {addable && addControllerGenerator()}
            <div className={styles.prism} style={{transform :`rotateZ(${angle}deg)`}}>
                {squaresGenerator()}
                <div className={styles.cvsDiv} style={spec.polygonContainerStyle()} onClick={prismHandle}>
                    <canvas ref={cvsRef}/> 
                    {polygonContentsGenerator()}
                </div>
            </div>
        </div>
    );
});

export default Prism;