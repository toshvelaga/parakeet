import React, { Component } from 'react';

import Sorrymessage from "../../components/SorryMessage/SorryMessage"
import ParakeetHeader from '../../components/ParakeetHeader/ParakeetHeader';
import FeedbackBtns from '../FeedbackBtns/FeedbackBtns';
import RadioBtn from '../RadioBtn/RadioBtn';
import NavButton from '../../components/NavButton/NavButton'
import Otherbtn from '../OtherBtn/OtherBtn'
import Textarea from '../Textarea/Textarea';

import { withRouter } from 'react-router'; 

class Negativefeedback extends Component {
    constructor(props) {
        super(props);
    }

    onBack = () => {
        this.props.history.push("/rating")
    }

    onSubmit = () => {
        this.props.history.push("/thanks")
    }

    render() { 

        return (<>
            <ParakeetHeader />
            <Sorrymessage />

        <div>
            <FeedbackBtns name="Food" />
            <FeedbackBtns name="Service" />
        </div>

        <div>
            <FeedbackBtns name="Pricing" />
            <FeedbackBtns name="Ambience" />
        </div>
        
        <div>
            <FeedbackBtns name="Cleanliness" />
            <FeedbackBtns name="Plating" />
        </div>
            
        <Otherbtn />
            
        <div style={{marginTop: '1rem'}}>
            <Textarea label="Please tell us how we can do better" color="secondary"/>
        </div>
        
        <div style={{float: 'left', width: '80%'}}>
            <RadioBtn />
        </div>
        
        <div style={{width: '85%', display: 'inline-block'}}>
            <div style={{marginTop: '1rem', display: 'flex', justifyContent: 'space-between'}}>
                <NavButton name="BACK" click={this.onBack} />
                <NavButton name="SUBMIT" click={this.onSubmit} />
            </div>
        </div>
        </>);
    }
}
 
export default withRouter(Negativefeedback);