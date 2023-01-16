import React, {useState} from 'react';
import './style.css'


export default function MyComponent(props: any) {
    const [count,setcount] = useState(0);
    const {message} = props;
    return (
        <div className='counter'>
            <h1>{message}</h1>
            <h1>Number : {count}</h1>
            <center>
            <button onClick={() => setcount(count + 1)}>Increment</button>
            <button onClick={() => setcount(count - 1)}>Decrement</button>
            <button onClick={() => setcount(0)}>Reset</button>
            </center>
        </div>  
    );
}