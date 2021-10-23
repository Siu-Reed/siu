import React, { memo } from 'react';
import styles from '../css/hidden.module.css';

interface Props {
    hiddenBtnClick: () => void;
};

const Hidden : React.FC<Props> = memo(({hiddenBtnClick: resetScreen}) => {
    console.log('hidden');
    return (
        <div className={styles.hidden}>
            <div className={styles.resetBtn} onClick={resetScreen}>ㅇㅅㅇ</div>
        </div>
    );
});

export default Hidden