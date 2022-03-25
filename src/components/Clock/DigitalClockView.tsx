import {FC} from 'react';
import {ClockViewPropsType} from './Clock';

export const get2digitsStaring = (num: number) => num < 10 ? '0' + num : num

export const DigitalClockView: FC<ClockViewPropsType> = ({date}) => {
    return <>
        <span>{get2digitsStaring(date.getHours())}</span>
        :
        <span>{get2digitsStaring(date.getMinutes())}</span>
        :
        <span>{get2digitsStaring(date.getSeconds())}</span>
    </>

}