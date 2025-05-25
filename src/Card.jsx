import React from "react";
import './Card.css'
import Rock from './assets/Rock to the Rhythm.mp3'
// MyComponent.js
function Card() {
    return (<>

        <div className={"bob"}>
            <img alt={"photo"} src={"src/assets/three.png"} height={50} width={50}/>
           <p>grz3chotnik</p>
            <p className={"bluer"}>Asuncion, Paraguay</p>
        </div>
        <div className={"bob"}>
            <h3>Links</h3>
            <a href={"https://github.com/grz3chotnik"}>Github</a>
            <a href={"https://www.youtube.com/@grz3chotnik"}>Youtube</a>
            <a href={"###"}>Instagram</a>

            <a></a>
            <audio autoPlay={true} src={Rock} loop={true}></audio>
        </div>





</>
    );
}

export default Card;