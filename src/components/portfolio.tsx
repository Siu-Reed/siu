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
            <div className={`${styles.column} ${styles.column1}`}>
                <div className={`${styles.row} ${styles.row0}`}></div>
            </div>
            
            <div className={`${styles.column} ${styles.column2}`}>
                
                <div className={`${styles.row} ${styles.row1}`}>
                
                    <div className={`${styles.row} ${styles.row3}`}>
                        <div className={styles.anoPrismCont}>
                            <AnotherPrism />
                        </div>
                        <div className={styles.intro}>
                            <h2 className={styles.name}>Siu Lee</h2>
                            <h2 className={styles.occupation}>Front-end</h2>
                            <h2 className={styles.occupation}>Developer</h2>
                            <h2 className={styles.occupation}>with Design</h2>
                        </div>
                        <h3 className={styles.script}>
                                프론트엔드 뿐 아니라 디자인과 여러 방면으로 준비되어 있는 개발자 이시우입니다.
                                프로젝트에서 작은 성능 하나의 개선에도 신경 쓰는,
                                협업하고 싶은 개발자입니다.
                        </h3>
                    </div>
                
                    <div className={`${styles.row} ${styles.row4}`}>
                        <div className={styles.prismCont}>
                            <Prism polygonClick={polygonClick}/>
                            <h3 className={styles.clickThis}>Click this ↑</h3>
                        </div>
                    </div>
                </div>

                <div className={`${styles.row} ${styles.row2}`}></div>
            </div>
        </div>
    );
});

export default Portfolio;