import React, { memo } from 'react';
import styles from '../css/me.module.css';

const Me:React.FC = memo(() => {
    let age
    let today = new Date();
    let myBirth = new Date(1996, 8, 23);
    age = today.getFullYear() - myBirth.getFullYear();
    const m = today.getMonth() - myBirth.getMonth();    
    if ((m < 0) || (m === 0 && today.getDate() < myBirth.getDate())) {
        age--;
    }

    return (
        <div className={styles.me}>
            <h1 className={styles.title}>Siu Lee</h1>
            <img className={styles.profilePic} src="./img/profile.png" alt="#" />
            <ul className={styles.profileMeta}>
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
                <li>
                    <h3>E-mail</h3>
                    <p>tldn960823@gmail.com</p>
                </li>
            </ul>
            <div className={styles.aboutMe}>
                <h3>About me</h3>
                <div>
                    <pre>
                        &nbsp;이전 직장에서 통합관리시스템을 통해<br/>
                        오픈마켓들과 자사몰을 운영하며,<br/>
                        전반적인 상품 관리와 그래픽 디자인을 맡다가<br/>
                        웹디자인까지 맡게 되었습니다.
                    </pre>

                    <pre>
                        &nbsp;이후 점점 코드에 흥미가 생겨 본격적으로 공부하며<br/>
                        프론트엔드 개발자가 되고 싶다 생각했습니다.
                    </pre>

                    <pre>
                        &nbsp;전에 보지 못한 형식의 웹을 만들어<br/>
                        새로운 디자인이 주는 즐거움과<br/>
                        사용의 편리, 그리고 긍정적 인상을 주는<br/>
                        웹을 만드는 것을 목표로 작업하고 있습니다.
                    </pre>
                    <pre>
                        &nbsp;이 포트폴리오 페이지 또한 제작하며<br/>
                        새롭고 신선하게 느껴지도록 노력했습니다.<br/>
                        시중 대부분 웹들의 UI·UX가 2차원에서 멈춰있기에<br/>
                        클라이언트들에게 3차원적인 웹을 경험시키는,<br/>
                        새로우면서도 낯설지 않고 편리한 3D 웹을 목표로 했습니다.
                    </pre>
                </div>
            </div>
        </div>
    );
});

export default Me;