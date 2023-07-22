import React, {useState} from "react";
import style from './select.module.css'

export type ItemType = {
    title: string
    value: any
}

export type SelectPropsType = {
    value: any
    items: ItemType[]
    onChange: (newTitle: any) => void
}

export function Select(props: SelectPropsType) {
    const [collapsed, setCollapsed] = useState(false)
    const [hoverElement, setHoverElement] = useState(props.value)

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoverElement)
    const onItemClick = (value: any) => {
        props.onChange(value);
        setCollapsed(false)
    }

    return (
        <div className={style.selectContainer}
             onClick={() => setCollapsed(!collapsed)}
             tabIndex={0}
             onBlur={() => setCollapsed(false)}
        >
            <span>
                {selectedItem && selectedItem.title}
            </span>
            <div className={style.arrow}></div>
            {
                collapsed &&
                <div className={style.optionsContainer}>
                    {props.items.map(item =>
                        <div className={`${style.options} 
                        ${
                            hoveredItem === item
                                ? style.optionHover
                                : ''
                        }`}
                             onMouseEnter={() => setHoverElement(item.value)}
                             key={item.value}
                             onClick={() => {
                                 onItemClick(item.value)
                             }}>
                            {item.title}
                        </div>
                    )}
                </div>}
        </div>
    )
}
