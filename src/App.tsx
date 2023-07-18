import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, ValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";


//function declaration
function App() {
    console.log('App rendered')

    let [value, setValue] = useState<ValueType>(0)
    let [collapsed, setCollapsed] = useState(false)
    let [on, setOn] = useState(true)

    const callback = (newValue: ValueType) => {
        setValue(newValue)
    }

    //обязана вернуть JSX
    return (
        <div className="App">
            <PageTitle title='This is App component'/>
            {/*<Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}
            <Rating value={value} callback={callback}/>
            {/*<UncontrolledRating/>*/}
            {/*<Accordion title='Menu' collapsed={collapsed} onClick={() => setCollapsed(!collapsed)}/>*/}
           {/* <UncontrolledAccordion title='Menu'/>
            <UncontrolledAccordion title='Users'/>*/}
            {/*<OnOff isOn={on} onClick={setOn}/>*/}
            {/*<UncontrolledOnOff/>*/}
            {/*<OnOff />*/}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('PageTitle rendering')
    return (
        <h1>
            {props.title}
        </h1>
    )
}


export default App;
