import React, { memo } from 'react';
import styles from '../css/abilities.module.css';

interface Props {
    abilitiesAni : boolean;
}

const Abilities:React.FC<Props> = memo(({abilitiesAni}) => {
    let animation;
    (abilitiesAni)?(animation = styles.appear):(animation = styles.hidden);
    return (
        <div className={styles.abilities}>
            <h1 className={styles.title}>Abilities</h1>
            <ul className={styles.graph}>
                <li className={styles.frontEnd}>
                    <div className={animation}></div>
                    <h2>Front-End</h2>
                </li>
                <li className={styles.backEnd}>
                    <div className={animation}></div>
                    <h2>Back-End</h2>
                </li>
                <li className={styles.design}>
                    <div className={animation}></div>
                    <h2>Design</h2>
                </li>
            </ul>
            <div className={styles.meta}>
                
                <div className={styles.metaFront}>
                    <h2>Front-End</h2>
                    <pre>
                        &nbsp;자바스크립트·타입스크립트를 주언어로<br/>
                        웹 프론트엔드를 다루고 있습니다.<br/>
                        유지보수의 편의를 위해<br/>
                        코드 간 의존성을 최소화 하고<br/>
                        재사용에 용이한 깔끔한 코드를 만들기 위해 노력합니다.
                    </pre>
                </div>
                
                <div className={styles.metaBack}>
                    <h2>Back-End</h2>
                    <pre>
                        &nbsp;협업에 필요한 지식 외에도 관심으로<br/>
                        부족하지만 계속해서 공부하고 있습니다.<br/>
                        Node.js 와 Express로 간단한 Api를 구현한<br/>
                    </pre>
                </div>

                <div className={styles.metaDesign}>
                    <h2>Design</h2>
                    <pre>
                        &nbsp;다양한 디자인툴을 활용합니다.<br/>
                        관련 실무 경험 또한 있으며<br/>
                        일상에서도 디자인에 관심이 많아,<br/>
                        항상 번뜩이는 아이디어와 함께<br/>
                        새롭고 참신한 웹에 대해 고민합니다.
                    </pre>
                </div>

            </div>
        </div>
    );
});

export default Abilities;