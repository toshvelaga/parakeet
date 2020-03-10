import React, { Component } from 'react';
import NavButton from '../../components/NavButton/NavButton';
import ParakeetHeader from '../../../src/components/ParakeetHeader/ParakeetHeader';
import Greatmessage from '../../components/GreatMessage/GreatMessage';
import FeedbackBtns from '../FeedbackBtns/FeedbackBtns';
import Textarea from '../Textarea/Textarea';

class Greatfeedback extends Component {
    state = {  }
    render() { 
        return (<>
        <ParakeetHeader />
        <Greatmessage />
        <FeedbackBtns />
        <div style={{width: '85%', display: 'inline-block'}}>
        <div style={{marginTop: '14.5rem', display: 'flex', justifyContent: 'space-between'}}>
        <NavButton name="BACK" />
        <NavButton name="SUBMIT" />
        </div>
        </div>
        </>);
    }
}
 
export default Greatfeedback;