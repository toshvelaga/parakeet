import React, { Component } from 'react';
import NavButton from '../../components/NavButton/NavButton';
import ParakeetHeader from '../../components/ParakeetHeader/ParakeetHeader';
import Greatmessage from '../../components/GreatMessage/GreatMessage';
import FeedbackBtns from '../FeedbackBtns/FeedbackBtns';
import Textarea from '../Textarea/Textarea';
import Otherbtn from '../OtherBtn/OtherBtn';
import { withRouter } from 'react-router'; 
import store from '../../../store/store'
import { connect } from 'react-redux';
import firebase from '../../../firebase/fbConfig'

let db = firebase.firestore();

let today = new Date().toLocaleDateString()

class Greatfeedback extends Component {
    constructor(props) {
        super(props);
    }

    onBack = () => {
        this.props.history.goBack()
    }

    onSubmit = () => {
        db.collection("users").doc(this.props.match.params.uid).collection("customers").add({
            emails: {
            review: store.getState().textareaReducer.textValue,
            Doing_Well: store.getState().feedbackReducer.doingGreat,
            rating: store.getState().ratingReducer.rating,
            Date: today }
        })
        
        this.props.history.push("/thanks")
    }

    render() { 
        
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

export default connect()(withRouter(Greatfeedback));