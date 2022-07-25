import { useState } from 'react';
import './css/App.css';
import Card from './components/Card';
import quotes from './assets/quotes.json';

function random(array)
{
    return array[Math.floor(Math.random() * array.length)];
}

function App() {
  const [object, setObject] = useState(random(quotes));

  function randomizeQuotes()
  {
    setObject(random(quotes));
  }

  let cssColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style = `background: #${cssColor};`;
  return (
    <div className="App">
      <Card content={object.quote} author={object.author} cb={randomizeQuotes} color={cssColor}/>
      <br />
      <h3> Realizado por: Raul Gomez</h3>
    </div>
  );
}

export default App;
