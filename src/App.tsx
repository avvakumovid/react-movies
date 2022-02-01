import React, {useEffect, useState} from 'react';
import './App.css';
import AppRouter from './AppRouter';
import Modal from './components/UI/Modal/Modal';
import {useTypedSelector} from './hooks/useTypedSelector';
import {useAction} from './hooks/useAction';

function App() {
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
                </div>
            </div>
        </div>
    );
}

export default App;
