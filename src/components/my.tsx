import React from 'react';
import styles from '../css/my.module.css'
import About from './about';

interface Props {
    aboutClick : () => void;
    aboutSwitch: boolean;
}

const My : React.FC<Props> = ({aboutClick, aboutSwitch}) => {
    return (
        <>
            <About aboutClick={aboutClick} aboutSwitch={aboutSwitch}/>
        </>
    );
};

export default My;