import React, { Component } from 'react';
import NavButton from '../../components/NavButton/NavButton';
import ParakeetHeader from '../../components/ParakeetHeader/ParakeetHeader';
import Greatmessage from '../../components/GreatMessage/GreatMessage';
import FeedbackBtns from '../FeedbackBtns/FeedbackBtns';
import Textarea from '../Textarea/Textarea';
import Otherbtn from '../OtherBtn/OtherBtn';

import { withRouter } from 'react-router'; 

import store from '../../../store/store'

class Greatfeedback extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            text: '',
        };
    }

    onBack = () => {
        this.props.history.push("/rating")
    }

    onSubmit = () => {
        this.props.history.push("/thanks")
    }

    clickMessage = () => {
        console.log('Food');
    }

    render() { 

        store.subscribe(() => {      
            this.setState({
              text: store.getState().textareaReducer.textValue
            });
        });

        console.log(this.state.text)
        
        const outerDivStyle = {width: '85%', display: 'inline-block'}
        const innerDivStyle = {display: 'flex', justifyContent: 'space-between'}

        return (<>
        <ParakeetHeader />
        <div style={{width: '85%'}}>
        <Greatmessage />
        </div>
        
        <div style={outerDivStyle}>
        <div style={innerDivStyle}>
            <FeedbackBtns name="Food" />
            <FeedbackBtns name="Service" />
        </div>
            
        <div style={innerDivStyle}>
            <FeedbackBtns name="Pricing" />
            <FeedbackBtns name="Ambience" />
        </div>

        <div style={innerDivStyle}>
            <FeedbackBtns name="Cleanliness" />
            <FeedbackBtns name="Plating" />
        </div>
        </div>

        <Otherbtn />
        
        <div style={{marginTop: '1rem'}}>
        <Textarea label="We'd love to hear your feedback!"/>
        </div>
        
        <div style={outerDivStyle}>
        <div style={{...innerDivStyle, marginTop: '2rem'}}>
        <NavButton name="BACK" click={this.onBack} />
        <NavButton name="SUBMIT" click={this.onSubmit}/>
        </div>
        </div>
        
        </>);
    }
}

export default withRouter(Greatfeedback);