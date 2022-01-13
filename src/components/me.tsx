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
                <img className={styles.profilePic} src="https://drive.google.com/uc?export=view&amp;id=1yIZIId3tjtYTaeY3sFpjdRUEHZyLH4jK" alt="myPortrait" crossOrigin='use-credentials' />
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
                            &nbsp;작은 규모의 회사였기에<br/>
                            업무의 구분 없이 많은 일들을 맡았지만<br/>
                            그로 인해 한 문제에 여러 시각으로<br/>
                            접근하는 능력을 키울 수 있었습니다.
                        </pre>

                        <pre>
                            &nbsp;그리고 여러 업무 경험 중에서도<br/>
                            코딩과 잘 맞는다 생각되어, 퇴사 이후<br/>
                            프론트엔드 개발자를 목표로 공부하였습니다.
                        </pre>

                        <pre>
                            &nbsp;전에 보지 못한 형식의 웹을 만들어<br/>
                            새로운 디자인이 주는 즐거움과<br/>
                            사용의 편리, 그리고 긍정적 인상을 주는<br/>
                            웹을 만드는 것을 목표로 작업하고 있습니다.
                        </pre>
                    </div>
                </div>
        </div>
    );
});

export default Me;