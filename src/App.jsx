import { useState } from 'react'
import './App.css'
import Card from "./Card.jsx";
import {Router} from "react-router-dom";
import Overlay from "./Overlay.jsx";

function App() {


return (
    <>
    <Overlay></Overlay>
    <Card></Card>
    </>
  )
}

export default App
