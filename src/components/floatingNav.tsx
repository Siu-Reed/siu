import React, { memo } from 'react';
import styles from '../css/floatingNav.module.css';
import Mailer from '../service/mail';

interface Props {
    view: string;
    aboutSwitch: boolean;
    mailService : Mailer;
}

const Header:React.FC<Props> = memo(({view, aboutSwitch, mailService}) => {

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
            </div>
            <div className={styles.btn}>
            </div>
            <div className={styles.btn}>
            </div>
        </header>
    );
});

export default Header;