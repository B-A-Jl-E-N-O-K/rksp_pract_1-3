import React from 'react';


const Header = (props) => {
    return (
        <div className="header">
            <h1>{props.title}</h1>
            <img src="/logo512.png"></img>
        </div>
    );
};

export default Header;