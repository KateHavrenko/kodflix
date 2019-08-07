import React from 'react';
import cover from './images/about_time.jpg';
import './App.css';
import crown from './images/crown.jpg';
import chernobyl from './images/chernobyl.jpg';
import friends from './images/friends.jpg';
import biglittlelies from './images/biglittlelies.jpg';
import blackmirror from './images/blackmirror.jpg';
import outlander from './images/outlander.jpg';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Codflix!</h1>
      <img src={cover} className="cover-photo" alt="cover" />
      <div className='series'>
        <h2>My favorite series</h2>
        <div className='container'>
          <div className='item'>
            <img src={crown} alt='crown'/>
            <div className='overlay'>
              <p>The Crown</p>
            </div>
          </div>
          <div className='item'>
            <img src={friends} alt='friends'/>
            <div className='overlay'>
              <p>Friends</p>
            </div>
          </div>
          <div className='item'>
            <img src={chernobyl} alt='chernobyl'/>
            <div className='overlay'>
              <p>Chernobyl</p>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='item'>
            <img src={biglittlelies} alt='biglittlelies'/>
            <div className='overlay'>
              <p>Big little lies</p>
            </div>
          </div>
          <div className='item'>
            <img src={blackmirror} alt='blackmirror'/>
            <div className='overlay'>
              <p>Black Mirror</p>
            </div>
          </div>
          <div className='item'>
            <img src={outlander} alt='outlander'/>
            <div className='overlay'>
              <p>Outlander</p>
            </div>
          </div>
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
