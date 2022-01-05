import React from 'react';
import './App.css';

function App() {
    return (
        <div >
            This is APP component
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    );
}

export function Star() {
    return (
        <div>star</div>
    )
}

export default App;
