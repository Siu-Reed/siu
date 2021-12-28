import React, {memo, useRef, MouseEvent, KeyboardEvent} from 'react';
import styles from '../css/question.module.css';

interface Props {
    injectResult : (result: Object) => void;
    setQstNumber : React.Dispatch<React.SetStateAction<number>>;
}

const Textarea:React.FC<Props> = memo(({injectResult, setQstNumber}) => {

    const txtRef = useRef<HTMLTextAreaElement>(null);

    const onKeyPress = (e:KeyboardEvent) => {
        if (e.key === 'Enter') {
            injectResult({why: txtRef.current?.value})
            setQstNumber((preSt) => preSt + 1);
        };
    };
    
    const onClick = (e:MouseEvent) => {
        e.preventDefault();
        injectResult({why: txtRef.current?.value});
        setQstNumber((preSt) => preSt + 1);
    };

    return (
        <>
        <div className={styles.qstBox}>
            <h3 className={styles.qstName}>
                <span className={styles.qstNum}>#05. </span>
                이전 응답에 대한 이유는 무엇인가요?<br />
                또, 개선해야 할 점이 생각난다면 말씀해주세요.
            </h3>
            <div className={styles.txtBox}>
                <textarea className={styles.txtArea} ref={txtRef} onKeyPress={onKeyPress} placeholder='생략 가능'></textarea>
                <button className={styles.txtSubmit} onClick={onClick}>
                    입력
                </button>
            </div>
        </div>
        </>
    );
});

export default Textarea;