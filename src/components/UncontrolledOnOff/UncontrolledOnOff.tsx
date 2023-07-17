import {useState} from "react";

export function UncontrolledOnOff() {
    console.log('OnOff rendering')
    const [on, setOn] = useState(true); //hook

    const onClickHandler = () => {
        setOn(true)
    }
    const offClickHandler = () => {
        setOn(false)
    }

    const container = {
        display: 'flex'
    }

    const switcher = {
        width: '30px',
        display: 'inline-block',
        border: '1px solid black'
    }

    const indicator = {
        display: 'inline-block',
        width: '20px',
        height: '20px',
        border:' 1px solid black',
        borderRadius: '10px'
    }

    return (
        <div style={container}>
            <div style={on ? {...switcher, backgroundColor: 'green'} : switcher} onClick={onClickHandler}>On</div>
            <div style={on ? switcher : {...switcher, backgroundColor: 'red'}} onClick={offClickHandler}>Off</div>
            <div style={on ? {...indicator, backgroundColor: 'green'} : {...indicator, backgroundColor: 'red'}}></div>
        </div>
    )
}