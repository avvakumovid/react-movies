import React from 'react';
import CSS from 'csstype'

const Header: React.FC = () => {
    const headerStyle: CSS.Properties = {
        backgroundColor: '#29313a',
        display: 'flex',
        justifyContent: 'space-between',
    }
    return (
        <div className="container" style={headerStyle}>
            <input className='searchInput' type='search'/>
            <button className='loginBtn'>Log In</button>
        </div>
    );
};

export default Header;