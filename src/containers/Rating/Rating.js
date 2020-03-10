import React, { Component } from 'react';
import ParakeetHeader from '../../../src/components/ParakeetHeader/ParakeetHeader'
import Stars from '../Stars/Stars'

class Rating extends Component {
    state = {  }
    render() { 
        return (<>
            <ParakeetHeader />
            <p style={{fontSize: '1.5rem'}}>How was your experience?</p>
            <Stars />
        </>);
    }
}
 
export default Rating;