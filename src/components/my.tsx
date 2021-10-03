import React from 'react';
import styles from '../css/my.module.css'
import About from './about';

interface Props {
    aboutClick : () => void;
    aboutClose : () => void;
    aboutSwitch : boolean;
}

const My : React.FC<Props> = ({aboutClick, aboutClose, aboutSwitch}) => {
    return (
        <>
            <About aboutClick={aboutClick} aboutClose={aboutClose} aboutSwitch={aboutSwitch}/>
        </>
    );
};

export default My;