import React, {useState} from 'react';
import {button, headerStyle, input} from './HeaderStyle';
import Modal from '../UI/Modal/Modal';
import {useAction} from '../../hooks/useAction';
import {Api} from '../../API/api';
import {useTypedSelector} from '../../hooks/useTypedSelector';

const Header: React.FC = () => {
    const [loginActive, setLoginActive] = useState(false)
    const [registrationActive, setRegistrationActive] = useState(false)
    const {isAuth} = useTypedSelector(state => state.user)
    const {loginAction, logoutAction} = useAction()
    const logOut = () => {
        logoutAction()
        setLoginActive(false)
    }
    const registration = Api.Registartion
    return (<>

            <div className="container" style={headerStyle}>
                <input style={input} type="search"/>
                {!isAuth ?
                    <>
                        <Modal isActive={loginActive} setActive={setLoginActive} heading="Вход" func={loginAction}/>
                        <Modal isActive={registrationActive} setActive={setRegistrationActive} heading="Регистрация"
                               func={registration}/>
                        <button style={button} onClick={() => {
                            setLoginActive(true)
                        }}>Login
                        </button>
                        <button style={button} onClick={() => {
                            setRegistrationActive(true)
                        }}>Registration
                        </button>
                    </> :
                    <>
                        <button style={button}>WatchList</button>
                        <button style={button} onClick={() => {
                            logOut()
                        }}>Logout
                        </button>
                    </>
                }
            </div>
        </>
    );
};
export default Header;