import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {Accordion, AccordionPropsType} from "./Accordion";
import {Story} from "@storybook/react";


export default {
    title: 'Accordion',
    component: Accordion
}
const callback = action('accordion mode change event fired')
const onClickCallback = action('some item was clicked')

/*const Template:Story<AccordionPropsType> = (args) => <Accordion {...args}/>

export const MenuCollapsedMode = () => Template.bind({})
MenuCollapsedMode.args = {
    titleValue:'Menu',
    collapsed:true,
    onChange:callback
}
export const UsersUncollapsedMode = () => Template.bind({})
UsersUncollapsedMode.args = {
    titleValue:'Users',
    collapsed:false,
    onChange:callback
}*////      так не работает почему-то
export const MenuCollapsedMode = () => <Accordion
    titleValue={'Menu'}
    collapsed={true}
    onChange={callback}
    items={[]}
    onClick={onClickCallback}/>
export const UsersUncollapsedMode = () => <Accordion
    titleValue={'Users'}
    collapsed={false}
    onChange={callback}
    items={[{title: 'Dima', value: 1}, {title: 'Valera', value: 2}]}
    onClick={onClickCallback}/>
export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion
        titleValue={'Users'}
        collapsed={value}
        onChange={() => {setValue(!value)}}
        items={[{title: 'Dima', value: 1}, {title: 'Valera', value: 2}]}
        onClick={onClickCallback}
    />
}
