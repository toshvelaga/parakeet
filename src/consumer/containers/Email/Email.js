import React, { Component } from 'react';
import ParakeetHeader from '../../components/ParakeetHeader/ParakeetHeader'
import './Email.css'
import axios from 'axios'
import firebaseURL from '../../../assets/urls'
import { withRouter } from 'react-router-dom';
import firebase from '../../../assets/init'

// firestore documentation: https://firebase.google.com/docs/firestore/query-data/get-data

let db = firebase.firestore();

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
            <input required value={this.state.value} onChange={this.InputHandler} className="emailInput" type="email" id="email" name="email" placeholder="Enter your email"></input>
            <button onClick={this.onSubmit} className="emailButton">Submit</button>
        </div>);
    }
}
 
export default withRouter(Email);








