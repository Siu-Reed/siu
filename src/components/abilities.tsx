import React from 'react';
import styles from '../css/abilities.module.css';

interface Props {
    page : number;
}

const Abilities:React.FC<Props> = ({page}) => {
    let animation;
    if (page === 2) {
        animation = styles.appear;
    } else {
        animation = styles.hidden;
    }
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
                        웹 프론트엔드 개발을 주로 하여 계속 공부하고 있습니다.<br/>
                        사용성, 성능 개선을 위해 시간이 좀 더 걸리더라도<br/>
                        항상 한 번 더 생각하며 틀을 잡고<br/>
                        코드 리뷰, 리팩토링을 틈틈히 하고 있습니다.
                    </pre>
                </div>
                
                <div className={styles.metaBack}>
                    <h2>Back-End</h2>
                    <pre>
                        &nbsp;온전히 혼자 완전한 프로젝트를 배포하며<br/>
                        다양한 언어를 접하고 이해하기 위해<br/>
                        Node.js, Express.js 위주로 REST Api 개발과 함께<br/>
                        요즘은 C++을 공부하며 원시적인 언어를 배우고 있습니다.
                    </pre>
                </div>

                <div className={styles.metaDesign}>
                    <h2>Design</h2>
                    <pre>
                        &nbsp;전 직장에서 디자인 일을 하기도 했고,<br/>
                        여전히 디자인에 관심이 많아서<br/>
                        디자인 툴들도 틈틈히 더 공부하며,<br/>
                        여러 디자인 사료들을 보고 영감을 얻기도 하며<br/>
                        어떻게 어떤 디자인을 적용하여서<br/>
                        더 나은 서비스를 제공할 수 있을 지 항상 연구합니다.<br/>
                        사진·영상 촬영도 취미로 하고 있습니다.
                    </pre>
                </div>

            </div>
        </div>
    );
};

export default Abilities;