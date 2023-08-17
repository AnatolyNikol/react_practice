import style from './AnalogClockStyle.module.css'
import {useEffect, useState} from "react";

export const AnalogClock = () => {
    let [date, setDate] = useState(new Date());


    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();

    useEffect(() => {
        const intervalID  = setInterval(() => {
            setDate(new Date())
        }, 1000);

        return () => {
            clearInterval(intervalID)
        }
    }, [])


    let secondContainer = {
        transform: `rotate(${seconds * 6}deg)`
    }
    let minuteContainer = {
        transform: `rotate(${minutes * 6}deg)`
    }
    let hourContainer = {
        transform: `rotate(${(hours * 30) + (minutes / 2)}deg)`
    }


    return (
        <div className={style.clockCircle}>
            <div className={style.one + ' ' + style.numbers}><span>|</span></div>
            <div className={style.two + ' ' + style.numbers}><span>|</span></div>
            <div className={style.three + ' ' + style.numbers}><span className={style.numberThree}>3</span></div>
            <div className={style.four + ' ' + style.numbers}><span>|</span></div>
            <div className={style.five + ' ' + style.numbers}><span>|</span></div>
            <div className={style.six + ' ' + style.numbers}><span className={style.numberSix}>6</span></div>
            <div className={style.seven + ' ' + style.numbers}><span>|</span></div>
            <div className={style.eight + ' ' + style.numbers}><span>|</span></div>
            <div className={style.nine + ' ' + style.numbers}><span className={style.numberNine}>9</span></div>
            <div className={style.ten + ' ' + style.numbers}><span>|</span></div>
            <div className={style.eleven + ' ' + style.numbers}><span>|</span></div>
            <div className={style.twelve + ' ' + style.numbers}><span>12</span></div>

            <div className={style.handsContainer} style={hourContainer}>
                <div className={style.hour}></div>
            </div>
            <div className={style.handsContainer} style={minuteContainer}>
                <div className={style.minute}></div>
            </div>
            <div className={style.handsContainer} style={secondContainer}>
                <div className={style.second}></div>
            </div>
            <div className={style.handsCircle}></div>
        </div>
    )
}