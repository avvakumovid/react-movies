import React from 'react';
import Button from "../UI/Button/Button";
import {button, headerStyle, input} from './HeaderStyle';

const Header: React.FC = () => {
    return (
        <div className="container" style={headerStyle}>
            <input style={input} type='search'/>
            <button style={button} >Login</button>
        </div>
    );
};
export default Header;