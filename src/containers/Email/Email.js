import React, { Component } from 'react';
import ParakeetHeader from '../../../src/components/ParakeetHeader/ParakeetHeader'
import './Email.css'

class Email extends Component {
    state = {  }
    render() { 
        return (<div>
            <ParakeetHeader />
            <input className="emailInput" type="email" id="email" name="email" placeholder="Enter your email"></input>
            <button className="emailButton">Submit</button>
        </div>);
    }
}
 
export default Email;