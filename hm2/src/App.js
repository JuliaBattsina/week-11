import {useState, useRef, useEffect} from 'react';
import './App.css';

function App() {
  const [count, setCount]= useState (0);
  const previousCountRef = useRef (0);
  const previousCount = previousCountRef.current;
  useEffect (()=> {
    previousCountRef.current = count;
  })
  return (
    <div className="App">
      <p> Curent State: {count} </p>
      <p> Previous State: {previousCount} </p>
      <button onClick={() => setCount(count+1)} > Click Here </button>
    </div>
  );
}

export default App;
