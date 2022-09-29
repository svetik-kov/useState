import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App_() {
    let[ play1Counter,setPlay1Counter]=useState(10)
    let [play2Counter,setPlay2Counter]=useState(10)


  return (
    <div className="App">
     <div>
         <div>Иван Иванов</div>
         <div>{ play1Counter}</div>
        {/* <button onClick={()=>{setPlay1Counter(play1Counter+1)}}>+</button>*/}
         <button onClick={()=>{setPlay1Counter((actual)=>actual+1)}}>+</button>
     </div>
        <hr/>
        <div>
            <div>Петя Петров</div>
            <div>{play2Counter}</div>
          {/*  <button onClick={()=>setPlay2Counter(play2Counter+1)}>+</button>*/}
            <button onClick={()=>setPlay2Counter((actual)=>actual+1)}>+</button>
        </div>
        <hr/>
        <button onClick={()=>{
           /* setPlay1Counter(play1Counter-1)
            setPlay2Counter(play2Counter-1)*/
            setPlay1Counter((actual)=>actual-1)
            setPlay2Counter((actual)=>actual-1)
        }}>-</button>
        <button onClick={()=>{
            setPlay1Counter(10)
            setPlay2Counter(10)
        }}>reset</button>
    </div>
  );
}
function App() {
       let [counters,setCounters]=useState({
            c1:10,
            c2:10
        }

    )
    return (
        <div className="App">
            <div>
                <div>Иван Иванов</div>
                <div>{ counters.c1}</div>
                {/* <button onClick={()=>{setPlay1Counter(play1Counter+1)}}>+</button>*/}
                <button onClick={()=>{setCounters((actual)=>{
                    return {...actual,c1: actual.c1++}
                })}}>+</button>
            </div>
            <hr/>
            <div>
                <div>Петя Петров</div>
                <div>{counters.c2}</div>
                {/*  <button onClick={()=>setPlay2Counter(play2Counter+1)}>+</button>*/}
                <button onClick={()=>{setCounters((actual)=>{
                    return {...actual,c2:actual.c2+1}
                })}}>+</button>
            </div>
            <hr/>
            <button onClick={()=>{
                /* setPlay1Counter(play1Counter-1)
                 setPlay2Counter(play2Counter-1)*/
                {setCounters((actual)=>{

                    return {...actual,c1: actual.c1-1,
                        c2:actual.c2-1}
                })
            }}}>-</button>
            <button onClick={()=>{
                setCounters((actual)=>{
                    return {...actual,c1: actual.c1=10,
                        c2:actual.c2=10}
            })}}>reset</button>
        </div>
    );
}
export default App;
