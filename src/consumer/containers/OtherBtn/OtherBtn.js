import React, { Component } from 'react';
import './OtherBtn.css'

import { 
    ADD_GREAT_FEEDBACK, 
    REMOVE_GREAT_FEEDBACK,
    ADD_BAD_FEEDBACK,
    REMOVE_BAD_FEEDBACK
} from '../../../store/constants/action-types';

import store from '../../../store/store'

class Otherbtn extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            className: 'OtherBtn',
            active: true,
        };
    }

    toggleClass = () => {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };

    dispatchToStore = () => {
        const review = store.getState().btnReducer.reviewType

        if (this.state.active == true && review == 'great') {
            const action1 = {type: ADD_GREAT_FEEDBACK, addedName: 'Other' };
            store.dispatch(action1)
        } else if (this.state.active == false && review == 'great') {
            const action2 = {type: REMOVE_GREAT_FEEDBACK, removedName: 'Other'};
            store.dispatch(action2)
        } else if (this.state.active == true && review == 'bad') {
            const action3 = {type: ADD_BAD_FEEDBACK, addedName: 'Other' };
            store.dispatch(action3)
        } else if (this.state.active == false && review == 'bad') {
            const action4 = {type: REMOVE_BAD_FEEDBACK, removedName: 'Other' };
            store.dispatch(action4)
        }
    }

    onClickFx = () => {
        this.toggleClass();
        this.dispatchToStore();
    }

    render() { 

        const reviewType = store.getState().btnReducer.reviewType;
        let button;

        if (reviewType == 'great') {
            button = <button onClick={this.onClickFx} className={this.state.active ? 'OtherBtn' : 'blueOtherBtn'}>Other</button> 
        } 
        if (reviewType == 'bad') {
            button = <button onClick={this.onClickFx} className={this.state.active ? 'OtherBtn' : 'redOtherBtn'}>Other</button>
        }

        return (<>
            {button}
            </>
        );
    }
}
 
export default Otherbtn;

