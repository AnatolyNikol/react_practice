import React, {useState} from "react";


export function UncontrolledRating() {
    console.log('Rating rendered')

    const[value, setValue] = useState(0)

    const onClickHandler = (newValue: number) => {
        setValue(newValue)
    }

    return (
        <div>
            <Star selected={value > 0} onClick={onClickHandler} value={1}/>
            <Star selected={value > 1} onClick={onClickHandler} value={2}/>
            <Star selected={value > 2} onClick={onClickHandler} value={3}/>
            <Star selected={value > 3} onClick={onClickHandler} value={4}/>
            <Star selected={value > 4} onClick={onClickHandler} value={5}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    onClick: (newValue: number) => void
    value: number
}

function Star(props: StarPropsType) {
    console.log('Star rendered')
    const onClickHandler = () => {
        props.onClick(props.value)
    }
    return (
        props.selected
            ? <span onClick={onClickHandler}><b>star</b> </span>
            : <span onClick={onClickHandler}>star </span>
    )
    // return (
    //     <span><b>star</b> </span>
    // )
}