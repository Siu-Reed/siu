import React from 'react';
import styles from '../css/prismBtn.module.css';

interface Props {
    plusAngle : any;
    minusAngle : any;
}

const PrismBtn : React.FC<Props> = ({plusAngle, minusAngle}) => {

    return (
        <div className={styles.btns}>
            <button className={styles.btn} onClick={plusAngle}>
                <iframe title='btn' src='./triangle.svg' />
            </button>
            <button className={styles.btn} onClick={minusAngle}>
                <iframe title='btn' src='./triangle.svg' />
            </button>
        </div>
    );
};

export default PrismBtn;