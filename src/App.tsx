import React, {useState} from 'react';
import './App.css';
import {UncontrolledAccordion} from "./components/Accordion/UnconrtolledAccordion";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";


function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed,setAccordionCollapsed] = useState<boolean>(false)
    return (
        <div className={'App'}>
            {/*<OnOff on={false}/>*/}
            {/*added uncontrolled buttons Accordion and Rating*/}
            {/*<UncontrolledAccordion titleValue={'Menu'}/>*/}
{/*
            <Accordion titleValue={'Menu'} collapsed={setAccordionCollapsed}/>
*/}
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledRating/>
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
