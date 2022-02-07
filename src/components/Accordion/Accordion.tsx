import React, {useState} from "react";

type itemType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: itemType[]
    onClick: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {

    let [collapsed, setCollapsed] = useState(false)
    return <div>
        <AccordionTitle title={props.titleValue}
                        onChange={props.onChange}/>
        {!props.collapsed && <AccordionBody
            items={props.items}
            onClick={props.onClick}
        />}
    </div>
}


type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={(e) => props.onChange()}>--{props.title}--</h3>
}

export type AccordionBodyPropsType = {
    items: itemType[]
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    return <ul>
        {props.items.map((i, index) => <li
            onClick={() => {
                props.onClick(i.value)
            }}
            key={index}>{i.title}</li>)}
    </ul>

}