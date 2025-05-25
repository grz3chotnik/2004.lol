import React from "react";
import './Card.css'
import Rock from './assets/Rock to the Rhythm.mp3'
import Three from './assets/three.png'
import {Link, Router} from "react-router-dom";
// MyComponent.js
function Card() {
    return (<>

        <div className={"bob"}>
            <img alt={"profile pic"} src={Three} height={50} width={50}/>
           <h3>grz3chotnik</h3>
            <p className={"bluer"}>Asunción, Paraguay</p>
        </div>
        <div className={"bob"}>
            <h3>links</h3>
            <a href={"https://github.com/grz3chotnik"}>Github</a>
            <a href={"https://www.youtube.com/@grz3chotnik"}>Youtube</a>
            <a href={"###"}>Instagram</a>
<br/>
            <h3>discord bot</h3>
            <Link to="/bot-page">Link</Link>

        </div>




</>
    );
}

export default Card;