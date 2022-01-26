import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {Accordion, AccordionPropsType} from "./Accordion";


export default {
    title:'Accordion',
    component:Accordion
}
const callback =action('accordion mode change event fired')

export const MenuCollapsedMode = () => <Accordion titleValue={'Menu'} collapsed={true} onChange={callback}/>
export const UsersUncollapsedMode = () => <Accordion titleValue={'Users'} collapsed={false} onChange={callback}/>
export const ModeChanging= () => {
    const [value,setvalue]=useState<boolean>(true)
    return <Accordion titleValue={'Users'} collapsed={value} onChange={()=>{setvalue(!value)}}/>}
