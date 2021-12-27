import React, { ChangeEvent, FormEvent, useState } from 'react';
import styles from '../css/mail.module.css';
import { MailSendForm } from '../interface/interface';
import Mailer from '../service/mail';

interface Props {
    mailService : Mailer;
}

const Mail:React.FC<Props> = ({mailService}) => {
    
    const [mail, setMail] = useState<MailSendForm>({
        senderAddress : "",
        subject: "",
        content: "",
    });

    const onChange = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setMail({
            ...mail,
            [name] : value
        });
    }

    const onSubmit = async (e:FormEvent) => {
        e.preventDefault();
        if (!!mail.senderAddress && !!mail.subject && !!mail.content) {
            mailService.sendMail(mail)
            .then((created) => {
                setMail({
                    senderAddress : "",
                    subject: "",
                    content: ""
                });
                alert('전송완료.');
            })
            .catch((e) => {
                alert('전송실패');
            });
        } else {
            alert('빈 항목을 채워서 올바르게 작성해주세요.');
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.iconContainer}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 677 341.83">
                    <path d="M471,162.57l77.65-32.83A15,15,0,0,0,536.93,102l-71.16,30.08-57.34-29.59h0a15,15,0,0,0-13.8,26.74l63.6,32.82a14.8,14.8,0,0,0,1.68.63c.44.16.86.36,1.3.48a14.73,14.73,0,0,0,3.72.54l.2,0,.14,0a14.83,14.83,0,0,0,5.05-1c.22-.08.45,0,.67-.13Z" transform="translate(-11.5 -14.01)"/>
                    <path d="M228.39,63.18a15,15,0,0,0-15-15H80.77a15,15,0,1,0,0,30.07H213.35a15,15,0,0,0,15-15Z" transform="translate(-11.5 -14.01)"/>
                    <path d="M26.53,198.55H159.11a15,15,0,1,0,0-30.07H26.53a15,15,0,0,0,0,30.07Z" transform="translate(-11.5 -14.01)"/>
                    <path d="M50.63,288.8a15,15,0,0,0,0,30.08H183.22a15,15,0,1,0,0-30.08Z" transform="translate(-11.5 -14.01)"/>
                    <path d="M633.57,14H356.29a80.53,80.53,0,0,0-75,62L234.11,285.64a59.3,59.3,0,0,0,10.16,50.49A53.33,53.33,0,0,0,287,355.82H569.27a80.27,80.27,0,0,0,75.13-63.88L687,82.37h0a58.29,58.29,0,0,0-10.83-48.92A53.76,53.76,0,0,0,633.56,14Zm24,62.34L620.47,258.73c-.17,0-.31-.09-.48-.09H385.53a15,15,0,1,0,0,30.07H614.11a50.48,50.48,0,0,1-44.83,37H287a23.54,23.54,0,0,1-19.2-8.39,29.19,29.19,0,0,1-4.31-25.11L310.67,82.65h0A50.83,50.83,0,0,1,356.3,44.09H633.57a23.9,23.9,0,0,1,19.33,8.38,28.15,28.15,0,0,1,4.66,23.89Z" transform="translate(-11.5 -14.01)"/>
                    <path d="M311.15,259.8a14.72,14.72,0,0,0-4.81,3.16,15.25,15.25,0,0,0-4.51,10.67,15.05,15.05,0,0,0,4.51,10.68,17.86,17.86,0,0,0,4.81,3.31,14.72,14.72,0,0,0,5.71,1.05,15.14,15.14,0,0,0,10.68-4.36,14.86,14.86,0,0,0,4.36-10.68A15.07,15.07,0,0,0,327.54,263a15.58,15.58,0,0,0-16.39-3.16Z" transform="translate(-11.5 -14.01)"/>
                    <path d="M579.74,199.29h-37a15,15,0,1,0,0,30.07h37a15,15,0,1,0,0-30.07Z" transform="translate(-11.5 -14.01)"/>
                </svg>
            </div>
            <form className={styles.mailForm} onSubmit={onSubmit}>
                <h3 className={`${styles.mail} ${styles.mailTo}`}>
                    To.&nbsp;&nbsp;admin@siulee.com
                </h3>
                <input
                    type="email"
                    placeholder='보내는 분'
                    name='senderAddress'
                    className={`${styles.mail} ${styles.mailSender}`}
                    value={mail.senderAddress}
                    onChange={onChange}
                />
                <input
                    type="text"
                    placeholder='제목'
                    name='subject'
                    className={`${styles.mail} ${styles.mailSubject}`}
                    value={mail.subject}
                    onChange={onChange}
                />
                <textarea
                    id="content"
                    placeholder='내용'
                    name='content'
                    className={`${styles.mail} ${styles.mailTxt}`}
                    value={mail.content}
                    onChange={onChange}
                />
                <button
                    type="submit"
                    className={`${styles.mail} ${styles.mailSubmit}`}
                >SEND</button>
            </form>
        </div>
    );
};

export default Mail;