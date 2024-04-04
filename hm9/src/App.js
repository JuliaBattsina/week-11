import MyTheme from './MyTheme';
import MyThemeTwo from './MyThemeTwo';
import './App.css';
import React from 'react';
import {useState} from 'react';
export const ColorContext = React.createContext ()

function App() {
  const [myColor, setMyColor] = useState (true)
  function changeColor () {
    setMyColor((myFirstColor) => !myFirstColor)
  }
  return (
    <div className="App">
      <h1>Click  and the color will change</h1>
      <ColorContext.Provider value={myColor}>
      <button onClick={changeColor}>Change a color</button>
      <MyTheme/>
      <MyThemeTwo/>
      </ColorContext.Provider>
    </div>
  );
}

export default App;
