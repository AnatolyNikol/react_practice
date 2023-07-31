import {Meta} from "@storybook/react";
import React, {useEffect, useState} from "react";


const meta: Meta = {
    title: 'Studying/useEffect'
}

export default meta;

const SimpleExample = () => {
    console.log('SimpleExample');

    const [counter, setCounter] = useState(1);
    const [fake, setFake] = useState(1);

    useEffect(() => {
        console.log('useEffect every render');
        document.title = counter.toString();
    });

    useEffect(() => {
        console.log('useEffect only first render');
        document.title = counter.toString();
    },[]);

    useEffect(() => {
        console.log('useEffect first render and every counter change');
        document.title = counter.toString();
    },[counter]);

    return (
        <>
            Hello, {counter} {fake}
            <button onClick={() => setCounter(counter + 1)}>counter +</button>
            <button onClick={() => setFake(fake + 1)}>fake +</button>
        </>
    )
}

const SetTimeoutExample = () => {
    console.log('SetTimeoutExample')

    const [counter, setCounter] = useState(1);
    const [fake, setFake] = useState(1);

    useEffect(() => {
        setTimeout(() => {
            console.log('setTimeout')
            document.title = counter.toString()
        }, 1000);
    }, [counter]);

    return (
        <>
            Hello, {counter} {fake}
            <button onClick={() => setCounter(counter + 1)}>counter +</button>
            <button onClick={() => setFake(fake + 1)}>fake +</button>
        </>
    )
};

const SetIntervalExample = () => {
    console.log('SetIntervalExample')

    const [counter, setCounter] = useState(1);
    const [fake, setFake] = useState(1);

    useEffect(() => {
        setInterval(() => {
            console.log('tick: ' + counter)
            setCounter((state) => state + 1)
        }, 1000);
    }, []);

    return (
        <>
            Hello, counter: {counter} - fake: {fake}
        </>
    )
};

export const UseEffectDemo = {
    render: () => <SimpleExample/>
}

export const UseEffectDemo2 = {
    render: () => <SetTimeoutExample/>
}

export const UseEffectDemo3 = {
    render: () => <SetIntervalExample/>
}