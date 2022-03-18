import {FC, useEffect, useState} from 'react';


type PropsType = {}

const get2digitsStaring = (num: number) => num < 10 ? '0' + num : num

export const Clock: FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())
    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return <div>
        <span>{get2digitsStaring(date.getHours())}</span>
        :
        <span>{get2digitsStaring(date.getMinutes())}</span>
        :
        <span>{get2digitsStaring(date.getSeconds())}</span>
    </div>
}