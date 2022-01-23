import React from 'react';
import Button from "../UI/Button/Button";
import {headerStyle} from "./HeaderStyle";

const Header: React.FC = () => {
    return (
        <div className="container" style={headerStyle}>
            <input className='searchInput' type='search'/>
            <Button style={{}} callback={() => {}}  >Login</Button>
        </div>
    );
};
export default Header;