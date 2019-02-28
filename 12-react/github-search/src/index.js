import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {HashRouter as Router, Route} from 'react-router-dom';

import Home from './components/Home';

const Routes = (
  <Router>
    <div>
      <Router exact path="/" component={Home} />
      <Router exact path="search" component={Search} />
    </div>
  </Router>
)

ReactDOM.render(Routes, document.getElementById('root'));
