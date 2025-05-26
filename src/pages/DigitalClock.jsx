import {useEffect, useState} from "react";

function DigitalClock(){

const [time, setTime] = useState(new Date())

    useEffect(() => {
        const IntervalID = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return (
            () => {clearInterval(IntervalID)}
        )
    }, []);


function formatTime() {
    let hours = time.getHours()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()

    return(
        `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`
    )
}

function padZero(number){
    return (number < 10 ? "0" : "") + number

}

    return(

       <span className={"clock"}>Time: {formatTime()}</span>

    )
}

export default DigitalClock;