import React, { MouseEvent } from 'react';
import styles from '../css/contact.module.css';

const Contact:React.FC = () => {



    const kakao = (e:MouseEvent) => {
        e.preventDefault();
        navigator.clipboard.writeText('tldn0823');
        alert('the content is copied to clipboard');
    };

    const mail = (e:MouseEvent) => {
        e.preventDefault();
        navigator.clipboard.writeText('admin@siulee.com');
        alert('the content is copied to clipboard');
    }

    const git = (e:MouseEvent) => {
        e.preventDefault();
        navigator.clipboard.writeText('https://github.com/Siu-Reed');
        alert('the content is copied to clipboard');
    }


    return (
        <div className={styles.container}>
            <h3 className={styles.tel}><span className={styles.regionNum}>+82 </span> 10-3123-3413</h3>
            <h4 className={styles.or}>or</h4>
            <ul className={styles.ul}>
                <li className={styles.li} onClick={kakao}>KAKAO</li>
                <li className={styles.li} onClick={mail}>MAIL</li>
                <li className={styles.li} onClick={git}>GIT</li>
            </ul>
        </div>
    );
};

export default Contact;