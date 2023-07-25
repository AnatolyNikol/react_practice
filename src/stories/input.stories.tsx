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

const ParentValueState = () => {
    const [parentValue, setParentValue] = useState('');

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <input value={parentValue} onChange={onChangeHandler}/>
}

export const ControlledInput = {
    render: () => <ParentValueState/>
}

const StateForCheckbox = () => {
    const [parentValue, setParentValue] = useState(true);

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }

    return <input type={"checkbox"} checked={parentValue} onChange={onChangeHandler}/>
}

export const ControlledCheckbox = {
    render: () => <StateForCheckbox/>
}

const StateForSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>('1');

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <select value={parentValue} onChange={onChangeHandler}>
        <option>none</option>
        <option value={'1'}>Juice</option>
        <option value={'2'}>Milk</option>
        <option value={'3'}>Bread</option>
    </select>
}

export const ControlledSelect = {
    render: () => <StateForSelect/>
}