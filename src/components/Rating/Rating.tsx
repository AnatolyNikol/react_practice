import React from "react";

export type ValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    /**
     * Rating star value
     * */
    value: ValueType
    /**
     * Change rating star value
     * */
    callback: (newValue: ValueType) => void
}

export function Rating(props: RatingPropsType) {
    console.log('Rating rendered')

    const setValue = (newValue: ValueType) => {
        props.callback(newValue)
    }

    return (
        <div>
            <Star selected={props.value > 0} setValue={setValue} value={1}/>
            <Star selected={props.value > 1} setValue={setValue} value={2}/>
            <Star selected={props.value > 2} setValue={setValue} value={3}/>
            <Star selected={props.value > 3} setValue={setValue} value={4}/>
            <Star selected={props.value > 4} setValue={setValue} value={5}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    setValue: (value: ValueType) => void
    value: ValueType
}

function Star(props: StarPropsType) {
    console.log('Star rendered')
    return (
        <span onClick={() => props.setValue(props.value)}>
            {props.selected ? <b>star </b> : 'star '}
        </span>
    )
    // return (
    //     <span><b>star</b> </span>
    // )
}