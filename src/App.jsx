import './App.css';
import Card from './Card.jsx';
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom';
import Overlay from './Overlay.jsx';
import BotPage from './pages/BotPage.jsx';
import DigitalClock from "./pages/DigitalClock.jsx";
import { Analytics } from "@vercel/analytics/next"

function Home() {
    return (<div>
        <Card/>
    </div>);
}


function App() {
    return (<>
            <Analytics />
            <DigitalClock/>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/bot-page" element={<BotPage/>}/>
        </Routes>
    </BrowserRouter>


        </>
    );
}

export default App;