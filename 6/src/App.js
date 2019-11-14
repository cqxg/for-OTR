import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import Actors from './pages/actors';
import Home from './pages/home';

import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-wrapper">
        <div>
          <Link to="/">Home</Link>
          <Link to="/actors">Actors</Link>
        </div>
        <Route path="/" component={Home} />
        <Route path="/actors" component={Actors} />
      </div>
    </Router>
  )
};

export default App;
