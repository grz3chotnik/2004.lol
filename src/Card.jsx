import './Card.css'
import Three from './assets/three.png'
import { Link } from "react-router-dom"

function Card() {
    return (
        <>
            <div className="bob">
                <img
                    alt="profile pic"
                    src={Three}
                    height={50}
                    width={50}
                />
                <h1>grz3chotnik</h1>
                <p>yeah</p>
            </div>
            <div className="bob">

                <h1>My links</h1>
                <a href="https://terminalcore.org" target="_blank" rel="noopener noreferrer">
                    terminalcore.org
                </a>
                <a href="https://github.com/grz3chotnik" target="_blank" rel="noopener noreferrer">
                    Github
                </a>
                <br/>
                <h1>Other</h1>
                <Link to="/bot-page">Discord Bot</Link>
                <br/>
                <p className="bluer">last update: 3 Jul 2025</p>
                <br/>
                {/*<img src={"./src/ev.jpg"} height={"100vh"} width={"100vh"} alt={""}/>*/}
                {/*<p>ev.jpg</p>*/}

            </div>


        </>
    )
}

export default Card