import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";

//function declaration
function App() {
    console.log('App rendered')
    //обязана вернуть JSX
    return (
        <div className="App">
            <PageTitle title='This is App component'/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <UncontrolledRating/>
            {/*<Accordion title='Menu' collapsed={true}/>
            <Accordion title='Contacts' collapsed={false}/>*/}
            <UncontrolledAccordion title='Menu'/>
            <UncontrolledAccordion title='Users'/>
            {/*<OnOff isOn={true}/>
            <OnOff isOn={false}/>
            <UncontrolledOnOff/>*/}
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
