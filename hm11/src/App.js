import {useCallback, useState} from 'react';
import './App.css';

function App() {
  const [city, setcity] = useState("")
  const handleOnChange = (e) => {
    setcity (e.target.value)
  }
  const handleShow = useCallback (() => {
console.log (city)
  }, [city])
  return (
    <div className="App">
      <input onChange={handleOnChange}/>
      <button onClick={handleShow}>Show the City</button>
    </div>
  );
}

export default App;
