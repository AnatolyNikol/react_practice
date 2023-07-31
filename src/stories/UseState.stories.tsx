import {Meta} from "@storybook/react";
import React, {useState} from "react";


const meta: Meta = {
    title: 'Studying/useState'
}

export default meta;

const Example1 = () => {
    console.log('Example1');

    const [counter, setCounter] = useState(0);

    return (
        <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
        </>
    )
}

export const UseStateDemo = {
    render: () => <Example1/>
}