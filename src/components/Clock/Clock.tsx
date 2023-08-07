import {useEffect, useState} from "react";


export const Clock = () => {
    let [time, setTime] = useState(new Date())

    let hours = time.getHours().toString();
    let minutes = time.getMinutes().toString();
    let seconds = time.getSeconds().toString();

    if (Number(hours) < 10) {
        hours = '0' + hours
    }
    if (Number(minutes) < 10) {
        minutes = '0' + minutes
    }
    if (Number(seconds) < 10) {
        seconds = '0' + seconds
    }

    useEffect(() => {
       const intervalID  = setInterval(() => {
           console.log('TICK')
            setTime(new Date())
        }, 1000);

        return () => {
            clearInterval(intervalID)
        }
    }, [])


    return (
        <div>
            {hours + ":" + minutes + ":" + seconds}
        </div>
    )
}