import { Link } from 'react-router-dom';
import "./BotPage.css"
import {gsap} from "gsap";
import {ScrollToPlugin} from "gsap/ScrollToPlugin";
import {snap} from "gsap/gsap-core";
gsap.registerPlugin(ScrollToPlugin)







function BotPage() {
    return (
        <>



        <div className={"box"}>
            <div>
            <h3>work in progress</h3>
            <Link to="/">{'<-- Home'} </Link>
        </div>
        </div>

            <div className={"box"}>

            </div>
            <div className={"box"}>

            </div>
        </>
    );
}



export default BotPage;