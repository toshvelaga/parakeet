import React, { Component } from 'react';
import Otherbtn from '../../components/OtherBtn/OtherBtn';
import './FeedbackBtns.css'

// toggle SO: https://stackoverflow.com/questions/42630473/react-toggle-class-onclick

class FeedbackBtns extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            className: 'feedbackBtn',
            active: 'false' };
    }

    toggleClass = () => {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };

    render() { 
        return ( 
            <button onClick={this.toggleClass} className={this.state.active ? 'feedbackBtn' : 'greatSelected'}>{this.props.name}</button>
        );
    }
}
 
export default FeedbackBtns;