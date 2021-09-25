import React from 'react';
import Prism from './prism';
import styles from '../css/main.module.css';
import PrismBtn from './prismBtn';

interface Props {
    polygonClick: () => void;
}

const Main : React.FC<Props> = ({polygonClick}) => {
    return (
        <div className={styles.main}>
            <Prism polygonClick={polygonClick}/>
            <PrismBtn />
        </div>
    );
};

export default Main;