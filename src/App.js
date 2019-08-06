import React from 'react';
import cover from './about_time.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Codflix!</h1>
      <img src={cover} className="cover-photo" alt="cover-photo" />
    </div>
  );
}

export default App;
