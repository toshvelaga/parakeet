import React, { Component } from 'react';
import ParakeetHeader from '../../components/ParakeetHeader/ParakeetHeader';

// need to fix css of emailbutton (wierd scope)

class Thanks extends Component {
    state = {  }
    render() { 
        return (<>
            <ParakeetHeader />
            <div style={{width: '80%', textAlign: "left", display: 'inline-block', marginBottom: '1rem'}}>
            <h2 style={{marginTop: '3.5rem'}}>Thanks for your feedback!</h2>            <p style={{color: 'gray'}}>Please check your email for points earned</p>
            
            <p style={{color: 'gray'}}>Recommend this place to your friends and recieve a discount for your next meal!</p>
            </div>

            <button className="emailButton">SHARE</button>
        </>);
    }
}
 
export default Thanks;