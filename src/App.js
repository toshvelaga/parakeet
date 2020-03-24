import React from 'react';
import './App.css';

// React Router imports

import { connect } from "react-redux";

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

import Home from './businesses/components/Home/Home'
import Login from './businesses/components/Login/Login'
import ProtectedRoute from './businesses/components/ProtectedRoute/ProtectedRoute'

function App(props) {
  const { isAuthenticated, isVerifying } = props;
  return (

    <div className="App">
    <Router>
      <Switch>
          <ProtectedRoute
            exact
            path="/home"
            component={Home}
            isAuthenticated={isAuthenticated}
            isVerifying={isVerifying}
          />
          <Route path="/login" component={Login} />

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

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying
  };
}

export default connect(mapStateToProps) (App);
