import React, { Component } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import StarRateIcon from '@material-ui/icons/StarRate';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';

import './Analytics.css'
import BarChart from '../BarChart/BarChart';

// todo: good reviews
// todo: bad reviews
// todo: most frequently selected items for improvement (bar chart)
// todo: most frequently selected items that business is doing well in (bar chart)

class Analytics extends Component {
    state = {  }
    render() { 
        return (
        <>
            <Navbar />
            <h2 style={{marginTop: 0}}>Analytics</h2>

            <div style={{marginTop: '3rem'}}>

            <div style={{marginRight: '5rem'}} className="reviewTotal">
                <div style={{float: 'left'}}>
                    <StarRateIcon style={{fontSize: '5rem', color: '#0378d8'}} />
                </div>
                <div style={{float: 'right', fontSize: '1rem', marginRight: '1rem'}}>
                    <p>4.5</p>
                    <p>Average Rating</p>
                </div>
            </div>
           
            <div className="reviewTotal">
                <div style={{float: 'left', width: '40%'}}>
                    <ThumbUpAltOutlinedIcon style={{fontSize: '3rem', color: '#0378d8'}} />
                    <ThumbDownOutlinedIcon style={{fontSize: '3rem', color: '#d8030d'}} />
                </div>
                <div style={{float: 'right', width: '40%', fontSize: '1rem', marginRight: '1rem'}}>
                    <p>2</p>
                    <p>Reviews</p>
                </div>
            </div>

            </div>

            <div style={{display: 'inline-block', marginTop: '5rem'}}>
            <h2>Customer Feedback Votes</h2>
            <BarChart />
            </div>
        </>);
    }
}

 
export default Analytics;