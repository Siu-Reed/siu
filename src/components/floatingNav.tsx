import React, { memo } from 'react';
import styles from '../css/floatingNav.module.css';

interface Props {
    view: string;
    aboutSwitch: boolean;
}

const Header:React.FC<Props> = memo(({view, aboutSwitch}) => {
    console.log('header');

    let positionAbout;
    let positionView;
    switch (view) {
        case 'f':
        case 'x': {
            (positionView = styles.viewFalse);
            aboutSwitch ?
            (positionAbout = styles.aboutTrue) :
            (positionAbout = styles.aboutFalse);
            break;
        }
        case 'y':
        case 'z': {
            (positionView = styles.viewTrue);
            (positionAbout = styles.aboutFalse);
            break;
        }
    }

    return (
        <header className={`${styles.header} ${positionAbout} ${positionView}`}>
            <div className={styles.btn}>
                <a href="www.eee">Siu Lee</a>
            </div>
            <div className={styles.btn}>
                <a href="www.eee">Contact</a>
            </div>
            <div className={styles.btn}>
                <a href="www.eee">Send mail</a>
            </div>
        </header>
    );
});

export default Header;