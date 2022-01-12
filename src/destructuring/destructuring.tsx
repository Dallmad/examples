import {useState} from "react";

type LessonsType = {
    title:string
    name?:string
}
type StreetType = {
    title:string
}
type AdressType = {
    street:StreetType
}
export type ManType = {
    name: string
    age: number
    lessons: Array<LessonsType>
    adress: AdressType
}
type PropsType = {
    title: string
    man: ManType
    food:Array<string>
    car:{model:string}
}

function useDimaState(m:string) {
    return [m,function (){}]
}
export const ManComponent: React.FC<PropsType> = (props) => {
const {title, man} = props;

const [message,setMessage] =useDimaState('hello')
    return <div>
    <h1>{title}</h1>
    <hr/>
    <div>
        {props.car.model}
    </div>
</div>
}