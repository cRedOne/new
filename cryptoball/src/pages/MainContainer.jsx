import React from 'react';
import Header from '../components/Header';
import GameContainer from '../components/GameContainer';
import BottomMenu from '../components/BottomMenu';

const MainContainer = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Header />
            <GameContainer />
            <BottomMenu />
        </div>
    );
};

export default MainContainer;
