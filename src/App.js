import './App.css';
import React from 'react'

function App() {
  const [hide,setshow]=React.useState(false)
  return (
    <div className="App">
      <h1> Press the botton to see new text</h1>
      {
        hide?<h2>A bunch of new text</h2>:null
      }
      <button onClick={() => setshow(true)}>Press Me</button>
    </div>
  );
}

export default App;
