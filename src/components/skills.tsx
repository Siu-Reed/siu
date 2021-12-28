import React, { memo } from 'react';
import styles from '../css/skills.module.css';
import logosJson from '../json/logo.json';

const Skills:React.FC = memo(() => {
    const contents = Object.entries(logosJson).map((value) => { return(
        <div className={styles.category} key={value[0]}>
            <h3 className={styles.theme}>{value[0]}</h3>
            <div className={styles.items}>
            {Object.values(value[1]).map((item) => { return(
                <div className={styles.item} key={item.meta}>
                    <img src={item.src} alt="item" />
                    <h3>{item.meta}</h3>
                </div>
            )})}
            </div>
        </div>
    )});

    return (
        <div className={styles.skills}>
            <h1 className={styles.title}>Skill stacks</h1>
            <div className={styles.contentsWrapper}>
                {contents}
            </div>
        </div>
    );
});

export default Skills;