import React, { Component } from 'react';
import ImproveBtn from '../../components/ImproveBtn/ImproveBtn';
import Otherbtn from '../../components/OtherBtn/OtherBtn';

class FeedbackBtns extends Component {
    state = {  }
    render() { 
        return (<>
            <div>
                <ImproveBtn name="Food"/>
                <ImproveBtn name="Service"/>
            </div>

            <div>
                <ImproveBtn name="Pricing"/>
                <ImproveBtn name="Ambience"/>
            </div>

            <div>
                <ImproveBtn name="Cleanliness"/>
                <ImproveBtn name="Plating"/>
            </div>
            <Otherbtn />
        </>);
    }
}
 
export default FeedbackBtns;