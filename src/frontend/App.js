import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Movies from './Movies';
// import cover from './images/about_time.jpg';
import './App.css';
import Details from './Details/Details';
import NotFound from './NotFound';


function App() {
  return (
    <Router>
    <div className="App">
      <h1>Welcome to Codflix!</h1>
      {/* <img src={cover} className="cover-photo" alt="cover" /> */}
      <div className='series'>
        <h2>My favorite series</h2>
        <Switch>
          <Route exact path='/' component={Movies}/>
          <Route exact path='/not-found' component={NotFound} />
          <Route exact path='/:movieId' component={Details}/>
        </Switch>
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
    </Router>
  );
}



export default App;
