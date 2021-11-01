import React, { memo, useCallback } from 'react';
import styles from '../css/hidden.module.css';

interface Props {
    xViewClick: () => void;
    zViewClick: () => void;
    aboutOpen: () => void;
    aboutClose: () => void;
};

const Hidden : React.FC<Props> = memo(({xViewClick, zViewClick, aboutOpen, aboutClose}) => {
    console.log('hidden');

    const xViewHandle = useCallback(() => {
        xViewClick();
        aboutClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const zViewHandle = useCallback(() => {
        zViewClick();
        aboutOpen();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className={styles.hidden}>
            <div className={styles.resetBtn} onClick={xViewHandle}>
                <h2>Back to 2D</h2>
                <h3>이전 상태</h3>
                <h1>←</h1>
            </div>
            <div className={`${styles.meta}`}>
                <h1 className={styles.title}>Welcome to cosy 3D web.</h1>
                <h3>이쪽 면을 크게 보고 싶으시다면,</h3>
                <div onClick={zViewHandle}>여기를 클릭하세요.</div>
            </div>
        </div>
    );
});

export default Hidden