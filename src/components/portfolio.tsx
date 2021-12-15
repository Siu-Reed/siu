import React, { memo } from 'react';
import Prism from './prism';
import AnotherPrism from './anotherPrism';
import styles from '../css/portfolio.module.css';

interface Props {
    polygonClick: () => void;
}

const Portfolio : React.FC<Props> = memo(({polygonClick}) => {
    console.log('portfolio');

    return (
        <div className={styles.portfolio}>
            <div className={styles.grid}>
                <h3 className={`${styles.clickThis} ${styles.clickThis_1}`}>
                    Click this<br />
                    ←
                </h3>
            </div>
            <div className={styles.grid}></div>
            <div className={styles.grid}></div>
            <div className={styles.grid}></div>
            
            <div className={`${styles.grid} ${styles.anoPrismCont}`}>
                <AnotherPrism />
            </div>
            
            <div className={`${styles.grid} ${styles.script}`}>
                <h2 className={styles.occupation}>Front-end</h2>
                <h2 className={styles.occupation}>Developer</h2>
                <h2 className={styles.occupation}>with Design</h2>
                <h3 className={styles.me}>디자인을 사랑하는 개발자 이시우입니다.</h3>
            </div>

            <div className={`${styles.grid} ${styles.prismCont}`}>
                <Prism polygonClick={polygonClick}/>
            </div>
            
            <div className={styles.grid}>
                <h3 className={`${styles.clickThis} ${styles.clickThis_1}`}>
                    Click this<br />
                    ←
                </h3>
            </div>
            <div className={`${styles.grid} ${styles.img}`}></div>
            {/* <div className={`${styles.column} ${styles.column1}`}>
                <div className={`${styles.row} ${styles.row0}`}></div>
            </div>
            
            <div className={`${styles.column} ${styles.column2}`}>
                
                <div className={`${styles.row} ${styles.row1}`}>
                
                    <div className={`${styles.row} ${styles.row3}`}>
                        <div className={styles.anoPrismCont}>
                        </div>
                        <div className={styles.intro}>
                            <h2 className={styles.name}>Siu Lee</h2>
                            <h2 className={styles.occupation}>Front-end</h2>
                            <h2 className={styles.occupation}>Developer</h2>
                            <h2 className={styles.occupation}>with Design</h2>
                        </div>
                        <h3 className={styles.script}>
                            백엔드는 물론 디자인까지 고려하는<br/>
                            프론트엔드 개발자, 이시우입니다.
                        </h3>
                    </div>
                
                    <div className={`${styles.row} ${styles.row4}`}>
                        <div className={styles.prismCont}>
                        </div>
                    </div>
                </div>

                <div className={`${styles.row} ${styles.row2}`}></div>
            </div> */}
        </div>
    );
});

export default Portfolio;