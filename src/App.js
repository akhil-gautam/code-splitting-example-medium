import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

// importing other components using Dynamic Import
const About = lazy(() =>
  import(/* webpackChunkName: "About" */ './Components/About'));

const Contact = lazy(() =>
  import(/* webpackChunkName: "Contact" */ './Components/ContactUs'));

const Home = () => {
  return (
    <div className="App">
      <div style={{border: '2px solid blue', background: 'yellow', display: 'grid', gridGap: '1rem'}}>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
      </Switch>
    </Suspense>
  </Router>
);

export default App;
