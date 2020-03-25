import React from 'react';
import './App.css';

// React Router imports

// importing routes 

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Consumer imports

import Email from './consumer/containers/Email/Email'
import Rating from './consumer/containers/Rating/Rating'
import Greatfeedback from './consumer/containers/GreatFeedback/GreatFeedback'
import Negativefeedback from './consumer/containers/NegativeFeedback/NegativeFeedback';
import Thanks from './consumer/containers/Thanks/Thanks';

// Business imports

import Analytics from './businesses/containers/Analytics/Analytics'
import Feed from './businesses/containers/Feed/Feed';
import Customize from './businesses/containers/Customize/Customize';
import SignIn from './businesses/containers/SignIn/SignIn';
import SignUp from './businesses/containers/SignUp/SignUp';

function App() {
  return (

    <div className="App">
    <Router>
      <Switch>
          <Route path="/signup">
            <SignUp />
          </Route>

          <Route path="/signin">
            <SignIn />
          </Route>

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

          <Route path="/feed">
            <Feed />
          </Route>

          <Route path="/customize">
            <Customize />
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
