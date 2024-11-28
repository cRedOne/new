import React from 'react';
import { useNavigate } from 'react-router-dom';

const BottomMenu = () => {
    const navigate = useNavigate();

    return (
        <div className="bottom-menu">
            <div className="button" onClick={() => navigate('/')}>Главный экран</div>
            <div className="button" onClick={() => navigate('/page2')}>Страница 2</div>
            <div className="button" onClick={() => navigate('/page3')}>Страница 3</div>
        </div>
    );
};

export default BottomMenu;
