import {Meta} from "@storybook/react";
import React, {useCallback, useMemo, useState} from "react";


const meta: Meta = {
    title: 'Studying/useMemo useCallback'
}

export default meta;

const StateForDifficultCountingExample = () => {
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 100000000) {
                fake++;
                const fakeValue = Math.random();
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a]);



    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return (
        <>
            <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
            <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
            <hr/>

            <div>
                Result for a: {resultA}
            </div>
            <div>
                Result for b: {resultB}
            </div>
        </>
    )
}

export const DifficultCountingExample = {
    render: () => <StateForDifficultCountingExample/>
}

const InitialUsers = (props: {users: Array<string>}) => {
    console.log('Users')
    return <div>
        {props.users.map((u,i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(InitialUsers);


const StateForHelpsToReactMemoExample = () => {
    console.log('Helps to react memo')
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem']);

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users]);

    const addUser = () => {
        setUsers([...users, 'Sveta ' + new Date().getTime()])
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => addUser()}>add user</button>
        {counter}
        <Users users={newArray}/>
    </>
}

export const HelpsToReactMemoExample = {
    render: () => <StateForHelpsToReactMemoExample/>
}

type InitialBooksPropsType = {
    addBook: () => void
}

const InitialBooks = (props: InitialBooksPropsType) => {
    console.log('Books')
    return <div>
        <button onClick={() => props.addBook()}>add book</button>
    </div>
}

const Books = React.memo(InitialBooks);

const StateForUseCallbackExample = () => {
    console.log('UseCallback')
    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(['Dimych', 'Valera', 'Artem']);

    const addBook = useCallback(() => {
        setBooks([...books, 'Sveta ' + new Date().getTime()])
    }, [books])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Books addBook={addBook}/>
    </>
}

export const UseCallbackExample = {
    render: () => <StateForUseCallbackExample/>
}

