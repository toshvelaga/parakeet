import React, { Component } from 'react';
import './FeedbackBtns.css'

import { withRouter } from 'react-router-dom';

// toggle SO: https://stackoverflow.com/questions/42630473/react-toggle-class-onclick

// importing store into component

import store from '../../../store/store'
import { ADD_FEEDBACK, REMOVE_FEEDBACK } from '../../../store/constants/action-types';

class FeedbackBtns extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            className: 'feedbackBtn',
            active: true,
            doingWell: [],
        };
    }

    toggleClass = () => {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };

    nameToState = () => {
        if (this.state.active == true) {
            console.log("add" + this.props.name)
            const action1 = {type: ADD_FEEDBACK, addedName: this.props.name };
            store.dispatch(action1)
        } else if (this.state.active == false) {
            console.log("remove" + this.props.name)
            const action2 = {type: REMOVE_FEEDBACK, removedName: this.props.name };
            store.dispatch(action2)
        }
    }

    onClickFx = () => {
        this.toggleClass();
        this.nameToState();
    }

    render() { 
        console.log(store.getState().greatFeedReducer)
        
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