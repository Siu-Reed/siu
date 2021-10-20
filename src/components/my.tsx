import React, { memo } from 'react';
import styles from '../css/my.module.css'
import About from './about';

interface Props {
    aboutOpen : () => void;
    aboutClose : () => void;
    aboutSwitch : boolean;
}

const My : React.FC<Props> = memo(({aboutOpen, aboutClose, aboutSwitch}) => {
    return (
        <>
            <About aboutOpen={aboutOpen} aboutClose={aboutClose} aboutSwitch={aboutSwitch} />
        </>
    );
});

export default My;