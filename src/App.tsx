import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";


function App() {
    return (
        <div>
            <PageTitle title={'This is APP component'}/>
            <PageTitle title={'My friend'}/>
            Article 1
            <Rating value={0}/>
            <Accordion titleValue={'Menu'} collapsed={true}/>
            <Accordion titleValue={'Users'} collapsed={false}/>
            Article 2
            <Rating value={5}/>
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
