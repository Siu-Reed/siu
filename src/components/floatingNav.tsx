import React, { memo } from 'react';
import styles from '../css/floatingNav.module.css';

interface Props {
    view: boolean;
    aboutSwitch: boolean;
}

const Header:React.FC<Props> = memo(({view, aboutSwitch}) => {
    console.log('header');

    let positionAbout;
    let positionView;
    if (view) {
        (positionView = styles.viewTrue);
        (positionAbout = styles.aboutFalse);
    } else {
        (positionView = styles.viewFalse);
        aboutSwitch ?
        (positionAbout = styles.aboutTrue) :
        (positionAbout = styles.aboutFalse);
    }
    return (
        <header className={`${styles.header} ${positionAbout} ${positionView}`}>
            <a href="www.eee">Siu Lee</a>
            <a href="www.eee">Contact</a>
            <a href="www.eee">Send mail</a>
        </header>
    );
});

export default Header;