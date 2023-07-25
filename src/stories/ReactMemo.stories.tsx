import {Meta} from "@storybook/react";
import React, {useState} from "react";

const meta: Meta = {
    title: 'Studying/React memo'
}

export default meta;

const NewMessagesCounter = (props: any) => {
    return <div>{props.count}</div>
}

const InitialUsers = (props: {users: Array<string>}) => {
    console.log('Users')
    return <div>
        {props.users.map((u,i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(InitialUsers);

const StateForExample1 = () => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem']);

    const addUser = () => {
        setUsers([...users, 'Sveta ' + new Date().getTime()])
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
}

export const Example1 = {
    render: () => <StateForExample1/>
}