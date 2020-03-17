import React from 'react';
import './App.css';

// Consumer imports

import Email from './consumer/containers/Email/Email'
import Rating from './consumer/containers/Rating/Rating'
import Greatfeedback from './consumer/containers/GreatFeedback/GreatFeedback'
import Negativefeedback from './consumer/containers/NegativeFeedback/NegativeFeedback';
import Thanks from './consumer/containers/Thanks/Thanks';

// Business imports

import Analytics from '../src/businesses/containers/Analytics'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>

          <Route path="/bad">
            <Negativefeedback />
          </Route>

          <Route path="/great">
            <Greatfeedback />
          </Route>

          <Route path="/rating">
          <Rating />
          </Route>

          <Route path="/thanks">
          <Thanks />
          </Route>

          <Route path="/analytics">
            <Analytics />
          </Route>

          <Route path="/">
            <Email />
          </Route>

        </Switch>
    </Router>
    </div>
  );
}

export default App;
