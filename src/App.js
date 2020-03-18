import React from 'react';
import './App.css';

import Email from './containers/Email/Email'
import Rating from './containers/Rating/Rating'
import Greatfeedback from './containers/GreatFeedback/GreatFeedback'
import Negativefeedback from './containers/NegativeFeedback/NegativeFeedback';
import Thanks from './containers/Thanks/Thanks';

// importing routes 

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
            <Route path="/">
              <Email />
            </Route>
          </Switch>
      </Router>
      </div>
  );
}

export default App;
