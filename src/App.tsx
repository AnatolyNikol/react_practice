import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, ValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {ItemType, Select} from "./components/Select/Select";


//function declaration
function App() {
    console.log('App rendered')

    const items = [
        {title: 'Valera', value: 1},
        {title: 'Sasha', value: 2},
        {title: 'Sveta', value: 3},
    ]


    // let [value, setValue] = useState<ValueType>(0)
    // let [collapsed, setCollapsed] = useState(false)
    // let [on, setOn] = useState(true)
    let [selectValue, setSelectValue] = useState(2)

    // const callback = (newValue: ValueType) => {
    //     setValue(newValue)
    // }

    const changeTitle = (newValue: any) => {
        setSelectValue(newValue)
    }

    //обязана вернуть JSX
    return (
        <div className="App">
            {/*<PageTitle title='This is App component'/>*/}

            {/*<Select value={selectValue}*/}
            {/*        items={items}*/}
            {/*        onChange={changeTitle}*/}
            {/*/>*/}
            {/*<Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}
            {/*<Rating value={value} callback={callback}/>*/}
            {/*<UncontrolledRating/>*/}
            {/*<Accordion title='Menu' collapsed={collapsed} onChange={() => setCollapsed(!collapsed)}/>*/}
            <UncontrolledAccordion title='Menu'/>
            <UncontrolledAccordion title='Users'/>
            {/*<OnOff isOn={on} onClick={setOn}/>*/}
            {/*<UncontrolledOnOff/>*/}
            {/*<OnOff />*/}
        </div>
    );
}

// type PageTitlePropsType = {
//     title: string
// }

// function PageTitle(props: PageTitlePropsType) {
//     console.log('PageTitle rendering')
//     return (
//         <h1>
//             {props.title}
//         </h1>
//     )
// }


export default App;
