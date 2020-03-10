import React, { Component } from 'react';
import ParakeetHeader from '../../../src/components/ParakeetHeader/ParakeetHeader'
import './Email.css'

import { withRouter } from 'react-router-dom';

// todo: need to add email validation

class Email extends Component {
    state = { value: '' }

    InputHandler = (e) => {
        this.setState({value: e.target.value})
    }

    onSubmit = () => {
        this.props.history.push("/Rating");
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