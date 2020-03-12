import React, { Component } from 'react';
import './OtherBtn.css'
import Textarea from '../Textarea/Textarea'

class Otherbtn extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            className: 'OtherBtn',
            active: 'false',
            reviewType: 'great',
        };
    }

    toggleClass = () => {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };

    render() { 

        const reviewType = this.state.reviewType;
        let button;

        if (reviewType == 'great') {
            button = <button onClick={this.toggleClass} className={this.state.active ? 'OtherBtn' : 'blueOtherBtn'}>Other</button>
        } 
        if (reviewType == 'bad') {
            button = <button onClick={this.toggleClass} className={this.state.active ? 'OtherBtn' : 'redOtherBtn'}>Other</button>
        }

        return (<>
            {button}
            <Textarea />
            </>
        );
    }
}
 
export default Otherbtn;

