import React, {memo, MouseEvent} from 'react';
import styles from '../css/question.module.css';

interface Props {
    setQstNumber : React.Dispatch<React.SetStateAction<number>>;
}

const LastQuestion:React.FC<Props> = memo(({setQstNumber}) => {
    
    console.log('last question');

    const optionHdlr = (e:MouseEvent) => {
        e.preventDefault();
        setQstNumber((preSt:number) => preSt + 1);
    }

    return (
        <>
        {/* <img src='' alt='kang' className={styles.qstImg}/> */}
        <div className={styles.qstBox}>
            <h3 className={styles.qstName}>
                <span className={styles.qstNum}>#06. </span>
                당신은 주로 사람들과 대화할 때 어떤 타입인가요?
            </h3>
            <div className={styles.options}>
                <li className={styles.option} onClick={optionHdlr}>
                    자신만만하게 대화를 이끌어가는 타입
                </li>
                <li className={styles.option} onClick={optionHdlr}>
                    경청과 리액션을 하는 타입
                </li>
            </div>
        </div>
        </>
    );
});

export default LastQuestion;