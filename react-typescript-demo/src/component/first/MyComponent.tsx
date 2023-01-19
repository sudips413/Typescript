import React from 'react';
import './style.css'


// export default function MyComponent(props: any) {
//     const [count,setcount] = useState(0);
//     const {message} = props;
//     return (
//         <div className='counter'>
//             <h1>{message}</h1>
//             <h1>Number : {count}</h1>
//             <center>
//             <button onClick={() => setcount(count + 1)}>Increment</button>
//             <button onClick={() => setcount(count - 1)}>Decrement</button>
//             <button onClick={() => setcount(0)}>Reset</button>
//             </center>
//         </div>  
//     );
// }
export default class MyComponent extends React.Component<{Message: String},{count:Number}>{
    state ={
        count: 0
    }
    render(){
        return(
            <div className='counter'>
                <span ><h1>Number : {this.state.count}</h1></span>
                <br/>
                <div className='btns'>
                    <button className='counter-btn' onClick={()=>{
                        this.setState({count: this.state.count + 1})
                    
                    }}>Increase</button>
                    <button className='counter-btn' onClick={()=>{
                        this.setState({count: this.state.count - 1})
                    }}>Decrease</button>
                    <button className='counter-btn' onClick={()=>{
                        this.setState({count: 0})
                    }}
                    >Reset</button>     
                </div>               
            </div>
        )
    }
}