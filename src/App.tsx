import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import AppRouter from "./components/AppRouter";

function App() {
    return (

        <div className="wrapper">
            <Header/>
            <div className="container main">
                <AppRouter/>
            </div>
        </div>
    );
}

export default App;
