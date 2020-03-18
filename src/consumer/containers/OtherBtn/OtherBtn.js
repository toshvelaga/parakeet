import React, { Component } from 'react';
import './OtherBtn.css'
import Textarea from '../Textarea/Textarea'

import store from '../../../store/store'

class Otherbtn extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            className: 'OtherBtn',
            active: 'false',
        };
    }

    toggleClass = () => {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };

    render() { 

        const reviewType = store.getState().btnReducer.reviewType;
        let button;

        if (reviewType == 'great') {
            button = <button onClick={this.toggleClass} className={this.state.active ? 'OtherBtn' : 'blueOtherBtn'}>Other</button> 
        } 
        if (reviewType == 'bad') {
            button = <button onClick={this.toggleClass} className={this.state.active ? 'OtherBtn' : 'redOtherBtn'}>Other</button>
        }

        return (<>
            {button}
            </>
        );
    }
}
 
export default Otherbtn;

