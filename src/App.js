import React from 'react';
import Stack from './Stack';
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
          <Stack name='crown' img={crown} title='The Crown'/>
          <Stack name='friends' img={friends} title='Friends'/>
          <Stack name='chernobyl' img={chernobyl} title='Chernobyl'/>
        </div>
        <div className='container'>
          <Stack name='biglittlelies' img={biglittlelies} title='Big little lies'/>
          <Stack name='blackmirror' img={blackmirror} title='BLack Mirror'/>
          <Stack name='outlander' img={outlander} title='Outlander'/>
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
