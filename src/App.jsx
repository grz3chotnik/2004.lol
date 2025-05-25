import { useState } from 'react';
import './App.css';
import Card from './Card.jsx';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Overlay from './Overlay.jsx';
import BotPage from './pages/BotPage.jsx';

function Home() {
    return (
        <div>
            <Card />
        </div>
    );
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/bot-page" element={<BotPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;