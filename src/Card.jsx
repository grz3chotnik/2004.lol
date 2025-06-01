import './Card.css'
import Rock from './assets/Rock to the Rhythm.mp3'
import Three from './assets/three.png'
import {Link, Router} from "react-router-dom";
function Card() {

    return (<>



        <div className={"bob"}>
            <img alt={"profile pic"} src={Three} height={50} width={50}/>
           <h3>grz3chotnik</h3>
            <p className={"bluer"}>Asunción, Paraguay</p>
            <p> yeah</p>
        </div>
        <div className={"bob"}>
            <h3>my links</h3>

            <a href={"https://terminalcore.org"}>terminalcore.org</a>
            <a href={"https://ai.2004.lol"}>ai.2004.lol</a>
            <a href={"https://github.com/grz3chotnik"}>Github</a>
            <a href={"https://www.youtube.com/@grz3chotnik"}>Youtube</a>

<br/>
            {/*<h3>discord bot</h3>*/}
            {/*<Link to="/bot-page">Link</Link> <br/>*/}
            <p className={"bluer"}>last update: 1 june 2025</p>

        </div>


        </>
    );
}

export default Card;