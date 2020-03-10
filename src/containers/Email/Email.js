import React, { Component } from 'react';
import ParakeetHeader from '../../../src/components/ParakeetHeader/ParakeetHeader'
import './Email.css'
import axios from 'axios'
import firebaseURL from '../../assets/urls'

import { withRouter } from 'react-router-dom';

// todo: need to add email validation

class Email extends Component {
    state = { value: '' }

    InputHandler = (e) => {
        this.setState({value: e.target.value})
    }

    onSubmit = () => {
        const email = { email: this.state.value }
        const url = 'https://feedback-9ac15.firebaseio.com/'
        axios.post(firebaseURL + '/reviewers.json', email)
        .then(response => console.log(response))
        .catch(error => console.log(error))
            .then(this.props.history.push("/Rating"));
    }

    render() { 
        {console.log(this.state.value)}
        return (<div>
            <ParakeetHeader />
            <input value={this.state.value} onChange={this.InputHandler} className="emailInput" type="email" id="email" name="email" placeholder="Enter your email"></input>
            <button onClick={this.onSubmit} className="emailButton">Submit</button>
        </div>);
    }
}
 
export default withRouter(Email);