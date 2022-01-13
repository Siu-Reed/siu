import React, {memo, MouseEvent} from 'react';
import styles from '../css/intro.module.css';

interface Props {
    setIntro: React.Dispatch<React.SetStateAction<boolean>>;
}

const Intro:React.FC<Props> = memo(({setIntro}) => {

    const docEl = document.documentElement;

    const noHandle = (e:MouseEvent) => {
        e.preventDefault();
        setIntro(false);
        if (!docEl.requestFullscreen) {
            alert('원할한 사용을 위해 chrome 사용을 권장합니다.');
        }
    }

    const f11Handle = (e:MouseEvent) => {
        e.preventDefault();
        setIntro(false);
        if (!!docEl.requestFullscreen) {
            docEl.requestFullscreen().catch(err => {
                alert('해당 브라우저에서 전체화면을 지원하지 않습니다. 원할한 사용을 위해 최신버전의 chrome 사용을 권장합니다.');
            });
        } else {
            alert('Safari 에서 전체화면을 지원하지 않습니다. 원할한 사용을 위해 chrome 사용을 권장합니다.');
        }
    }

    return (
        <div className={styles.introContainer}>
            <div className={styles.dtd}>
                <div className={`${styles.dtdHolder} ${styles.d1}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 101">
                        <circle cx="50.5" cy="50.5" r="50" />
                    </svg>
                </div>
                <div className={`${styles.dtdHolder} ${styles.t1}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 101">
                        <path d="M12.92,83C27.54,53.8,52.8,2.8,52.8,2.8l40,80" className="dtdTransform" />
                    </svg>
                </div>
                <div className={`${styles.dtdHolder} ${styles.e1}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 101">
                        <path d="M52.92,63a49.92,49.92,0,0,0-40,20,50,50,0,0,0,79.89-.15A49.92,49.92,0,0,0,52.92,63Z" className="dtdTransform" />
                    </svg>
                </div>
                <div className={`${styles.dtdHolder} ${styles.d2}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 101">
                        <circle cx="50.5" cy="80.58" r="19.92" />
                    </svg>
                </div>
                
                <div className={`${styles.dtdHolder} ${styles.l1}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 101">
                        <rect x="0.5" width="34.68" height="81" className={styles.rect1}/>
                        <line x1="0.5" x2="0.5" y2="81" />
                    </svg>
                </div>

                <div className={`${styles.dtdHolder} ${styles.l2}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 101">
                        <line x1="35.18" x2="35.18" y2="81" />
                    </svg>
                </div>
                
                <div className={`${styles.dtdHolder} ${styles.n1}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 101">
                        <rect x="35.18" y="53.45" width="31.62" height="27.55" className={styles.rect2}/>
                        <rect x="67.25" y="53.45" width="32.07" height="27.55" className={styles.rect3}/>
                        <line x1="35.18" y1="54" x2="99.32" y2="54" />
                        <line x1="67.25" y1="54" x2="67.25" y2="81" />
                    </svg>
                </div>
            </div>
            <div className={styles.buttonContainer}>
                <button className={styles.btnF11} onClick={f11Handle}>전체화면 보기</button>
                <h3 className={styles.notice}>
                    포트폴리오를 보기 전,<br/>
                    더 나은 경험을 위해 F11을 누르거나,<br/>
                    위 버튼을 눌러 브라우저를 전체화면으로 전환해주세요.
                </h3>
                <button className={styles.btnNo} onClick={noHandle}>보러 가기</button>
            </div>
        </div>
    );
});

export default Intro;