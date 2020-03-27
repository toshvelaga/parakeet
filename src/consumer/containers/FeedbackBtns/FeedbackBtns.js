import React, { Component } from 'react';
import './FeedbackBtns.css'

import { withRouter } from 'react-router-dom';

// toggle SO: https://stackoverflow.com/questions/42630473/react-toggle-class-onclick

// importing store into component

import store from '../../../store/store'

class FeedbackBtns extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            className: 'feedbackBtn',
            active: true,
        };
    }

    toggleClass = () => {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };

    nameToState = () => {
        if (this.state.active == true) {
            console.log(this.props.name)
        } else if (this.state.active == false) {
            console.log('null')
        }
    }

    onClickFx = () => {
        this.toggleClass();
        this.nameToState();
    }

    render() { 
        
        const reviewType = store.getState().btnReducer.reviewType;
        let button;

        if (reviewType == 'great') {
            button = <button onClick={this.onClickFx} className={this.state.active ? 'feedbackBtn' : 'greatSelected'}>{this.props.name}</button>
        } 
        if (reviewType == 'bad') {
            button = <button onClick={this.toggleClass} className={this.state.active ? 'feedbackBtn' : 'badSelected'}>{this.props.name}</button>
        }

        return ( 
            button
        );
    }
}
 
export default withRouter(FeedbackBtns);