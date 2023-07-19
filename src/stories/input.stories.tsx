import {Meta} from "@storybook/react";
import {ChangeEvent, useRef, useState} from "react";

const meta: Meta = {
    title: 'Studying/Input',
}

export default meta;

export const UncontrolledInput = {
    render: () => <input/>
};

const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('');

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const actualValue = e.currentTarget.value
        setValue(actualValue);
    }

    return <><input onChange={onChangeHandler}/> - {value} </>
};

export const UncontrolledInputWithTrackedValue = {
    render: () => <TrackValueOfUncontrolledInput/>
}

const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return <>
        <input ref={inputRef}/>
        <button onClick={save}>save</button> - actual value: {value}
    </>

};

export const InputWithButton = {
    render: () => <GetValueOfUncontrolledInputByButtonPress/>
}