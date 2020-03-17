import React, { Component } from 'react';
import ParakeetHeader from '../../../src/components/ParakeetHeader/ParakeetHeader'
import './Email.css'
import axios from 'axios'
import firebaseURL from '../../assets/urls'

import { withRouter } from 'react-router-dom';


const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");


// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  // apiKey: '### FIREBASE API KEY ###',
  // authDomain: '### FIREBASE AUTH DOMAIN ###',
  // projectId: '### CLOUD FIRESTORE PROJECT ID ###'

  apiKey: 'AIzaSyDPoVhmh6ABuI2DJU7SkVwUuk0uiXXBknI',
  authDomain: 'feedback-9ac15.firebaseapp.com',
  projectId: 'feedback-9ac15'
});

var db = firebase.firestore();


// todo: need to add email validation

class Email extends Component {
    state = { value: '' }

    InputHandler = (e) => {
        this.setState({value: e.target.value})
    }

    onSubmit = () => {
        const email = { email: this.state.value }
        axios.post(firebaseURL + '/reviewers.json', email, {
            headers: {
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then(response => console.log(response))
        .catch(error => console.log(error))
            .then(this.props.history.push("/Rating"));
    }


    onSubmit2 = () => {
        // const email = {email: this.state.value}
        // axios.post('', email)
        // .then (response => console.log(response))
        // .catch(error => console.log(error))

        // Add a new document in collection "cities"
        db.collection("cities").doc("LA").set({
            name: "Los Angeles",
            state: "CA",
            country: "USA"
        })
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });

    }

    render() { 
        {console.log(this.state.value)}
        return (<div>
            <ParakeetHeader />
            <input value={this.state.value} onChange={this.InputHandler} className="emailInput" type="email" id="email" name="email" placeholder="Enter your email"></input>
            <button onClick={this.onSubmit2} className="emailButton">Submit foo</button>
        </div>);
    }
}
 
export default withRouter(Email);








