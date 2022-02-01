import React, {useState} from 'react';
import style from './Modal.module.css'

type Props = {
    isActive: boolean,
    setActive: React.Dispatch<React.SetStateAction<boolean>>,
    heading: string,
    func: (username: string, password: string) => {}
}

const Modal: React.FC<Props> = ({isActive, setActive, heading, func}) => {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div onClick={() => {
            setActive(false)
        }} className={style.modal + ' ' + (isActive ? style.active : '')}>
            <div onClick={(e) => {
                e.stopPropagation()
            }} className={style.content}>
                <h2>{heading}</h2>
                <input value={username} onChange={(e) => {
                    setUserName(e.target.value)
                }} type="username" placeholder="Введите username" className={style.input}/>
                <input value={password} onChange={(e) => {
                    setPassword(e.target.value)
                }} type="password" placeholder="Введите пароль" className={style.input}/>
                <button onClick={() => {
                    func(username, password)
                }} className={style.btn}>{heading}
                </button>
            </div>
        </div>
    );
};

export default Modal;