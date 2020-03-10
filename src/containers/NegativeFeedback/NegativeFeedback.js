import React, { Component } from 'react';

import Sorrymessage from "../../components/SorryMessage/SorryMessage"
import ParakeetHeader from '../../components/ParakeetHeader/ParakeetHeader';
import FeedbackBtns from '../FeedbackBtns/FeedbackBtns';
import RadioBtn from '../RadioBtn/RadioBtn';
import NavButton from '../../components/NavButton/NavButton'

class Negativefeedback extends Component {
    state = {  }
    render() { 
        return (<>
        <ParakeetHeader />
        <Sorrymessage />
        <FeedbackBtns />
        <div style={{float: 'left', width: '80%'}}>
        <RadioBtn />
        </div>
        <div style={{width: '85%', display: 'inline-block'}}>
        <div style={{marginTop: '11.5rem', display: 'flex', justifyContent: 'space-between'}}>
        <NavButton name="BACK" />
        <NavButton name="SUBMIT" />
        </div>
        </div>
        </>);
    }
}
 
export default Negativefeedback;