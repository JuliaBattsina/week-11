import {useRef, useReducer, useEffect} from 'react';
import './App.css';

function reducer (state, action) {
  switch (action.type) {
case 'START' : 
return {...state, isTicking: true};
case 'PAUSE' : 
return {...state, isTicking: false};
case 'RESET' :
return {clock:0, isTicking: false};
case 'TICK' :
return {...state, clock: state.clock +1};
default: return state;

  }
}

const initialState = {
  clock:0,
  isTicking: false
}

function App() {
  const [state, dispatch] = useReducer (reducer,{initialState});
  const myTimeRef = useRef(0);

  useEffect (() => {
    if (!state.isTicking) {
      return;
    }
    myTimeRef.current =setInterval (()=> dispatch ({type:"TICK"}),1000);
  
  return ()=> {
    clearInterval (myTimeRef.current);
    myTimeRef.current=0
  }
}, [state.isTicking])
  
  
  return (
    <div className="App">
    
    <p>{state.clock}</p>
  <button onClick={()=> dispatch({type : 'START'})}> Start</button>
    <button onClick={()=> dispatch ({type : 'PAUSE'})}>Pause</button>
    <button onClick={()=> dispatch ({type: 'RESET'})}>Reset </button>
    </div>
  );
}

export default App;
