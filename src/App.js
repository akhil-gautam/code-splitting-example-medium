import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

// importing the Home component by default
import Home from './Components/Home';

// importing other components using Dynamic Import
const About = lazy(() =>
  import(/* webpackChunkName: "About" */ './Components/About'));

const Contact = lazy(() =>
  import(/* webpackChunkName: "Contact" */ './Components/ContactUs'));

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
