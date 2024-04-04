import {useReducer} from 'react';
import './App.css';
function reducer (state, action) {
  switch (action.type) {
    case 'MULTIPLY' : return {count: state.count *5};
    case 'DIVIDE'   : return { count: state.count / 5};
    default : return state;
  }
}
function App() {
  const [state, dispatch] = useReducer (reducer, {count:5})
  return (
    
    <div className="App">
      <p>{state.count}</p>
      <button onClick={()=> dispatch({type : 'MULTIPLY'})}>MULTIPLY</button>
      <button onClick={()=> dispatch({type :'DIVIDE'})}> DIVIDE</button>
    </div>
  );
}

export default App;
