import React from 'react';
import './App.css';
import {UncontrolledAccordion} from "./components/Accordion/UnconrtolledAccordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";

function App() {
    return (
        <div className={'App'}>
            <OnOff on={false}/>
{/*added uncontrolled buttons Accordion and Rating*/}
            <UncontrolledAccordion titleValue={'Menu'}/>
            <UncontrolledRating/>

            {/*<PageTitle title={'This is APP component'}/>
            <PageTitle title={'My friend'}/>
            Article 1
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
