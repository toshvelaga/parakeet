import React, { Component } from 'react';
import ImproveBtn from '../../components/ImproveBtn/ImproveBtn';
import Otherbtn from '../../components/OtherBtn/OtherBtn';
import './FeedbackBtns.css'

class FeedbackBtns extends Component {
    state = { color: 'red' }

    handleTrigger = (color) => {
        this.setState({ color: color })
    }

    render() { 
        return (<>
            <div>
                <button className="feedbackBtn">Food</button>
                <button className="feedbackBtn">Service</button>
            </div>

            <div>
                <button className="feedbackBtn">Pricing</button>
                <button className="feedbackBtn">Ambience</button>
            </div>

            <div>
                <button className="feedbackBtn">Cleanliness</button>
                <button className="feedbackBtn">Plating</button>
            </div>
            <Otherbtn />
        </>);
    }
}
 
export default FeedbackBtns;