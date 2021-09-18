import React, { useEffect, useState } from 'react';
import Hidden from './hidden';
import Main from './main';
import styles from '../css/threeD.module.css';

interface View {
    view : string;
}

interface Props {
    rotateScreen: any;
};

const ThreeD : React.FC<Props> = ({rotateScreen}) => {
    const [view, setView] = useState<View>({
        view : styles.x,
    });

    const polygonClick = () => {
        setView({view : styles.y});
        rotateScreen();
    }

    const hiddenBtnClick = () => {
        setView({view : styles.x});
    }

    return (
        <div className={`${styles.threeD} ${view.view}`}>
            <Main polygonClick={polygonClick}/>
            <Hidden hiddenBtnClick={hiddenBtnClick}/>
        </div>
    );
};

export default ThreeD;