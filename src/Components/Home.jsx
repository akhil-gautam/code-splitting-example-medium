import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../logo.svg';

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

export default Home;
