import React from 'react';
import cover from './about_time.jpg';
import './App.css';
import crown from './crown.jpg';
import chernobyl from './chernobyl.jpg';
import friends from './friends.jpg';
import biglittlelies from './biglittlelies.jpg';
import blackmirror from './blackmirror.jpg';
import outlander from './outlander.jpg';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Codflix!</h1>
      <img src={cover} className="cover-photo" alt="cover-photo" />
      <div className='series'>
        <h2>My favorite series</h2>
        <div>
          <img src={crown} alt='crown'></img>
          <img src={friends} alt='friends'></img>
          <img src={chernobyl} alt='chernobyl'></img>
        </div>
        <div>
          <img src={biglittlelies} alt='biglittlelies'></img>
          <img src={blackmirror} alt='blackmirror'></img>
          <img src={outlander} alt='outlander'></img>
        </div>
      </div>
      <div className="TV-show">
        <h2>TV shows titles</h2>
        <div className='container'>
          <div className='item'>The Crown</div>
          <div className='item'>Friends</div>
          <div className='item'>Chernobyl</div>
        </div>
        <div className='container'>
          <div className='item'>Big little lies</div>
          <div className='item'>Black mirror</div>
          <div className='item'>Outlander</div>
        </div>
      </div>
    </div>
  );
}

export default App;
