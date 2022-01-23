import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import AppRouter from "./AppRouter";

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
