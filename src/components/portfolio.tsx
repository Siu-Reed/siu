import React, { memo } from 'react';
import Prism from './prism';
// import AnotherPrism from './anotherPrism';
import SquareContent from './squareContent';
import contents from '../json/contents.json';
import styles from '../css/portfolio.module.css';

interface Props {
    polygonClick: () => void;
}

const Portfolio : React.FC<Props> = memo(({polygonClick}) => {
    const squaresContents = Object.values(contents).map((value, index) => {
        return (<SquareContent contentsValues={value} index={index+1} key={`${index}${value.name}`}/>)
    });
    return (
        <div className={styles.portfolio}>
            <div className={`${styles.grid} ${styles.scriptContainer}`}>
                <h3 className={styles.script}>｜이 시우</h3>
            </div>
            <div className={styles.grid}></div>
            <div className={styles.grid}></div>
            <div className={styles.grid}></div>
            
            <div className={`${styles.grid} ${styles.anoPrismCont}`}>
                <Prism
                    prismVar={{
                        width : 40,
                        height : 20,
                        side : 5,
                        colors : ['linear-gradient(to right, rgb(216, 0, 5), rgb(170, 0, 4))'],
                        color : "#aa0004"
                    }}
                    rotatable={false}
                    addable={true}
                />
            </div>
            
            <div className={`${styles.grid} ${styles.scriptContainer}`}>
                <h3 className={`${styles.script} ${styles.script_1}`}>。˚FRONT-END</h3>
                <h3 className={`${styles.script} ${styles.script_2}`}>DEVELOPER˚。</h3>
            </div>

            <div className={`${styles.grid} ${styles.prismCont}`}>
                <Prism
                    prismVar={{
                        width : 28,
                        height : 45,
                        side : 4,
                        colors : [
                            "#ffc600",
                            "#ffde00",
                            "#ffc600",
                            "#ffa800",
                            "#ffde00"
                        ],
                        color : "#ffff00"
                    }}
                    rotatable={true}
                    addable={false}
                    squaresContents={squaresContents}
                    polygonContents={{
                        img : {
                            src : "./img/robot.png",
                            alt : "robot"
                        },
                        text : "Click This"
                    }}
                    polygonClick={polygonClick}
                />
            </div>
            
            <div className={styles.grid}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 101" className={styles.dtdLogo}>
                    <circle cx="50.5" cy="50.5" r="50" />
                    <path d="M12.92,83C27.54,53.8,52.8,2.8,52.8,2.8l40,80" transform="translate(-2.3 -2.3)" />
                    <path d="M52.92,63a49.92,49.92,0,0,0-40,20,50,50,0,0,0,79.89-.15A49.92,49.92,0,0,0,52.92,63Z" transform="translate(-2.3 -2.3)" />
                    <circle cx="50.5" cy="80.58" r="19.92" />
                </svg>
            </div>
            <div className={`${styles.grid} ${styles.duneImg}`}></div>
        </div>
    );
});

export default Portfolio;