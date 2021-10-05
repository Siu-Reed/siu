import React from 'react';
import styles from '../css/skills.module.css';
import logos from '../json/logo.json';

const Skills:React.FC = () => {

    const stacks = Object.entries(logos).map((value) => { return (
        <div>
            <h2>{value[0]}</h2>
            {Object.entries(value[1]).map((item) => {
                <div>
                    <p>{item[0]}</p>
                    <iframe title='stack' src={item[1]} />
                </div>
            })}
        </div>
    )});

    return (
        <div className={styles.skills}>
            <h1>Skill Stacks</h1>
            {stacks}
        </div>
    );
};

export default Skills;