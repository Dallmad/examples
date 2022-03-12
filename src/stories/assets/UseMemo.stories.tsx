import React, {useMemo, useState} from 'react';

export default {
    title: 'useMemo'
}

const UsersSecret = (props: { users: string[] }) => {
    console.log('USERS SECRET')
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    console.log('HelpsToReactMemo')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dimy', 'Valera', 'Artem'])

    const newArray =useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)},[users])
    const addUser = () => {
        const newUsers = [...users,'Sveta' + new Date().getTime(),]
        setUsers(newUsers)
    }
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>Add User</button>
        {counter}
        <Users users={newArray}/>
    </>
}