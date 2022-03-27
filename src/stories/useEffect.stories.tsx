import React, {useEffect, useState} from 'react';

export default {
    title: 'useEffect demo'
}

export const SimpleExample = () => {


    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)
    console.log('SimpleExample')

    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString()
    })
    useEffect(() => {
        console.log('useEffect only first render')
        document.title = counter.toString()
    }, [])
    useEffect(() => {
        console.log('useEffect first render and every counter change')
        document.title = counter.toString()
    }, [counter])

    return <>
        Hi count:{counter} and fake:{fake}
        <button onClick={() => setCounter(state => state + 1)}>+</button>
        <button onClick={() => setFake(fake => fake + 1)}>+</button>
    </>
}


export const SetIntervalExample = () => {

    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)
    console.log('SetTimeoutExample')

    useEffect(() => {
       const intervalId = setInterval(() => {
            setCounter(state => state + 1)
        }, 1000)
        return () => clearInterval(intervalId)
    }, [])

    return <>
        Hi count:{counter} and fake:{fake}
        {/*<button onClick={()=>setCounter( state => state+1)}>+</button>
        <button onClick={()=>setFake( fake => fake+1)}>+</button>*/}
    </>
}


export const KeyTrackerExample = () => {

    const [text, setText] = useState('')
    console.log('Component rendered with ' + text)

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }
        window.addEventListener('keypress', handler)
        return () => {
            window.removeEventListener('keypress', handler)
        }
    }, [text])

    return <>
        Typed text: {text}
    </>
}