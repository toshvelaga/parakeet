import React, { Component } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import StarRateIcon from '@material-ui/icons/StarRate';

import './Analytics.css'

class Analytics extends Component {
    state = {  }
    render() { 
        return (
        <>
            <Navbar />
            <h2>Analytics</h2>
           
            <div className="reviewTotal">
                <div style={{float: 'left', width: '40%'}}>
                    <AccountCircleOutlinedIcon style={{fontSize: '5rem', color: '#92e2b9'}} />
                </div>
                <div style={{float: 'right', width: '40%', fontSize: '1rem', marginRight: '1rem'}}>
                    <h3>2</h3>
                    <h3>Reviews</h3>
                </div>
            </div>

            <div style={{marginLeft: '5rem'}} className="reviewTotal">
                <div style={{float: 'left'}}>
                    <StarRateIcon style={{fontSize: '5rem', color: '#0378d8'}} />
                </div>
                <div style={{float: 'right', fontSize: '1rem', marginRight: '1rem'}}>
                    <h3>4.5</h3>
                    <h3>Average Rating</h3>
                </div>
            </div>
           
        </>);
    }
}

 
export default Analytics;