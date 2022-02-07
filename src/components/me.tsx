import React, { memo } from 'react';
import styles from '../css/me.module.css';

const Me:React.FC = memo(() => {
    let age : number;
    let today = new Date();
    let myBirth = new Date(1996, 8, 23);
    age = today.getFullYear() - myBirth.getFullYear();
    const m = today.getMonth() - myBirth.getMonth();    
    if ((m < 0) || (m === 0 && today.getDate() < myBirth.getDate())) age--;
    return (
        <div className={styles.me}>
            <h1 className={styles.title}>Siu Lee</h1>
            <div className={styles.profileMeta}>
                <img className={styles.profilePic} src="https://drive.google.com/uc?export=view&amp;id=15SBM3nMQwfJ6buefAKmVQWlnD7j91mo9" alt="myPortrait" crossOrigin={undefined} />
                <ul className={styles.personalInfo}>
                    <li>
                        <h3>Name</h3>
                        <p>이시우 <span>(Siu Lee)</span></p>
                    </li>
                    <li>
                        <h3>Birth</h3>
                        <p>1996.08.23 <span>({age})</span></p>
                    </li>
                    <li>
                        <h3>Address</h3>
                        <p>
                            대한민국 경기도 의정부시<br/>
                            <span>(Uijeongbu-si, Gyeonggi-do, Republic of Korea)</span>
                        </p>
                    </li>
                    <li>
                        <h3>Career</h3>
                        <p>
                            거상 주식회사<br/>
                            <span>2019.10.31 ~ 2020.12.31 (주임)</span>
                        </p>
                    </li>
                </ul>
            </div>
                <div className={styles.aboutMe}>
                    <h3>About me</h3>
                    <div>
                        <pre>
                            &nbsp;이전 직장에서 쇼핑몰 통합관리시스템을 통해<br/>
                            오픈마켓들과 자사몰을 운영하며,<br/>
                            전반적인 상품과 고객서비스 관리<br/>
                            상세페이지 등 그래픽 디자인,<br/>
                            그리고 웹 디자인 업무를 맡았습니다.
                        </pre>

                        <pre>
                            &nbsp;여러 업무 경험들 중<br/>
                            창작과 디자인, 코딩 관련 업무들을 특히 좋아했기에<br/>
                            이 모두를 지속적으로 접할 기회가 있는<br/>
                            프론트엔드 개발자를 목표로 본격적으로 공부했습니다.
                        </pre>

                        <pre>
                            &nbsp;아직 실사용 되는 서비스를 배포해본 경험은 없지만<br/>
                            디자인적 경험과 프론트엔드, 백엔드에 대한 이해로<br/>
                            팀에서 다양한 방면의 작은 부분이라도 도움될 수 있는<br/>
                            주니어가 될 수 있을 거라 확신합니다.
                        </pre>
                    </div>
                </div>
        </div>
    );
});

export default Me;