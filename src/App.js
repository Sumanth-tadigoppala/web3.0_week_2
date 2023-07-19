import './App.css';
import React, { useState } from 'react';

function App() {
  const [data, setData] = useState(0);
  const [titleColor, setTitleColor] = useState('');

  function getQuote() {
    try {
      fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(quote => {
          setData(quote);
          setTitleColor(getRandomColor());
        });
    } catch (e) {
      console.log(e);
    }
  }

  // Helper function to generate a random color
  function getRandomColor() {
    const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#00FFFF', '#FF00FF'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  return (
    <div className="App">
      <h1 className='Main'>WELCOME BUDDY</h1>
      <header className="App-header">
        <h3 className='Title' style={{ borderColor: titleColor }}>Random Quote Generator</h3>
        <h5 className='Author'>Author: {data.author}</h5>
        <h3 className='Quote'>Quote: {data.content}</h3>
        <button className='Button' onClick={getQuote}>Get Quote</button>
      </header>
    </div>
  );
}

export default App;
