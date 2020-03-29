import React, { Component } from 'react';

import Sorrymessage from "../../components/SorryMessage/SorryMessage"
import ParakeetHeader from '../../components/ParakeetHeader/ParakeetHeader';
import FeedbackBtns from '../FeedbackBtns/FeedbackBtns';
import RadioBtn from '../RadioBtn/RadioBtn';
import NavButton from '../../components/NavButton/NavButton'
import Otherbtn from '../OtherBtn/OtherBtn'
import Textarea from '../Textarea/Textarea';
import { connect } from 'react-redux';
import firebase from '../../../firebase/fbConfig'
import store from '../../../store/store'
import { withRouter } from 'react-router'; 

let db = firebase.firestore();

let today = new Date().toLocaleDateString()

class Negativefeedback extends Component {
    constructor(props) {
        super(props);
    }

    onBack = () => {
        this.props.history.goBack();
    }

    onSubmit = () => {
        db.collection("customers").doc(this.props.match.params.uid).set({
            review: store.getState().textareaReducer.textValue,
            Doing_Bad: store.getState().feedbackReducer.doingBad,
            Date: today
        }, { merge: true })

        this.props.history.push("/thanks")
    }

    render() { 

        const outerDivStyle = {width: '85%', display: 'inline-block'}
        const innerDivStyle = {display: 'flex', justifyContent: 'space-between'}

        return (<>
            <ParakeetHeader />

            <div style={{width: '85%'}}>
            <Sorrymessage />
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
                <Textarea label="Please tell us how we can do better" color="secondary"/>
            </div>
            
            <div style={{...outerDivStyle, marginTop: '.3rem'}}>
                <RadioBtn />
            </div>
            
            <div style={outerDivStyle}>
                <div style={{marginTop: '.7rem', display: 'flex', justifyContent: 'space-between'}}>
                    <NavButton name="BACK" click={this.onBack} />
                    <NavButton name="SUBMIT" click={this.onSubmit} />
                </div>
            </div>
        </>);
    }
}
 
export default connect()(withRouter(Negativefeedback));