import React from 'react';
import './App.css';
import AppRouter from './AppRouter';

function App() {
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
