import React, {memo, MouseEvent} from 'react';
import styles from '../css/question.module.css';

interface Props {
    name : string;
    index : number;
    question : string;
    options : Array<any>;
    injectResult : (result:Object) => void;
    setQstNumber : React.Dispatch<React.SetStateAction<number>>;
}

const Question:React.FC<Props> = memo(({name, index, question, options, injectResult, setQstNumber}) => {
    
    console.log('question');
    
    const selectList = options.map((value, index) => { return (
        <li
            key={name + index}
            className={styles.option}
            onClick={(e:MouseEvent) => {
                e.preventDefault();
                injectResult({[name] : index});
                setQstNumber((preSt:number) => preSt + 1);
            }}
        >
            {value}
        </li>
    )});
    
    return (
        <>
        <div className={styles.qstBox}>
            <h3 className={styles.qstName}><span className={styles.qstNum}>#0{index+1}. <span/></span>{question}</h3>
            <div className={styles.options}>
                {selectList}
            </div>
        </div>
        </>
    );
});

export default Question;