import React, { Component } from 'react';
import ParakeetHeader from '../../components/ParakeetHeader/ParakeetHeader';

// need to fix css of emailbutton (wierd scope)

class Thanks extends Component {
    state = {  }
    render() { 
        return (<>
            <ParakeetHeader />
            <div style={{marginTop: '2rem', fontSize: '4rem'}}>🙌</div>
            <div style={{width: '80%', textAlign: "left", display: 'inline-block', marginBottom: '1rem'}}>
                <h2 style={{marginTop: '0rem'}}>Thanks for your feedback!</h2>           
                <p style={{color: 'gray'}}><span style={{fontSize: '1.5rem'}}>🍜</span> Please check your email for points earned. </p>
                <p style={{color: 'gray'}}><span style={{fontSize: '1.5rem'}}>🍜</span> Earn points to recieve free food. </p>
                <p style={{color: 'gray'}}><span style={{fontSize: '1.5rem'}}>🍜</span> Share Parakeet with friends. </p>
            </div>

            <a href='http://twitter.com/share?text=Try out Parakeet and get free food!&url=https://spot-f43fe.firebaseapp.com/&hashtags=parakeet,goodfood,freefood'>
                <button className="emailButton">SHARE</button>
            </a>
        </>);
    }
}
 
export default Thanks;