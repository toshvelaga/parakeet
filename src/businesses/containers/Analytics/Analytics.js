import React, { Component } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import StarRateIcon from '@material-ui/icons/StarRate';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';

import './Analytics.css'
import BarChart from '../BarChart/BarChart';

import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import firebase from '../../../firebase/fbConfig'

// todo: good reviews
// todo: bad reviews
// todo: most frequently selected items for improvement (bar chart)
// todo: most frequently selected items that business is doing well in (bar chart)

// can use ChartJS: https://www.chartjs.org/docs/latest/charts/bar.html

let db = firebase.firestore();

class Analytics extends Component {
    constructor(props) {
        super()
    }
    state = { 
        reviewData: []
    }

    componentDidMount() {
        const docRef = db.collection("users").doc(this.props.auth.uid).collection("customers").get()
        .then(querySnapshot => {
            querySnapshot.docs.map(doc => {
                var joined = this.state.reviewData.concat(doc.data())
                this.setState({reviewData: joined})
            });
        });
    }

    render() { 
        const { auth } = this.props
        console.log(auth)
        console.log(this.state.reviewData)

        if (!auth.uid) return <Redirect to='/signin' />

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

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}
 
export default connect(mapStateToProps, null)(Analytics);