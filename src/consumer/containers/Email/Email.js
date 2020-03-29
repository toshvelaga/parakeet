import React, { Component } from 'react';
import ParakeetHeader from '../../components/ParakeetHeader/ParakeetHeader'
import './Email.css'
import { withRouter } from 'react-router-dom';
import validateEmail from '../../../assets/emailValidation'
import store from '../../../store/store'

// firestore documentation: https://firebase.google.com/docs/firestore/query-data/get-data

class Email extends Component {
    state = { value: '' }

    InputHandler = (e) => {
        this.setState({value: e.target.value})
    }

    onSubmit2 = () => {
        const email = this.state.value

        if (validateEmail(email) === false) {
            alert("The email you entered is invalid")
        } else {
        const action = { type: 'SUBMIT_EMAIL', text: this.state.value }
        store.dispatch(action)
        this.props.history.push('/' + this.props.match.params.uid + '/rating')
        }
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

            <input value={this.state.value} onChange={this.InputHandler} className="emailInput" type="email" id="email" name="email" placeholder="Enter your email"></input>
            <button onClick={this.onSubmit2} className="emailButton">Submit</button>

            {/* <button onClick={this.emailCloudFunction} className="emailButton">Submit</button> */}

        </div>);
    }
}
 
export default withRouter(Email);








