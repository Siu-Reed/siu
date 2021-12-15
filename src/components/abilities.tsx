import React, { memo } from 'react';
import styles from '../css/abilities.module.css';

interface Props {
    abilitiesAni : boolean;
}

const Abilities:React.FC<Props> = memo(({abilitiesAni}) => {
    console.log('abilities');
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
                        &nbsp;자바스크립트·타입스크립트 바탕의<br/>
                        프론트엔드 개발을 주로 다루고 있습니다.<br/>
                        재사용성, 유지보수의 편의를 위해 <br/>
                        시간이 좀 더 걸리더라도<br/>
                        항상 한 번 더 생각하며 틀을 잡고<br/>
                        리팩토링하고 있습니다.
                    </pre>
                </div>
                
                <div className={styles.metaBack}>
                    <h2>Back-End</h2>
                    <pre>
                        &nbsp;Node.js 위주로 Api들을 개발하고 배포하며<br/>
                        비용과 성능을 고려한 최적화,<br/>
                        프론트엔드와 백엔드의 연결성 개선 등을 위해<br/>
                        여러 백엔드 환경과 라이브러리들을 공부하고 있습니다.
                    </pre>
                </div>

                <div className={styles.metaDesign}>
                    <h2>Design</h2>
                    <pre>
                        &nbsp;평소 디자인에 관심이 많아<br/>
                        다양한 디자인 사료들을 보면서<br/>
                        어떻게 서비스에 적용하여<br/>
                        좋은 사용자 경험을 제공할 지,<br/>
                        깊은 인상을 남길 새로움은 없을 지,<br/>
                        항상 탐구하고 있습니다.<br/>
                        사진·영상 촬영도 취미로 하고 있습니다.
                    </pre>
                </div>

            </div>
        </div>
    );
});

export default Abilities;