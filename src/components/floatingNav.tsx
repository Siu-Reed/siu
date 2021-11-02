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
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 200 100" xmlSpace="preserve">
                    <path fill="#ffffff00" stroke="#859477" strokeMiterlimit="10" d="M2.7,52.6C12.1,1.6,14.4,16,63.6,15.8s48.3-8.8,71.3-7.3  s44.6,6,51.7,20.1c7,14.1,15.6,48.3,6.6,57c-12.1,11.8-89,9.7-111.3,2C57.1,79.1-6.7,103.7,2.7,52.6z"/>
                </svg>
                <a href="www.eee">Siu Lee</a>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 200 100" xmlSpace="preserve">
                    <path fill="#ffffff00" stroke="#859477" strokeMiterlimit="10" d="M13,39.8C9.8,10.3,9.6,9,42.3,7.5S97.9-1,113.7,4.2S145.3,4,155,6  s7.5,9.9,22.1,9s18.1,2.4,19.2,23.7c1.1,21.3-9.7,41.9-4.3,52.7s-24.8,6.8-34.8,1.1c-9.9-5.7-45-6.1-58.1-5.3s-20.8,13.6-34.8,9.9  c-14-3.7-61.2-0.9-59.2-21.7S13.4,44,13,39.8z"/>
                </svg>
                <a href="www.eee">Contact</a>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 200 100" xmlSpace="preserve">
                    <path fill="#ffffff00" stroke="#859477" strokeMiterlimit="10" d="M197.8,52.4c-6.4-20.2,5.9-63.9-30.5-42.8S114.8-0.5,72,4  S9.3-6.2,12.8,17.7S1.3,51.1,4.2,62.3s-13,26.1,21.3,29.6c34.2,3.5,91.8,7.2,105.6,2C144.9,88.6,204.2,72.6,197.8,52.4z"/>
                </svg>
                <a href="www.eee">Send mail</a>
            </div>



        </header>
    );
});

export default Header;