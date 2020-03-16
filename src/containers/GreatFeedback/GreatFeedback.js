import React, { Component } from 'react';
import NavButton from '../../components/NavButton/NavButton';
import ParakeetHeader from '../../../src/components/ParakeetHeader/ParakeetHeader';
import Greatmessage from '../../components/GreatMessage/GreatMessage';
import FeedbackBtns from '../FeedbackBtns/FeedbackBtns';
import Textarea from '../Textarea/Textarea';
import Otherbtn from '../OtherBtn/OtherBtn';

import { withRouter } from 'react-router'; 

class Greatfeedback extends Component {
    constructor(props) {
        super(props);
        this.state = { };
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
        <Greatmessage />
        
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
        <Textarea label="We'd love to hear your feedback!"/>
        </div>
        
        <div style={{width: '85%', display: 'inline-block'}}>
        <div style={{marginTop: '2rem', display: 'flex', justifyContent: 'space-between'}}>
        <NavButton name="BACK" click={this.onBack} />
        <NavButton name="SUBMIT" click={this.onSubmit}/>
        </div>
        </div>
        
        </>);
    }
}
 
export default withRouter(Greatfeedback);