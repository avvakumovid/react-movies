import React, {useEffect} from 'react';
import './App.css';
import AppRouter from './AppRouter';
import {useTypedSelector} from './hooks/useTypedSelector';
import {useAction} from './hooks/useAction';
import {alert, AlertContainer} from 'react-custom-alert';

function App() {
    const alertInfo = () => alert({ message: 'info', type: 'info' });
    let {isAuth} = useTypedSelector(state => state.user)
    let {authAction} = useAction()
    useEffect(() => {
        authAction()
    }, [])
    return (
        <div className="wrapper">
            <div className="container main">
                <div className="image"></div>
                <div className="content">
                    <AppRouter/>
                    <AlertContainer floatingTime={5000} />
                </div>
            </div>
        </div>
    );
}

export default App;
