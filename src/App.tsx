import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    let[ play1Counter,setPlay1Counter]=useState(10)
    let [play2Counter,setPlay2Counter]=useState(10)
  return (
    <div className="App">
     <div>
         <div>Иван Иванов</div>
         <div>{ play1Counter}</div>
         <button onClick={()=>{setPlay1Counter(play1Counter+1)}}>+</button>
     </div>
        <hr/>
        <div>
            <div>Петя Петров</div>
            <div>{play2Counter}</div>
            <button onClick={()=>setPlay2Counter(play2Counter+1)}>+</button>
        </div>
        <hr/>
        <button onClick={()=>{
            setPlay1Counter(play1Counter-1)
            setPlay2Counter(play2Counter-1)
        }}>-</button>
    </div>
  );
}

export default App;
