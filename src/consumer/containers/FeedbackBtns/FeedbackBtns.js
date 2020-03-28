import React, { Component } from 'react';
import './FeedbackBtns.css'

import { withRouter } from 'react-router-dom';

import store from '../../../store/store'

import { 
    ADD_GREAT_FEEDBACK, 
    REMOVE_GREAT_FEEDBACK,
    ADD_BAD_FEEDBACK,
    REMOVE_BAD_FEEDBACK
} from '../../../store/constants/action-types';

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

    nameToState1 = () => {
        if (this.state.active == true) {
            console.log("add" + this.props.name)
            const action1 = {type: ADD_GREAT_FEEDBACK, addedName: this.props.name };
            store.dispatch(action1)
        } else if (this.state.active == false) {
            console.log("remove" + this.props.name)
            const action2 = {type: REMOVE_GREAT_FEEDBACK, removedName: this.props.name };
            store.dispatch(action2)
        }
    }

    nameToState2 = () => {
        if (this.state.active == true) {
            console.log("add" + this.props.name)
            const action1 = {type: ADD_BAD_FEEDBACK, addedName: this.props.name };
            store.dispatch(action1)
        } else if (this.state.active == false) {
            console.log("remove" + this.props.name)
            const action2 = {type: REMOVE_BAD_FEEDBACK, removedName: this.props.name };
            store.dispatch(action2)
        }
    }

    onClickFx1 = () => {
        this.toggleClass();
        this.nameToState1();
    }

    onClickFx2 = () => {
        this.toggleClass();
        this.nameToState2();
    }

    render() { 
        console.log(store.getState().greatFeedReducer)
        
        const reviewType = store.getState().btnReducer.reviewType;
        let button;

        if (reviewType == 'great') {
            button = <button onClick={this.onClickFx1} className={this.state.active ? 'feedbackBtn' : 'greatSelected'}>{this.props.name}</button>
        } 
        if (reviewType == 'bad') {
            button = <button onClick={this.onClickFx2} className={this.state.active ? 'feedbackBtn' : 'badSelected'}>{this.props.name}</button>
        }

        return ( 
            button
        );
    }
}
 
export default withRouter(FeedbackBtns);