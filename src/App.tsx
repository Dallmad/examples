import React from 'react';
import './App.css';
import {UncontrolledAccordion} from "./components/Accordion/UnconrtolledAccordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";

function App() {
    return (
        <div>
            <OnOff />
            <OnOff />
            <UncontrolledAccordion titleValue={'Menu'} collapsed={true}/>
            <UncontrolledAccordion titleValue={'Users'} collapsed={false}/>
            {/*<PageTitle title={'This is APP component'}/>
            <PageTitle title={'My friend'}/>
            Article 1
            <Rating value={0}/>
            <Accordion titleValue={'Menu'} collapsed={true}/>
            <Accordion titleValue={'Users'} collapsed={false}/>
            Article 2
            <Rating value={4}/>*/}
        </div>
    );
}

type pageTitlePropsType = {
    title: string
}

function PageTitle(props: pageTitlePropsType) {
    return <h1>{props.title}</h1>
}

export default App;
