import React, { memo } from 'react';
import { ContentsValues } from '../interface/interface';
import styles from '../css/squareContent.module.css';

interface Props {
    contentsValues: ContentsValues;
    index: number;
}

const SquareContent:React.FC<Props> = memo(({contentsValues, index}) => {
    
    return (
        <>
            <h3 className={styles.h3}>
                # 0{index}
            </h3>
            <a className={styles.browse} href={contentsValues.items.Browse} target="_new">
                {contentsValues.name}
            </a>
            <ul className={styles.ul}>
                <li className={styles.li}>
                    <h3>Description</h3>
                    <p>{contentsValues.items.Desc}</p>
                </li>
                <li className={styles.li}>
                    <h3>Stack</h3>
                    <p>{contentsValues.items.Stack}</p>
                </li>
                <li className={styles.li}>
                    <a href={contentsValues.items.Git} target={`${index}_new`}><h3>Git</h3></a>
                </li>
            </ul>
        </>
    );
});

export default SquareContent;