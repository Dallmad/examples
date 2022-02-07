import React, {useState, KeyboardEvent, useEffect} from "react";
import s from './Select.module.css'

type itemType = {
    title: string
    value: any
}
type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: itemType[]
}

export function Select(props: SelectPropsType) {
    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)


    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const toggleItems = () => setActive(!active)
    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems()
    }
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElemen = e.key === 'ArrowDown'
                        ? props.items[i + 1]
                        : props.items[i - 1]
                    if (pretendentElemen) {
                        props.onChange(pretendentElemen.value)
                        return
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value)
            }
        }
        if (e.key === 'Escape' || e.key === 'Enter') {
            setActive(false)
        }
    }

    return (
        <div>
            <div className={s.select} onKeyUp={onKeyUp} tabIndex={0}>
                <span onClick={toggleItems} className={s.main}>{selectedItem && selectedItem.title}</span>
                {
                    active &&
                    <div className={s.items}>
                        {props.items.map(i => <div
                            onMouseEnter={() => {
                                setHoveredElementValue(i.value)
                            }}
                            className={hoveredItem === i ? s.selected : ''}
                            key={i.value}
                            onClick={() => {
                                onItemClick(i.value)
                            }}
                        >{i.title}</div>)}
                    </div>
                }
            </div>
        </div>
    )
}