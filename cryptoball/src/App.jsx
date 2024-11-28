import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainContainer from './pages/MainContainer';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import './App.css'; // Убедись, что этот путь верен и файл существует


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainContainer />} />
                <Route path="/page2" element={<Page2 />} />
                <Route path="/page3" element={<Page3 />} />
            </Routes>
        </Router>
    );
};

export default App;
