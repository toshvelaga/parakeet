import React, { Component } from 'react';
import ParakeetHeader from '../../components/ParakeetHeader/ParakeetHeader'
import './Email.css'
import { withRouter } from 'react-router-dom';
import firebase from '../../../firebase/fbConfig'

import store from '../../../store/store'
import { connect } from 'react-redux'

let db = firebase.firestore();

class Email extends Component {

    validateEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    onSubmit2 = () => {

        const email = this.props
        console.log(email)
        if (this.validateEmail(email) === false) {
            alert("The email you entered is invalid")
        } else
        
        db.collection("users").doc(this.props.match.params.uid).collection("customers").set({
            email: email}, {merge: true})
        .then(function() {
            console.log("Document successfully written!");
        })
        .then(this.props.history.push('/' + this.props.match.params.uid + '/rating'))
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
    }

    // emailCloudFunction = () => {
    //     // const email = { email: this.state.value }
    //     axios.post('https://us-central1-feedback-9ac15.cloudfunctions.net/helloWorld')
    //     .then(response => console.log(response))
    //     .catch(error => console.log(error))
    // }

    render() { 
        return (<div>
            <ParakeetHeader />

            <input value={this.props.email} onChange={this.props.inputChanged} className="emailInput" type="email" id="email" name="email" placeholder="Enter your email"></input>
            <button onClick={this.onSubmit2} className="emailButton">Submit</button>

            {/* <button onClick={this.emailCloudFunction} className="emailButton">Submit</button> */}

        </div>);
    }
}

const mapStatetoProps = (state) => {
    return {
        email: state.emailValue
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        inputChanged: (e) => {
            const action = { type: 'SUBMIT_EMAIL', text: e.target.value }
            store.dispatch(action)
        }
    }
}
 
export default connect(mapStatetoProps, mapDispatchtoProps)(withRouter(Email));








