import React, {useState} from 'react';
import './App.css';
import {UncontrolledAccordion} from "./components/Accordion/UnconrtolledAccordion";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import {UncontrolledOnOff} from "./components/OnOff/UncontrolledOnOff";


function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState(false);
    let items = [{title: '',value:'' }]
    return (
        <div className={'App'}>
            {/* <OnOff on={switchOn} onChange={setSwitchOn}/>*/}
            {/*<OnOff
                on={switchOn}
                onChange={(on) => {
                    setSwitchOn(on)
                }}/>//identical//*/}

            <Accordion
                titleValue={'Menu'}
                collapsed={accordionCollapsed}
                onChange={() => {
                    setAccordionCollapsed(!accordionCollapsed)
                }}
                items={items}
                onClick={setAccordionCollapsed}
            />

            <Rating
                value={ratingValue}
                onClick={setRatingValue}/>
            <UncontrolledOnOff onChange={setSwitchOn}/>{switchOn.toString()}
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
