import React, { Component } from 'react';
import ParakeetHeader from '../../components/ParakeetHeader/ParakeetHeader'
import './Email.css'
import axios from 'axios'
// import firebaseURL from '../../../assets/urls'
import { withRouter } from 'react-router-dom';
import firebase from '../../../firebase/fbConfig'

// firestore documentation: https://firebase.google.com/docs/firestore/query-data/get-data

let db = firebase.firestore();

class Email extends Component {
    state = { value: '' }

    InputHandler = (e) => {
        this.setState({value: e.target.value})
    }

    validateEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    onSubmit2 = () => {

        const email = this.state.value

        if (this.validateEmail(email) === false) {
            alert("The email you entered is invalid")
        } else
        
        db.collection("customers").doc(this.props.match.params.uid).set({
            emails: {email: this.state.value},
        })
        .then(function() {
            console.log("Document successfully written!");
        })
        .then(this.props.history.push('/' + this.props.match.params.uid + '/rating'))
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
    }

    emailCloudFunction = () => {
        // const email = { email: this.state.value }
        axios.post('https://us-central1-feedback-9ac15.cloudfunctions.net/helloWorld')
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }

    render() { 
        return (<div>
            <ParakeetHeader />

            <input value={this.state.value} onChange={this.InputHandler} className="emailInput" type="email" id="email" name="email" placeholder="Enter your email"></input>
            <button onClick={this.onSubmit2} className="emailButton">Submit</button>

            {/* <button onClick={this.emailCloudFunction} className="emailButton">Submit</button> */}

        </div>);
    }
}
 
export default withRouter(Email);








