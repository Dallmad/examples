import React, {FC, useCallback, useMemo, useState} from 'react';

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

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users])
    const addUser = () => {
        const newUsers = [...users, 'Sveta' + new Date().getTime(),]
        setUsers(newUsers)
    }
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>Add User</button>
        {counter}
        <Users users={newArray}/>
    </>
}

export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'CSS', 'HTML', 'JS'])

    const newArray = useMemo(() => {
        return books.filter(b => b.toLowerCase().indexOf('a') > -1)
    }, [books])


/*    const memoizedAddBook = useMemo(() => {
        return () => {
            const newBooks = [...books, 'Angular' + new Date().getTime(),]
            setBooks(newBooks)
        }
    }, [books])*/

    const memoizedAddBook2 = useCallback(() => {
        const newBooks = [...books, 'Angular' + new Date().getTime(),]
        setBooks(newBooks)
    },[books])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>

        {counter}
        <Book books={newArray} addBook={memoizedAddBook2}/>
    </>
}

type BookSecretPropsType = {
    books: string[]
    addBook: () => void
}

const BooksSecret: FC<BookSecretPropsType> = ({books, addBook, ...restprops}) => {
    console.log('BOOKS SECRET')
    return <div>
        <button onClick={addBook}>Add User</button>
        {books.map((b, i) => <div key={i}>{b}</div>
        )}
    </div>
}

const Book = React.memo(BooksSecret)