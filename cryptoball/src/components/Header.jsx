import React from 'react';

const Header = ({ username, score }) => {
    return (
        <div className="header">
            <div className="username">{username}</div>
            <div className="score">Score: {score}</div>
        </div>
    );
};

export default Header;
