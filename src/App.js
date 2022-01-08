import './App.css';
import React, {useState} from 'react'
import ColorBlock from './ColorBlock';
import ColorForm from './ColorForm';

function App() {
  let [colors, setColors] = useState([])

  const addColor = (newColor) => {
    setColors([...colors, newColor])
  }

  return (
    <div className="App">
      <h2 style={{fontWeight: 'bold'}}>Enter a color to add a block of that color!</h2>
      <ColorForm addColor={addColor}/>
      <div className='color-holder'>
        {colors.map((color, i) => <ColorBlock color={color} key={i}/>)}
      </div>
    </div>
  );
}

export default App;
