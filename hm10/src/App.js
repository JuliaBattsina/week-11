import {useMemo,useState} from 'react';
import './App.css';
const fruits =[
  {id:"1", item: "Peach"},
  {id:"2", item: "Apple"},
  {id:"3", item: "Pineapple"},
  {id:"4", item: "Plum"},
  {id:"5", item: "Orange"},
  {id:"6", item: "Banana"},
];
function App() {
  const [text, setText] =useState ("");
  const [search, setSearch] = useState ("");

  const handleText = (e) => {
    setText (e.target.value);
  }

  const handleSearch = () => {
setSearch (text)
  }
  const filteredFruits = useMemo( () => fruits.filter((fruit) => {
  return fruit.item.toLowerCase().includes (search.toLowerCase())
  }), [search])
  return (
    <div className="App">
      <h1>Filtering...</h1>
      <input type="text" value={text} onChange={handleText}/>
      <button type='button' onClick={handleSearch}>Search</button>
      <div className="App">
    {filteredFruits.map((filteredFruit) => (
      <p key={filteredFruit.id}>{filteredFruit.item}</p>
    ))}
    </div>
    </div>
  );
}

export default App;
