import React, { memo } from 'react';
import styles from '../css/hidden.module.css';

interface Props {
    hiddenBtnClick: () => void;
};

const Hidden : React.FC<Props> = memo(({hiddenBtnClick: resetScreen}) => {
    console.log('hidden');
    return (
        <div className={styles.hidden}>
            <div className={styles.resetBtn} onClick={resetScreen}>
                <h2>Back to 2D</h2>
                <h3>이전 상태</h3>
                <h1>←</h1>
            </div>
            <div className={styles.meta}>
                <h1 className={styles.title}>Welcome to cosy 3D WEB.</h1>
                <h3>이쪽 면을 크게 보고 싶으시다면,</h3>
                <div>여기를 클릭하세요.</div>
            </div>
        </div>
    );
});

export default Hidden